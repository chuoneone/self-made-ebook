---
name: interactive-lesson-worksheet
description: >-
  Transforms any teaching materials or lesson preparation documents (regardless of subject: English, Math, Science, Social Studies, Chinese, etc.) into a dual-purpose interactive HTML worksheet. Use this skill whenever the user provides curriculum documents, question banks, or lesson notes and requests a handout that can be directly printed for students as a clean paper test/worksheet, and simultaneously used by the teacher on a classroom projector with mouse-driven click-to-reveal answers and multi-color/thickness drawing tools.
---

# Interactive Lesson Worksheet (雙模式互動備課講義產生器)

此技能專門將教師提供的備課資料（包含單字卷、文法題、句型練寫卷、數學試題、自然科圖表、社會科講義等各科教材），轉換為**單一獨立 HTML 檔案**。
該 HTML 同時具備以下兩大核心能力：
1. **學生端純淨 A4 列印**：直接按列印即還原為無解答、無操作干擾文字的標準學生作業／評量卷。
2. **教師端投影互動教學**：教師在無觸控螢幕的教室環境下，僅憑滑鼠即可「逐題點擊秀答案」、「一鍵揭曉全卷答案」，並使用「多色粗細螢光筆」進行畫線與重點圈記。

---

## 核心設計規範（Strict Requirements）

### 1. 輸出格式與載體
- **嚴格產出純 HTML**：切勿生成 `.doc` 或 `.docx` 檔案（HTML 無需額外軟體、跨平台版面固定、Token 耗損少）。
- **完全獨立自包含**：單一 `.html` 檔案，所有 CSS、SVG 與 JavaScript 全部內嵌，不依賴外部 CDN 或第三方套件。

### 2. 字型與排版規範（特教學障與投影友善）
- **字型家族**：英文 `"Times New Roman"`, 中文 `"標楷體", "DFKai-SB", "BiauKai", serif`。
- **字級大小**：內文標準字級一律為 **14pt**（降低認知負荷、適合中學生及學障生閱讀、遠距投影清晰）。
- **A4 頁面容器**：
  - 頁面寬度 `210mm`，最小高度 `297mm`，頁邊距內縮 `14mm 16mm`。
  - 預設背景淡灰（如 `#e2e8f0`），頁面本體白色並帶有柔和陰影，每頁有獨立頁碼與關卡進度。
  - 列印樣式 `@page { size: A4; margin: 12mm 15mm; }`，`.page { page-break-after: always; }`。

### 3. 禁止出現的干擾文字（Zero Annoying Text）
- **絕對禁止**在題目的大標題、小題中輸出任何引導操作的文字，例如：
  - ❌ `（點題目秀答案）`
  - ❌ `（點左邊卡片秀連線）`
  - ❌ `【點擊此處觀看答案】`
  - 理由：教師已熟悉操作，此類文字印在學生紙本上會造成版面雜亂與困惑。
- 不要對題目元素添加易跳出原生彈窗的 `title="..."` 提示。

### 4. 完美排版對齊結構
- **選擇題／問答題**：採用 `.qa-block` Flex 排版。
  - 左側固定寬度放括弧 `(     )`。
  - 右側為題目主幹，選項 `(A)`、`(B)` 採用垂直堆疊排列，嚴格對齊，嚴禁擠在同一行造成長短不一。
- **連連看題目**：
  - 嚴禁使用表格空格硬湊。
  - 採用左側主詞／概念卡片、右側目標歸納盒、中間透過 SVG `<line>` 動態計算座標繪製虛線連線。

---

## 課堂懸浮工具列（Sleek Floating Pill Toolbar）

必須在 `<body>` 開頭插入固定懸浮膠囊工具列（標記 `.no-print`）：

```html
<div class="classroom-toolbar no-print">
  <!-- 1. 一鍵全開答案 -->
  <button class="tool-btn btn-toggle-ans" id="toggleAllAnsBtn" onclick="toggleAllAnswers()">
    <span id="ansIcon">👁️</span> 答案
  </button>
  
  <!-- 2. 畫筆工具開關 -->
  <button class="tool-btn" id="penBtn" onclick="togglePenMode()">
    ✏️ 畫筆
  </button>
  
  <!-- 3. 畫筆顏色與粗細選單 (啟用畫筆時展開) -->
  <div class="pen-options" id="penOptions">
    <div class="color-picker">
      <span class="color-dot active" style="background:#facc15;" onclick="setPenColor('rgba(250, 204, 21, 0.45)', this)" title="螢光黃"></span>
      <span class="color-dot" style="background:#ef4444;" onclick="setPenColor('rgba(239, 68, 68, 0.8)', this)" title="紅筆"></span>
      <span class="color-dot" style="background:#3b82f6;" onclick="setPenColor('rgba(37, 99, 235, 0.8)', this)" title="藍筆"></span>
      <span class="color-dot" style="background:#10b981;" onclick="setPenColor('rgba(16, 185, 129, 0.8)', this)" title="綠筆"></span>
    </div>
    <div class="sub-divider"></div>
    <div class="size-picker">
      <button class="size-btn" onclick="setPenSize(4, this)">細</button>
      <button class="size-btn" onclick="setPenSize(10, this)">中</button>
      <button class="size-btn active" onclick="setPenSize(20, this)">粗</button>
    </div>
  </div>
  
  <!-- 4. 清除畫跡 -->
  <button class="tool-btn" onclick="clearAllDrawings()">
    清除
  </button>
  
  <div class="toolbar-divider"></div>
  
  <!-- 5. 直接列印 -->
  <button class="tool-btn" onclick="window.print()">
    列印
  </button>
</div>
```

