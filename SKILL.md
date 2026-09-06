---
name: self-made-ebook
description: >-
  e指書 / 自製電子書（雙模式教學互動電子書產生器）。專門將教師提供的任何學科備課資料或教學教材（國文、英文、數學、自然、社會、特教等），轉換為單一獨立的「e指書」HTML 檔案。該自製電子書同時具備兩大核心功能：1.「學生端純淨 A4 列印」（直接列印即還原為無解答、無操作干擾文字的標準白紙作業/評量卷）；2.「教師端大屏／投影教學」（逐題點擊秀答案、一鍵揭曉全書答案、多色粗細螢光筆/板書筆圈記劃線）。當使用者提到「e指書」、「自製電子書」、「製作電子書」、「電子教材」、「雙模式互動html」、「互動學習單」或提供備課教材時，皆啟動此 skill。
---

# e指書 (Self-Made E-Book) — 雙模式教學互動電子書產生器

此技能專門將教師提供的備課資料（包含單字卷、文法題、句型練寫卷、數學試題、自然科圖表、社會科講義等各科教材），轉換為**單一獨立的「自製電子書」HTML 檔案**。
該自製電子書同時具備以下兩大核心能力：
1. **學生端純淨 A4 列印**：直接按列印即還原為無解答、無操作干擾文字的標準學生作業／評量卷。
2. **教師端大屏／投影教學**：無論在電子白板、觸控大屏、平板或傳統滑鼠投影環境下，皆可「逐題點擊秀答案」、「一鍵揭曉全卷答案」，並使用「多色粗細螢光筆」進行畫線與重點圈記。

---

## 🎯 處理流程：第一步務必確認學生特質與教學需求

當教師傳入備課材料（Word、PDF、考卷或文字）時，**若教師尚未說明學生程度，請務必先主動向教師提問確認**，以便量身調整鷹架難度與題量：

1. **學生的學習能力與特質**：
   - 💡 **特教學障／資源班／低成就**：需要最高度結構化鷹架、大量圖表對照、單字百寶箱中英對齊、超低文字認知負荷、放大題距。
   - 📘 **基礎待補強**：以核心概念拆解、連連看、二選一圈選題為主，循序漸進引導。
   - 📗 **普通班標準進度**：觀念整理、基礎練習、應用選擇題組均衡配置。
   - 📕 **進階拔尖／素養挑戰**：減少提示，增加題組情境閱讀與深層推論題。
2. **預期講義頁數與規模**：
   - **1～2 頁**：課前小測驗／隨堂重點卷。
   - **3 頁**：標準課堂學習單（觀念＋練習＋題組）。
   - **5 頁**：完整五階段闖關特訓講義。
3. **本次課堂核心目標**：
   - 新觀念引入與理解破冰（重圖解與概念錨點）。
   - 題型演練與解題訂正（重點題型深入練習）。
   - 單元或段考總複習。

> **小技巧**：提問時可直接列出具體選項供教師快速選擇（如：「建議為您規劃 5 頁特教學障專用闖關講義，包含大量視覺對照與 14pt 大字體，請問適合嗎？」）。

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
  - 預設背景一律以很淺的柔和淡藍色為主（如 `#f0f7fc` 或 `#f4f8fc`），頁面本體白色並帶有柔和陰影，章節橫幅與點綴色亦以清新天藍/蔚藍（如 `#0284c7`、`#0f4c81`）為主，每頁有獨立頁碼與關卡進度。
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
- **國語文生字詞彙練寫**：
  - 生字詞彙表格僅需「生字」、「書寫練習（田字格）」、「核心語詞與字義」。
  - **嚴格禁止出現「部首」與「部件積木拆解」欄位**，保持版面純淨大方並保留充裕練寫空間。
  - **生字欄位一律直接套用 Google 官方注音字型**（`Bpmf Zihi Kai Std`，引入 `https://fonts.googleapis.com/css2?family=Bpmf+Zihi+Kai+Std&display=swap`），直接以 `<span class="font-bpmf">漢字</span>` 呈現漢字與內建右側注音，**切勿另外手動生成或換行輸出注音符號**。

