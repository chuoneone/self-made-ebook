# 自製電子書工作區（給 AI 助理的說明）

這個資料夾是一位教師的**電子書工作區**。教師會請你把學習單、講義、課文、考卷或 YouTube 影片做成「雙模式互動電子書」（學生 A4 純淨列印＋教師大屏點擊顯答），而且會持續累積很多本。

## 開始之前：先讀對應的 skill

所有規格都在 `.claude/skills/` 底下。動手前，先讀與教材相符的 `SKILL.md`：

| 教師的需求 | 要讀的 skill |
| :--- | :--- |
| 國文課文、生字、字族文、國文小考 | `.claude/skills/sped-chinese-master/SKILL.md` |
| 英文文法講義、單字手冊 | `.claude/skills/sped-english-master/SKILL.md` |
| 數學單元、漸進式填空 | `.claude/skills/sped-math-master/SKILL.md` |
| YouTube 影片轉學習單 | `.claude/skills/sped-youtube-master/SKILL.md` |
| 其他科目、通用講義、隨堂小考 | `.claude/skills/self-made-ebook/SKILL.md` |

**不論哪一科，都必須遵守 `.claude/skills/self-made-ebook/SKILL.md` 的「§11 工作區、存檔與電子書目錄」**，也就是：

0. 需要問教師問題時，依 `self-made-ebook/SKILL.md` 的「提問方式」：有可點選的提問工具就用，沒有就列編號選項（標出建議選項），讓教師回一個數字就能答完；一次最多 3 題。
1. 成品存到 `ebook/<subject>/<subject>-<grade>-<unit>[-<type>].html`。
2. 從 `.claude/skills/self-made-ebook/resources/template.html` 起手；`<head>` 填好 `ebook:*` meta，工具列保留 🏠 回目錄按鈕。
3. 完成後在 `ebook/index.html` 的 `<script id="ebook-catalog">` JSON 陣列中新增或更新一筆。只改這段 JSON，不要動頁面其他部分。
4. 有 Node.js 時，可執行 `node .claude/skills/self-made-ebook/scripts/rebuild-index.mjs ebook` 補登漏掉的電子書。
5. 交付時告訴教師檔案路徑，並提醒「打開 `ebook/index.html` 可以看到所有電子書」。

## 教師的個人偏好（可自行修改這一段）

- 學生特質預設：未指定（每次先問）
- 自動 git commit：否
- 在教師明確說「push」之前，絕對不要執行 `git push`。