---

## 教學講義鷹架架構（適用各學科）

當使用者提供任何學科教材時，將教材轉化為**循序漸進的闖關鷹架（Scaffolded Quest）**：

1. **第 1 頁：視覺錨點／規則地圖（Concept Map）**
   - 核心規則總覽、心智圖、圖表或公式對照表（降低初始焦慮）。
2. **第 2 頁：核心詞彙／定義百寶箱（Vocabulary / Definitions）**
   - 中英對照、關鍵字定義、屬性整理表，搭配簡單的尋寶檢核題。
3. **第 3 頁：引導式基礎練習（Guided Practice）**
   - 「動手連連看」（送概念回家，SVG 連線）＋「動手圈圈看」（二選一／三選一）。
4. **第 4 頁：深化規則與變形（Deepening & Rules Inversion）**
   - 否定、倒裝、公式代入或例外規則，提供口訣卡與填空選號題。
5. **第 5 頁：情境整合與素養評量（Mastery & Contextual QA）**
   - 情境會話、閱讀理解、題組選擇，頁尾放置學生挑戰星等與教師評語蓋章框。

---

## 樣式與列印關鍵 CSS 規則

```css
/* 預設隱藏解答（投影教學模式） */
.correct-choice {
  display: inline-block;
  padding: 0 4px;
  transition: all 0.2s;
}
.show-ans .correct-choice,
.item-line.show-one .correct-choice,
.qa-block.show-one .correct-choice {
  color: #dc2626 !important;
  font-weight: bold !important;
  border: 2px solid #dc2626 !important;
  border-radius: 14px !important;
  background-color: #fef2f2 !important;
  padding: 0 6px !important;
}

.ans-slot {
  display: inline-block;
  min-width: 24px;
  text-align: center;
  color: transparent;
  font-weight: bold;
}
.show-ans .ans-slot,
.item-line.show-one .ans-slot,
.qa-block.show-one .ans-slot {
  color: #dc2626 !important;
}

/* 每頁專屬全螢幕透明畫布 */
.drawing-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  pointer-events: none;
}
body.pen-mode .drawing-canvas {
  pointer-events: auto;
  cursor: crosshair;
}

/* 列印強制隱藏解答與後台工具，還原白紙學生卷 */
@media print {
  body {
    background: transparent !important;
    padding: 0 !important;
  }
  .no-print,
  .classroom-toolbar,
  .drawing-canvas,
  .matching-svg-layer {
    display: none !important;
  }
  .page {
    margin: 0 !important;
    box-shadow: none !important;
    width: 100% !important;
    min-height: auto !important;
    padding: 0 !important;
  }
  .correct-choice {
    color: inherit !important;
    font-weight: normal !important;
    border: none !important;
    background: transparent !important;
    padding: 0 !important;
  }
  .ans-slot, .ans-word {
    color: transparent !important;
  }
}
```

---

## 標準 JavaScript 控制腳本

講義底部必須包含完整的互動控制邏輯：
1. `toggleItemAnswer(el)`：未開啟畫筆時，點擊題目切換 `.show-one` 類別顯現紅筆圈選。
2. `toggleAllAnswers()`：一鍵全顯／全隱答案，切換按鈕為 👁️ 或 🙈。
3. `togglePenMode()`：切換畫筆狀態與 `#penOptions` 工具盤展開／隱藏。
4. `setPenColor(color, el)` 與 `setPenSize(size, el)`：切換 4 色與 3 種筆徑。
5. `initCanvases()`：監聽滑鼠 `mousedown`、`mousemove`、`mouseup`，利用 `ctx.lineTo()` 繪製平滑圓角線條。
6. `clearAllDrawings()`：一鍵清除所有畫布。
7. SVG 連線座標即時計算：監聽 `window.load` 與 `window.resize`，依據卡片與目標盒的 `getBoundingClientRect()` 更新 `x1, y1, x2, y2`。

---

## 處理流程與執行步驟

當使用者傳入備課檔案（Word、PDF、圖片或文字）：
1. **分析教材**：提煉核心知識點、單字/定義、基礎練習、變化句型與評量。
2. **決定頁數架構**：規劃 A4 頁數（如 3 頁或 5 頁），設定清楚的大題標題與難度階梯。
3. **建構 HTML**：直接套用上述規範，置入題目、解答標記（`.correct-choice`、`.ans-slot`）、SVG 連連看與課堂工具列。
4. **檢查列印與提示文字**：再次確認**絕無** `（點題目秀答案）` 等操作指示文字，確保 `@media print` 能夠完美輸出學生無答案版。