### 5. 計算題與問答題必須預留 3～4 行純淨書寫／計算空間（Calculation Workspace）
- **核心目的**：凡數學、自然理化、非選題或需要列式計算之題目，**嚴禁題與題之間緊密堆擠**。每道計算題下方**必須預留 3～4 行（高度約 80px～110px）的留白計算空間**，讓學生在紙本列印時有充裕的手寫計算與算式草稿區域。
- **純淨無字原則**：留白框內**切勿印出任何提示文字**（例如不用寫「計算空間」或「思考與記錄空間」等字眼），保持 100% 純淨俐落的淺色虛線書寫格。
- **數學教學習慣與運算規範（極重要）**：
  1. **正負數加減核心原則**：
     - **直接都先去括號**：整理每個數字前的符號（例如 \(+(-a) \to -a\)，\(-(-a) \to +a\)），使每個數前只保留一個明確符號。
     - **同號相加，異號相減**：同號直接相加（符號不變）；異號互相抵消（大數減小數，看誰剩得多，符號跟多的）。
  2. **純算式原則（嚴禁書寫任何國字）**：
     - 數學解題或計算步驟中，**絕對不寫任何國字**（不寫「原式＝」、「答：」、「同號相加：」等中文文字）。
     - 直接呈現乾淨純粹的數學算式與數值結果。
  3. **一行不可出現兩個等號（極重要排版視覺規範）**：
     - 在數學計算、化簡或列式步驟中，**同一行絕對不能出現兩個等號（＝）**。
     - 遇到連鎖等式或多步驟運算，**必須換行**，讓每個等號獨立起行，保持垂直對齊，視覺清晰俐落、大幅降低認知負荷。
  4. **一個等號算一步驟（漸進式逐步揭曉，嚴防學生直接抄答案）**：
     - 計算算式中的每一個等號（每一行）皆為獨立步驟，採用 `<div class="calc-step">＝ ...</div>` 包裹。
     - 教師端在大屏投影教學時，點擊題目或算式區會**依序逐步揭曉下一步算式**（點第 1 下出第 1 步去括號、點第 2 下出計算步驟、點第 3 下出最終答案），引導學生邊看邊思考、跟隨節奏動筆計算。
     - 題幹頂部的最終答案空格（`.ans-reveal`），**只在算式最後一步揭曉時才同步亮起紅字**，徹底杜絕學生未動腦就直接抄答案。
     - 全部步驟揭曉完畢後，再次點擊即可隱藏重置；全書頂部工具列亦可透過「一鍵全開」瞬間顯示全書所有步驟。
- **雙模式運作機制**：
  1. **學生端純淨列印**：計算框維持淺色細虛線邊框，內無解答亦無干擾提示字，保留完整乾淨的 3～4 行手寫高度供學生書寫。
  2. **教師端大屏教學**：點擊題目或計算框時，立即逐步依序浮現紅字算式步驟；教師亦可在框內直接啟用螢光筆/板書筆帶領學生板書運算。
- **標準 HTML 結構（漸進式純算式範例）**：
  ```html
  <div class="interactive-item" title="點擊逐步揭曉算式（一個等號一步驟）" onclick="toggleItemAnswer(this)">
    <div class="item-title">(1)（－4）＋（－6）＝<span class="write-blank"><span class="ans-reveal">－10</span></span></div>
    <div class="calc-workspace">
      <div class="calc-solution">
        <div class="calc-step">＝ －4 － 6</div>
        <div class="calc-step">＝ －10</div>
      </div>
    </div>
  </div>
  ```

### 6. 紅色解答與手寫答案精簡原則（特教／國中課堂友善規範，嚴防學生抄寫過久）
- **核心痛點**：在課堂大屏/投影教學中，教師一鍵揭曉紅字答案時，學生必須對照螢幕手寫抄入紙本學習單或講義中。若紅色答案為落落長的完整句子（如 20～30 字），學生會耗費數倍時間埋頭抄寫，導致課堂節奏嚴重拖慢、學生手部肌肉疲倦並喪失注意力。
- **極簡字數規範**：
  1. **表格填空／大意對照表**：每個儲存格內的紅色答案**嚴格精簡在 8～12 字以內**（以核心關鍵詞短語呈現，例如：`幼年失明，黑暗中摸索`、`掌心向下，能付出的手最美`）。
  2. **簡答題／閱讀理解**：直切核心結論，避免長篇大論的修飾贅詞，讓學生 15～30 秒內即可輕鬆快速抄寫完畢。

---

## 課堂懸浮工具列（Pure Emoji 極簡膠囊工具列＋章節目錄導覽）

必須在 `<body>` 開頭插入固定懸浮膠囊工具列（標記 `.no-print`）。
**設計重點**：工具列一律採用**純 Emoji 圖示極簡設計（無中文文字按鈕）**，外觀乾淨不遮擋投影教材，按鈕使用 `title="..."` 提供無障礙與懸停提示；並內建「章節目錄導覽選單」，方便教師於大屏/投影授課時隨時跨章節平滑跳轉：

