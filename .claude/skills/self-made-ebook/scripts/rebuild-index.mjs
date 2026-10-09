#!/usr/bin/env node
// 掃描 ebook/ 內所有電子書，同步 ebook/index.html 的目錄 JSON。
// 用法：node rebuild-index.mjs [ebook 資料夾路徑，預設 ./ebook]
// - 新檔案：依 <title> 與 <meta name="ebook:*"> 自動補登記
// - 已登記：保留原有欄位，只補上缺少的欄位
// - 檔案已刪除：移除該筆紀錄（範例與外部連結不動）
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ebookDir = path.resolve(process.argv[2] || "ebook");
const indexPath = path.join(ebookDir, "index.html");
const templatePath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "resources", "index-template.html");
const CATALOG_RE = /(<script id="ebook-catalog" type="application\/json">)([\s\S]*?)(<\/script>)/;

if (!fs.existsSync(indexPath)) {
  fs.mkdirSync(ebookDir, { recursive: true });
  fs.copyFileSync(templatePath, indexPath);
  console.log(`已建立 ${indexPath}`);
}

const html = fs.readFileSync(indexPath, "utf8");
const m = html.match(CATALOG_RE);
if (!m) {
  console.error(`在 ${indexPath} 找不到 <script id="ebook-catalog">，請從 ${templatePath} 重新複製。`);
  process.exit(1);
}
let catalog;
try {
  catalog = JSON.parse(m[2].trim() || "[]");
} catch (err) {
  console.error(`目錄 JSON 格式錯誤：${err.message}`);
  process.exit(1);
}

const toPosix = p => p.split(path.sep).join("/");
const isLocal = p => p && !/^(\.\.\/|[a-z]+:)/i.test(p);

function scan(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "images") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...scan(full));
    else if (entry.name.endsWith(".html") && full !== indexPath) out.push(full);
  }
  return out;
}

function readMeta(file) {
  const src = fs.readFileSync(file, "utf8").slice(0, 20000);
  const meta = {};
  for (const [, name, content] of src.matchAll(/<meta\s+name="ebook:([a-z]+)"\s+content="([^"]*)"/gi)) meta[name] = content;
  const title = (src.match(/<title>([^<]*)<\/title>/i) || [])[1]?.trim();
  const rel = toPosix(path.relative(ebookDir, file));
  const entry = {
    title: title || path.basename(file, ".html"),
    subject: meta.subject || rel.split("/")[0] || "other",
    grade: /^\d+$/.test(meta.grade || "") ? Number(meta.grade) : meta.grade || undefined,
    type: meta.type || undefined,
    pages: meta.pages ? Number(meta.pages) || meta.pages : undefined,
    path: rel,
    date: fs.statSync(file).mtime.toISOString().slice(0, 10),
    summary: meta.summary || undefined,
  };
  for (const k of Object.keys(entry)) if (entry[k] === undefined || /^\{\{.*\}\}$/.test(entry[k])) delete entry[k];
  return entry;
}

const byPath = new Map(catalog.map(b => [b.path, b]));
const partPaths = new Set(catalog.flatMap(b => (b.parts || []).map(p => p.path)));
let added = 0, updated = 0, removed = 0;

for (const file of scan(ebookDir)) {
  const entry = readMeta(file);
  if (partPaths.has(entry.path)) continue;
  const existing = byPath.get(entry.path);
  if (!existing) {
    catalog.push(entry);
    byPath.set(entry.path, entry);
    added++;
    continue;
  }
  let changed = false;
  for (const [k, v] of Object.entries(entry)) {
    if (existing[k] === undefined || existing[k] === "") { existing[k] = v; changed = true; }
  }
  if (changed) updated++;
}

catalog = catalog.filter(b => {
  if (!isLocal(b.path) || b.demo) return true;
  const keep = fs.existsSync(path.join(ebookDir, b.path));
  if (!keep) removed++;
  return keep;
});

const json = "\n" + JSON.stringify(catalog, null, 2) + "\n  ";
fs.writeFileSync(indexPath, html.replace(CATALOG_RE, (_, open, __, close) => open + json + close));
console.log(`電子書目錄已更新：共 ${catalog.length} 筆（新增 ${added}、補齊 ${updated}、移除 ${removed}）`);