```html
<div class="classroom-toolbar no-print">
  <!-- 1. 章節目錄跳轉選單 -->
  <div style="position: relative;">
    <button class="tool-btn" id="tocBtn" onclick="toggleTocMenu(event)" title="章節目錄導覽">
      📑
    </button>
    <div class="toc-menu" id="tocMenu">
      <div class="toc-menu-title">📖 單元章節目錄</div>
      <div class="toc-menu-item" onclick="jumpTo('page-1')"><span>封面與導讀</span><span class="toc-page-badge">P.1</span></div>
      <div class="toc-menu-item" onclick="jumpTo('sec-1')"><span>一、章節主題</span><span class="toc-page-badge">P.2</span></div>
      <!-- 依該本電子書實際章節清單填入 -->
    </div>
  </div>

  <!-- 2. 一鍵全開答案 -->
  <button class="tool-btn btn-toggle-ans" id="toggleAllAnsBtn" onclick="toggleAllAnswers()" title="一鍵全開/全隱答案">
    <span id="ansIcon">👁️</span>
  </button>
  
  <!-- 3. 畫筆工具開關 -->
  <button class="tool-btn" id="penBtn" onclick="togglePenMode()" title="螢光筆/板書筆">
    ✏️
  </button>
  
  <!-- 4. 畫筆顏色與粗細選單 (啟用畫筆時展開) -->
  <div class="pen-options" id="penOptions">
    <div class="color-picker">
      <span class="color-dot active" style="background:#facc15;" onclick="setPenColor('rgba(250, 204, 21, 0.45)', this)" title="螢光黃"></span>
      <span class="color-dot" style="background:#ef4444;" onclick="setPenColor('rgba(239, 68, 68, 0.8)', this)" title="紅筆"></span>
      <span class="color-dot" style="background:#3b82f6;" onclick="setPenColor('rgba(37, 99, 235, 0.8)', this)" title="藍筆"></span>
      <span class="color-dot" style="background:#10b981;" onclick="setPenColor('rgba(16, 185, 129, 0.8)', this)" title="綠筆"></span>
    </div>
    <div class="sub-divider" style="width:1px; height:14px; background:#cbd5e1; margin:0 2px;"></div>
    <div class="size-picker">
      <button class="size-btn active" onclick="setPenSize(4, this)">細</button>
      <button class="size-btn" onclick="setPenSize(10, this)">中</button>
      <button class="size-btn" onclick="setPenSize(20, this)">粗</button>
    </div>
  </div>
  
  <!-- 5. 清除畫跡 -->
  <button class="tool-btn" onclick="clearAllDrawings()" title="清除本頁/全卷畫筆">
    🧹
  </button>
  
  <div class="toolbar-divider"></div>
  
  <!-- 6. 直接列印 -->
  <button class="tool-btn" onclick="window.print()" title="列印為學生白紙考卷">
    🖨️
  </button>
</div>
```

---

## 自製電子書教材鷹架架構（適用各學科）

當使用者提供任何學科教材時，依據確認後的學生能力，轉化為**循序漸進的闖關鷹架（Scaffolded Quest）**：

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

/* 列印強制隱藏解答與後台工具，還原白紙學生卷（嚴格 1 頁對應 1 張 A4，徹底杜絕溢頁） */
@media print {
  @page {
    size: A4 portrait;
    margin: 10mm 12mm;
  }
  html, body {
    width: 100% !important;
    height: auto !important;
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .no-print,
  .classroom-toolbar,
  .drawing-canvas,
  .matching-svg-layer,
  .toc-menu {
    display: none !important;
  }
  .page-container {
    display: block !important;
    padding: 0 !important;
    margin: 0 !important;
    gap: 0 !important;
  }
  .page {
    margin: 0 !important;
    box-shadow: none !important;
    width: 100% !important;
    height: 275mm !important;
    max-height: 275mm !important;
    min-height: 0 !important;
    padding: 0 !important;
    page-break-after: always !important;
    break-after: page !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    overflow: hidden !important;
  }
  .footer-bar {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
    margin-top: auto !important;
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
  .calc-workspace {
    border: 1px dashed #94a3b8 !important;
    background: transparent !important;
    min-height: 85px !important;
  }
  .calc-solution {
    display: none !important;
  }
}

/* 計算題 3~4 行留白書寫空間（純淨無提示字） */
.calc-workspace {
  min-height: 85px; /* 預留 3~4 行手寫空間 */
  margin: 8px 0 14px 0;
  padding: 8px 12px;
  border: 1px dashed #cbd5e1;
  border-radius: 6px;
  background-color: #f8fafc;
  position: relative;
}
.calc-solution {
  color: transparent;
  font-size: 13pt;
  line-height: 1.6;
}
.show-ans .calc-solution,
.calc-workspace.show-one .calc-solution,
.interactive-item.show-one .calc-solution {
  color: #dc2626 !important;
  font-weight: bold;
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

## 處理流程與執行步驟總結

當使用者傳入備課檔案（Word、PDF、圖片或文字）：
1. **確認學生特質**：先詢問或確認學生能力水準、預期頁數與課堂焦點。
2. **分析教材規劃關卡**：提煉核心知識點、單字/定義、基礎練習、變化句型與評量。
3. **建構 HTML**：直接套用標準骨架，置入題目、解答標記（`.correct-choice`、`.ans-slot`）、SVG 連連看與課堂工具列。
4. **檢查列印與提示文字**：再次確認**絕無** `（點題目秀答案）` 等操作指示文字，確保 `@media print` 能夠完美輸出學生無答案版。
