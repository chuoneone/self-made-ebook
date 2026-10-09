---
name: self-made-ebook
description: >-
  自製電子書（雙模式教學互動講義／學習單／隨堂小考產生器）的通用底層與工作區規則。將教師提供的任何學科備課資料（自然、社會、特教、跨科或其他未有專屬 skill 的科目），轉換為單一獨立的雙模式互動 HTML 檔案：1.「學生端純淨 A4 列印」（無解答、無操作干擾文字）；2.「教師端大屏／投影教學」（逐題點擊顯答、一鍵全開答案、多色螢光筆、全螢幕）。並負責把成品存進 ebook/ 資料夾、登記到 ebook/index.html 電子書目錄。當使用者提到「自製電子書」、「製作電子書」、「做電子書」、「電子教材」、「互動學習單」、「雙模式互動html」、「隨堂小考」、「電子書目錄」或提供備課教材時啟動。國文、英文、數學、YouTube 影片另有專屬 skill（sped-chinese-master、sped-english-master、sped-math-master、sped-youtube-master），請優先使用專屬 skill，但所有科目都必須遵守本 skill 的「工作區、存檔與電子書目錄」規則。
---

# 自製電子書 — 雙模式教學互動講義產生器

此技能專門將教師提供的備課資料（包含單字卷、文法題、句型練寫卷、數學試題、自然科圖表、社會科講義等各科教材），轉換為**單一獨立的 HTML 電子書檔案**，並收進 `ebook/` 電子書庫統一管理。
該教材同時具備以下兩大核心能力：
1. **學生端純淨 A4 列印**：直接按列印即還原為無解答、無操作干擾文字的標準學生作業／評量卷。
2. **教師端大屏／投影教學**：無論在電子白板、觸控大屏、平板或傳統滑鼠投影環境下，皆可「逐題點擊秀答案」、「一鍵揭曉全卷答案」、「全螢幕放大縮小」，並使用「多色粗細螢光筆」進行畫線與重點圈記。

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

### §0 學生程度分流（所有科目共用，含四個 `sped-*` 專屬 skill）

確認程度後，依下表調整「鷹架與題型」。**版面規範（14pt 字級、A4 防切題、雙模式顯答、零干擾文字、§11 存檔）不分程度一律適用**；四個 `sped-*` skill 的「黃金標竿架構」即為 💡 特教版，其他程度依各 skill 的「程度分流」小節縮編或加深。

| 調整項目 | 💡 特教學障／資源班 | 📘 基礎待補強 | 📗 普通班 | 📕 進階拔尖 |
| :--- | :--- | :--- | :--- | :--- |
| 鷹架 | 最高：詞庫、示範題、黑字預填、圖示提示 | 高：保留詞庫與示範題，逐步褪除 | 中：1 題示範後即自主作答 | 低：不給詞庫與示範，自行歸納規則 |
| 選擇題 | 二選一或 3 選 1 | 3 選 1 | 4 選 1 | 4 選 1＋多選、題組 |
| 主要題型 | 圈圈看、連連看、填空、是非 | 連連看、填空、簡單選擇 | 選擇、填充、簡答、應用題 | 情境題組、推論、比較、改錯、開放式短寫 |
| 文字量 | 極低，短句＋圖示 | 低，短段落 | 正常課本文字量 | 可含長篇閱讀引文 |
| 紅字答案 | 1～6 字關鍵詞 | 8～12 字以內 | 8～12 字以內 | 關鍵詞或評分要點（開放題只列要點，不寫完整範文） |
| 篇幅 | 依各 skill 黃金標竿（最完整） | 同特教或略縮 | 約特教版的 1/2～2/3 | 約特教版的 1/3～1/2，題目更深 |

- **同一單元做多種程度**：💡 特教版沿用原檔名；其他程度在檔名最後加後綴 `-basic`／`-std`／`-adv`（例：`math-7-1-2-std.html`）。
- **程度標記**：`<head>` 加 `<meta name="ebook:level" content="sped|basic|std|adv">`；登記目錄時在 `tags` 加入對應中文（`特教版`／`基礎版`／`普通班`／`進階版`），方便搜尋。
- 教師若已在 `AGENTS.md` 的「教師的個人偏好」寫好預設程度，直接採用，不必每次再問。

---

## 核心設計規範（Strict Requirements）

### 1. 輸出格式與載體
- **嚴格產出純 HTML**：切勿生成 `.doc` 或 `.docx` 檔案（HTML 無需額外軟體、跨平台版面固定、Token 耗損少）。
- **完全獨立自包含**：單一 `.html` 檔案，所有 CSS、SVG 與 JavaScript 全部內嵌，不依賴外部 CDN 或第三方套件。
- **僅有的外部載入例外（需連網）**：數學式的 KaTeX（§5-1）、國文的 Bpmf 注音字型（§4）、YouTube 影片卡的 QR Code API。除此之外一律不得引用外部 CDN（包含 Tailwind、Font Awesome）。
- **起手骨架**：一律從 `resources/template.html` 複製開始，並依「§11 工作區、存檔與電子書目錄」存檔與登記。

### 2. 字型與排版規範（特教學障與投影友善）
- **字型家族**：英文 `"Times New Roman"`, 中文 `"標楷體", "DFKai-SB", "BiauKai", serif`。
- **字級大小**：內文標準字級一律為 **14pt**（降低認知負荷、適合中學生及學障生閱讀、遠距投影清晰）。
- **A4 頁面容器與零溢頁高度鐵律（Strict A4 Page Height Limits）**：
  - **螢幕容器規格**：寬度固定 `210mm`，高度嚴格鎖定 `297mm`（或 `min-height: 297mm; max-height: 297mm`），邊距內縮 `10mm 14mm 8mm`。
  - **單頁物理高度極限（嚴禁超出 A4 邊界）**：
    - A4 總高度為 `297mm`，扣除上下邊距後，**單頁有效內容高度上限為 265mm～270mm（約 1000px～1020px）**。
    - **計算題與題量容量鐵律**：
      - 若每題包含「3～4 行留白計算框（約 80px～90px）」，**每頁 A4 絕對嚴格限制最多 4～6 題**！
      - 當單頁題目達 6 題時，計算框高度控制在 `75px～85px`，行距控制在 `line-height: 1.45～1.6`，題距與邊距緊湊，**徹底杜絕尾題或頁尾被推擠到下一頁產生多餘空白頁**！
  - **列印樣式強制規範**：
    ```css
    @page { size: A4 portrait; margin: 10mm 12mm; }
    @media print {
      html, body { width: 100% !important; height: auto !important; background: #fff !important; padding: 0 !important; margin: 0 !important; }
      .no-print, .classroom-toolbar, .drawing-canvas, .toc-menu, .mini-toolbar-toggle { display: none !important; }
      .pages-container { padding: 0 !important; gap: 0 !important; }
      .page {
        width: 100% !important;
        height: auto !important;
        max-height: none !important;
        min-height: 275mm !important;
        padding: 0 4mm !important;
        box-shadow: none !important;
        page-break-after: always !important;
        break-after: page !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        overflow: visible !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
      }
      .page:last-child, .page:last-of-type {
        page-break-after: avoid !important;
        break-after: avoid !important;
      }
      .footer-bar, .page-footer {
        margin-top: auto !important;
        padding-top: 4px !important;
      }
    }
    ```

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
### 5-1. 數學式全面 KaTeX 漂亮渲染規範（嚴禁文字湊分數，極重要）
- **核心痛點**：若數學式採用純文字斜線（如 `1/2`、`-2.5（負 2 又 1/2）`）或普通字串拼湊，分數線傾斜不平、上下字級失調、負號與減號混淆，在大屏投影與紙本列印時極度不美觀且易造成認知混淆。
- **強制全面引入 KaTeX 渲染**：
  1. 凡涉及數學、理化或任何包含數學式、分數、負數、絕對值、根號、次方、方程式等教材，**一律全面引入 KaTeX 渲染**。
  2. 頁面 `<head>` 必須引入 KaTeX CDN：
     ```html
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
     <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
     <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
     ```
  3. 分數必須使用標準 LaTeX 語法（如 `\frac{1}{2}` 或帶分數 `2\frac{1}{2}`），絕對值使用 `|x|`，負數使用 `-3`，確保水平分數線平直、排版美觀專業。
  4. 頁面結尾腳本於 `DOMContentLoaded` 執行：
     ```javascript
     renderMathInElement(document.body, {
       delimiters: [
         { left: '$$', right: '$$', display: true },
         { left: '$', right: '$', display: false }
       ],
       throwOnError: false
     });
     ```
### 6. 紅字答案極簡字數規範（嚴防抄寫疲倦）
- **核心痛點**：在課堂大屏/投影教學中，教師一鍵揭曉紅字答案時，學生必須對照螢幕手寫抄入紙本學習單或講義中。若紅色答案為落落長的完整句子（如 20～30 字），學生會耗費數倍時間埋頭抄寫，導致課堂節奏嚴重拖慢、學生手部肌肉疲倦並喪失注意力。
- **極簡字數規範**：
  1. **表格填空／大意對照表**：每個儲存格內的紅色答案**嚴格精簡在 8～12 字以內**（以核心關鍵詞短語呈現，例如：`幼年失明，黑暗中摸索`、`掌心向下，能付出的手最美`）。
  2. **簡答題／閱讀理解**：直切核心結論，避免長篇大論的修飾贅詞，讓學生 15～30 秒內即可輕鬆快速抄寫完畢。
  3. **數學答案徹底去國字化（純數字、符號、選項代號，嚴防抄寫疲倦）**：
     - 凡數學題目之答案（`.ans-reveal` 或 `.ans-slot`），**嚴格禁止書寫任何國字**（絕不寫「答：」、「公尺」、「度」、「賺」、「賠」等單位或中文贅字）。
     - 數值題目直接填入純數字與正負號（如 `－12`、`19`、`8.5, －8.5`、`＋500`）。
     - 觀念判定或是非題，一律提供 `(A)`、`(B)`、`(C)` 選項，答案僅揭曉英文字母代號（如 `(A)`）。
     - **理由**：特教與資源班學生手部小肌肉耐力有限、抄寫極易疲乏分心。去除國字贅詞後，學生能在 3 秒內精準完成抄寫，緊跟課堂節奏。

### 6-1. 逐題／逐格獨立點擊顯答鐵律（Granular Blank-by-Blank / Item-by-Item Reveal，嚴禁整大題一次全出）
- **核心教學痛點**：若將整大題（如 5 個步驟流程圖、3 列比較表格、整段 4 句填空）包在同一個父層點擊事件中，點一下整大題答案全部暴衝出來，會嚴重破壞課堂提問節奏、剝奪學生思考機會，造成抄寫混亂。
- **逐格／逐題精準顯答原則**：
  1. **每一格填空（`.write-blank` / `.ans-slot`）**：點擊該空格只顯開該格答案，不影響相鄰的其他空格。
  2. **每一個是非題括號（`.bracket-slot`）**：點擊該題括號只顯開該題的 `⭕` 或 `✕`。
  3. **每一個選擇題（`.qa-block`）**：點擊該題只顯開該題括號答案與正確選項紅框（`.qa-opt.correct`）。
  4. **比較表格（`.custom-table tbody tr` 或 `td`）**：點擊該列只顯開該列答案，或點擊特定儲存格只顯開該格。
  5. **流程圖（`.flow-step`）**：點擊第 1 步只顯開第 1 步，點擊第 2 步只顯開第 2 步。
  6. **關鍵字標記（`.hl-word`）**：點擊特定語詞才單獨亮起該詞之螢光黃底色。
- **標準 CSS 樣式支援**：
  ```css
  /* 支援全域一鍵全顯，亦支援最小單位逐格/逐題單獨顯答 */
  .show-ans .ans-reveal,
  .write-blank.show-one .ans-reveal,
  .flow-step.show-one .ans-reveal,
  tr.show-one .ans-reveal,
  .qa-block.show-one .ans-reveal,
  .interactive-item.show-one .ans-reveal {
    color: #dc2626 !important;
    user-select: text;
  }
  .show-ans .bracket-ans,
  .bracket-slot.show-one .bracket-ans,
  .interactive-item.show-one .bracket-ans {
    color: #dc2626 !important;
  }
  .show-ans .hl-word,
  .hl-word.show-one {
    background-color: #fef08a !important;
    color: #854d0e !important;
    box-shadow: 0 0 0 1.5px #eab308;
  }
  ```
- **標準 JavaScript 事件委託架構**：
  ```javascript
  document.addEventListener("DOMContentLoaded", () => {
    initDrawingCanvases();
    
    // 點擊事件委託：逐格 / 逐題精準顯答（未開畫筆時生效）
    document.addEventListener("click", (e) => {
      if (isPenMode) return;
      if (e.target.closest('.classroom-toolbar') || e.target.closest('.no-print') || e.target.closest('button')) return;
      
      const targetElement = e.target.closest('.write-blank, .bracket-slot, .hl-word, .flow-step, .qa-block, tr, .interactive-item');
      if (targetElement) {
        targetElement.classList.toggle('show-one');
      }
    });
  });

  function toggleItemAnswer(el, e) {
    if (isPenMode) return;
    if (e) e.stopPropagation();
    el.classList.toggle("show-one");
  }
  ```

### 7. 小考測驗卷模式（Quiz Mode：5 題單選＋5 題填充標準雙頁）
- 當教師要求製作「小考」、「隨堂測驗卷」、「小測驗」時，自動啟用標準 2 頁 A4 測驗卷架構：
  - **第 1 頁（單選題 5 題）**：
    - 頂部設置學生資訊欄（班級、座號、姓名、得分評分區）。
    - 題幹右上角設置答案填入框 `.ans-box`，內嵌 `.ans-reveal`。
    - 選項採用雙欄或垂直堆疊網格 `.choices-grid`，嚴格對齊。
    - 答案僅為純選項代號 `(A)`、`(B)`、`(C)`、`(D)`。
  - **第 2 頁（填充題 5 題）**：
    - 每題附帶 3～4 行純淨留白計算框 `.calc-workspace`，內嵌逐步算式或最終數值 `.calc-solution`。
    - 紙本列印時呈現乾淨細虛線供學生計算草稿；課堂大屏點擊時依序/即時揭曉答案。
    - 答案純數字、純正負號，零國字。
  - **完美雙頁無溢頁**：第 2 頁結尾避開多餘換頁符號，列印時剛好雙面 1 張（2 頁），不多出第 3 頁空白頁。

### 8. 學生基本資料列與考題範圍標示規則（同一份文件僅首頁標示一次，嚴防每頁重複）
- **學生基本資料列（班級／座號／姓名）**：
  - 無論是「電子書講義」、「學習單」還是「隨堂小考卷（Quiz）」，只要屬於**同一份講義、學習單或同一次隨堂小考**，**一律嚴格規定只有第 1 頁（第一面／封面）才放置「班級／座號／姓名」填寫欄位**！
  - **續頁／背面（第 2 頁及後續頁面）絕對禁止重複出現姓名、座號、班級等填寫線**，頂部資訊欄（`.user-info` 或 `.student-bar`）僅顯示純頁面提示標籤（如 `第二面（背面）` 或 `續頁`），或留空。
- **考題範圍／單元小標標示規則（全卷僅出現一次）**：
  - 「考題範圍：……」或測驗單元主題小標，**全卷同樣只需要在第 1 頁（第一面）出現一次即可**！
  - **續頁／背面（第 2 頁及後續頁面）絕對不可重複出現「考題範圍：……（續頁）」等贅詞**。
  - 續頁的標題橫幅（`.section-banner`）應直接俐落標示該頁承接的大題名稱或題型題號（例如：「單選題（第 6～10 題）」、「二、填空選擇（續）」或「三、文意理解選擇題」），保持版面極致簡練專業。
- **多合一綜合卷例外處理**：若同一份 HTML 內明確整合了多次完全獨立的「不同次小考」（例如第一次小考、第二次小考、第三次小考），則每次獨立小考的「第 1 頁」可各標示一次姓名欄與該次考題範圍，但該次小考內部的所有後續續頁（例如背面/第 2 頁）依然嚴禁重複出現姓名欄與考題範圍小標。

### 9. 題目絕對防切割與頁面容量安全規範（Strict Anti-Fragmentation & Overflow Prevention，極重要）
- **核心痛點**：題目如果跨頁被切成兩半（例如題幹在上一頁、選項掉到下一頁；或題目底部被 `overflow: hidden` 截斷），會嚴重破壞紙本列印與課堂教學體驗，學生無法完整作答。
- **🚨 最高優先鐵律（凡與下列衝突，一律以本條為準）**：
  1. **頁數由題量決定，不是反過來**：嚴禁為了「剛好雙面 1 張」把題目硬擠進固定頁數。30 題單選一律先量高度再分頁（通常 4 面），**寧可多一頁，絕不切題**。「完美雙頁」僅適用 §7 的 10 題小考卷。
  2. **行距與字級維持舒適標準**（題幹約 14.5pt、選項約 13.5pt、行高 1.4～1.45）：嚴禁為了塞進頁數而縮小字級、壓縮行距或題距。放不下就分頁。
  3. **`@media print` 的 `.page` 一律 `height: auto !important; min-height: 275mm !important; max-height: none !important; overflow: visible !important;`**；**嚴禁**使用固定 `height/max-height: 275mm` 搭配 `overflow: hidden`（這會把超出的題目直接裁掉，是最常見的切題原因）。
  4. **交付前必做溢出驗證**：用瀏覽器以列印寬度（約 186mm）逐頁量測 `.page` 實際高度，**每頁內容高度必須 ≤ 275mm（≈1039px）且保留至少 60px 餘裕**；任何一頁超過就重新分頁。回報時須寫出每頁實測高度。
  5. 估算單題高度（A4、舒適行距）：4 欄短選項題約 22mm、2 欄長選項題約 30mm；每頁扣掉頁首＋橫幅＋頁尾約 40mm 後再排題。
- **嚴格排版容量限制（嚴禁單頁題目過多導致溢出切斷）**：
  1. **選擇題（長選項／單欄垂直堆疊）**：每頁 A4 **嚴格限制最多 4～5 題**，絕不可堆疊 6 題以上。
  2. **詞語填空／短選項（雙欄或 4 欄網格）**：每頁最多 6～7 題。
  3. **素養思辨／情境閱讀題組**：題幹包含長篇閱讀引文或情境對話者，每頁**嚴格限制最多 3～4 題**。
  4. **計算題（附留白計算空間）**：每頁**嚴格限制 4～5 題**（每題留白 3～4 行約 85px）。
  5. **綜合大卷頁數規劃**：若題目多達 25～30 題，**必須規劃充足頁數（例如 4 頁 A4）**，絕不可為了少頁數而硬擠在 2～3 頁，導致下半段題目被切斷、截斷或溢出。
- **CSS 防切割強制宣告**：
  ```css
  .interactive-item,
  .qa-block,
  .concept-tip-box,
  .calc-workspace,
  .feedback-box {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
  ```
### 10. 隨堂小考系列獨立檔案架構規範（Quiz Series Independent HTML Architecture，標準慣例）
- **核心架構原則：每次小考一律獨立為單一 HTML 檔案**：
  - 凡製作學科或特教之隨堂小考系列（例如：第一次小考、第二次小考、第三次小考、第四次小考等），**一律預設為每一次小考各自生成獨立的單一 HTML 檔案**。
  - **標準命名格式**：
    `{subject}-{grade}-{lesson}-quiz1.html`、`{subject}-{grade}-{lesson}-quiz2.html`、`{subject}-{grade}-{lesson}-quiz3.html`……等（例如：`chinese-1-2-quiz1.html`、`chinese-1-2-quiz2.html`）。
    若教師需要全課彙整，可額外產出全卷合輯檔 `{subject}-{grade}-{lesson}-quiz.html`。
- **拆分獨立檔案之絕對優勢與強制原因**：
  1. **列印完全零出錯（Print-Ready）**：
     - 教師或學生上課需要印「第二次小考」，只要打開 `quiz2.html` 按列印，剛好就是 2 頁（1 張 A4 雙面列印），**完全不需要在瀏覽器列印視窗手動輸入「頁數：3-4」**，杜絕印錯頁數或整卷 13 頁全部印出的紙張浪費。
  2. **課堂大屏聚焦（Focus & Anti-Spoiler）**：
     - 投影教學時焦點專注於當次評量，點擊「👁️ 一鍵全開答案」或使用「✏️ 螢光筆/板書筆」時，只針對當前測驗，**絕不會劇透後續幾週才要考的題目**。
  3. **排版零干擾（Isolated Layout）**：
     - 每次小考頁數獨立固定（例如第一次 2 頁、第二次 2 頁、第三次 4 頁、第四次 5 頁）。後續若想微調某一次小考的題目或排版，**絕對不會牽動或推擠到其他次小考的頁碼與安全高度**。
- **電子書目錄（`ebook/index.html`）登記方式**：
  - 整個小考系列在目錄中只登記**一筆**，`type` 設為 `"quiz"`，`path` 指向合輯版（若無合輯版則指向第一次），並用 `parts` 陣列列出每一次小考，目錄頁會自動顯示為多按鈕卡片：
    ```json
    {"title":"七上國文 L2 隨堂小考","subject":"chinese","grade":7,"type":"quiz","pages":10,
     "path":"chinese/chinese-7-2-quiz.html","date":"2026-10-09",
     "parts":[{"label":"第一次（10題）","path":"chinese/chinese-7-2-quiz1.html"},
              {"label":"第二次（10題）","path":"chinese/chinese-7-2-quiz2.html"}]}
    ```
- **小考單檔細節鐵律**：
  - **姓名欄**：僅在「第 1 頁」出現一次；第 2 頁及後續續頁/背面嚴禁重複出現任何姓名欄。
  - **考題範圍**：僅在「第 1 頁」出現一次；續頁橫幅直接標示大題名稱與題號。
  - **短選項網格**：詞語填空等短選項一律宣告 `.choices-grid.cols-4`（4 欄單行排版）。
  - **長選項網格**：文意理解等句子選項一律宣告 `.choices-grid.cols-2`（雙欄排版）。
  - **列印無裁切**：`@media print` 中 `.page` 宣告 `min-height: 275mm !important; height: auto !important;`，嚴禁使用 `overflow: hidden !important;`。

### 11. 工作區、存檔與電子書目錄（所有科目共用，每次產出都必須執行）

教師不會只做一本電子書，所有成品都要收進同一個電子書庫，並登記在目錄首頁 `ebook/index.html`。

**(1) 找到電子書庫**
- 從目前工作目錄往上找 `ebook/index.html`，找到的那層即為工作區根目錄。
- 若找不到：在目前專案根目錄建立 `ebook/`，並把本 skill 的 `resources/index-template.html` 複製為 `ebook/index.html`。

**(2) 存檔位置與檔名（一律小寫英數與連字號）**
```text
ebook/<subject>/<subject>-<grade>-<unit>[-<type>].html
```
- `subject`：`chinese`、`english`、`math`、`science`、`social`、`video`、`other`。
- `grade`：7、8、9（國一～國三），跨年級或不適用時寫 `all`。
- `unit`：課次或單元，如 `3`、`u2`、`1-2`。
- `type`（可省略）：`quiz1`、`quiz2`、`quiz`（合輯）、`vocab`、`grammar`、`review` 等。
- 範例：`ebook/math/math-7-1-2.html`、`ebook/english/english-7-u2-vocab.html`、`ebook/chinese/chinese-9-3-yumeiren.html`。
- 圖片放 `ebook/images/<電子書檔名去掉 .html>/`，HTML 內以相對路徑 `../images/...` 引用。
- 若同路徑已有檔案，先問教師要「覆蓋」還是「另存新版（加 `-v2`）」；**已列印發下的版本不可直接覆蓋**。

**(3) 每本電子書必備的身分標記與回目錄按鈕**
- `<head>` 內放入以下 meta（`rebuild-index` 腳本靠它自動補登記）：
  ```html
  <meta name="ebook:subject" content="math">
  <meta name="ebook:grade" content="7">
  <meta name="ebook:type" content="handout">
  <meta name="ebook:pages" content="5">
  <meta name="ebook:summary" content="一句話說明內容，40 字內">
  <meta name="ebook:level" content="std">  <!-- sped｜basic｜std｜adv，見 §0 -->
  ```
- 工具列第一顆按鈕為回目錄（`.no-print`，列印時隱藏）：
  `<a class="tool-btn" href="../index.html" title="回電子書目錄">🏠</a>`

**(4) 登記到目錄（必做）**
- `ebook/index.html` 內有一段 `<script id="ebook-catalog" type="application/json">`，裡面是 JSON 陣列。**只修改這段 JSON，不要改動頁面其他 HTML／CSS／JS。**
- 新增一筆（若 `path` 已存在則更新該筆，不要重複新增）：
  ```json
  {"title":"七上數學 1-2 正負數的加減","subject":"math","grade":7,"type":"handout","pages":5,
   "path":"math/math-7-1-2.html","date":"2026-10-09","summary":"同號相加、異號相減的 5 階漸進鷹架","tags":["正負數"]}
  ```
  - `path` 為相對於 `ebook/` 的路徑；`date` 為今天日期；`type` 可用 `handout`（講義）、`quiz`（小考）、`vocab`、`grammar`、`video`、`review`、`other`。
- 若環境有 Node.js，也可改執行 `node <本 skill 目錄>/scripts/rebuild-index.mjs ebook`：自動掃描 `ebook/` 所有 HTML，補登漏掉的電子書、移除已刪除檔案的紀錄，保留既有欄位。
- 交付時告訴教師：電子書檔案路徑，以及「打開 `ebook/index.html` 即可看到所有電子書」。

**(5) 版本控制（選配）**
- 若工作區是 git repo 且教師在 `AGENTS.md`／`CLAUDE.md` 要求自動 commit，產出後於本機 commit；否則不主動 commit。
- **在教師明確說「push」之前，絕對不可執行 `git push`。**
- **已列印內容不可動原則**：教師已列印發下的章節（題幹、數字、選項、排版）嚴格凍結。
- **標題極簡化原則**：各單元頂部大標題（`h1`）只標大概念名稱；子題型分類放在 `h2`。

---

## 課堂懸浮工具列（右上角 Pure Emoji 極簡膠囊工具列＋章節目錄導覽）

必須在 `<body>` 開頭插入固定於**右上角**的懸浮膠囊工具列（標記 `.no-print`，`position: fixed; top: 16px; right: 20px; z-index: 1000;`）。
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
  
  <!-- 6. 純淨列印（直接原生列印，免另開分頁） -->
  <button class="tool-btn" onclick="printDocument()" title="直接列印純淨 A4 學生卷">
    🖨️
  </button>

  <!-- 7. 全螢幕切換（放大/縮小） -->
  <button class="tool-btn" id="fullscreenBtn" onclick="toggleFullscreen()" title="全螢幕模式（放大/縮小）">
    <svg id="fsIconExpand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
    </svg>
    <svg id="fsIconCompress" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
    </svg>
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
/* 課堂懸浮膠囊工具列（鐵律：一律固定於右上角 top: 16px; right: 20px; 嚴禁置於螢幕中間 top: 50% 遮擋題目） */
.classroom-toolbar {
  position: fixed;
  top: 16px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 8px 6px;
  border-radius: 36px;
  border: 1px solid rgba(203, 213, 225, 0.85);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang TC", "Noto Sans TC", sans-serif;
}

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
    box-sizing: border-box !important;
    margin: 0 !important;
    box-shadow: none !important;
    width: 100% !important;
    height: auto !important;
    max-height: none !important;
    min-height: 275mm !important;
    padding: 0 !important;
    page-break-after: always !important;
    break-after: page !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important; /* 嚴禁使用 space-between，避免 flex 分散多餘高度導致題距過大切斷題尾 */
    overflow: visible !important;
  }
  .page:last-child,
  .page:last-of-type {
    page-break-after: avoid !important;
    break-after: avoid !important; /* 避免列印產生多餘尾頁空白紙 */
  }
  .footer-bar,
  .page-footer {
    position: static !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
    margin-top: auto !important; /* 自動推至 A4 底部 */
    padding-top: 6px !important;
    padding-bottom: 2mm !important;
  }
  .interactive-item,
  .qa-block,
  .concept-tip-box,
  .feedback-box {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
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

---

## 標準 JavaScript 控制腳本

講義底部必須包含完整的互動控制邏輯：
1. `toggleItemAnswer(el, e)`：未開啟畫筆時，點擊題目切換 `.show-one` 類別顯現紅圈/紅字解答；使用 `e.stopPropagation()` 確保單題獨立顯答。
2. `toggleAllAnswers()`：一鍵全顯／全隱答案，在 `<body>` 切換 `.show-ans`，切換按鈕圖示為 👁️ 或 🙈。
3. `togglePenMode()`：切換畫筆狀態與 `#penOptions` 工具盤展開／隱藏。
4. `setPenColor(color, el)` 與 `setPenSize(size, el)`：切換 4 色與 3 種筆徑。
5. `initCanvases()`：監聽滑鼠 `mousedown`、`mousemove`、`mouseup`，利用 `ctx.lineTo()` 繪製平滑圓角線條。
6. `clearAllDrawings()`：一鍵清除所有畫布畫跡。
7. `printDocument()`：直接呼叫 `window.print()`，配合 `@media print` 自動隱藏工具列、解答與畫布，輸出 100% 滿版 A4 純淨學生作業卷。
8. `speakText(text)`：調用 Web Speech API（`window.speechSynthesis`）朗讀指定文字或題目，語速 0.85，輔助閱讀障礙學生。
9. SVG 連線座標即時計算：監聽 `window.load` 與 `window.resize`，依據卡片與目標盒的 `getBoundingClientRect()` 更新 `x1, y1, x2, y2`。

---

## 各科專屬規格（需要時才讀）

| 教材類型 | 優先使用的 skill | 本 skill 內的補充規格 |
| :--- | :--- | :--- |
| 國文白話課文 | `sped-chinese-master` | — |
| 國文文言文／古典詩詞 | — | `references/chinese-classical.md`（8 頁圖文精讀） |
| 英文文法／單字 | `sped-english-master` | `references/english.md` |
| 數學 | `sped-math-master` | 本檔 §5、§5-1 |
| YouTube 影片 | `sped-youtube-master` | `references/youtube.md` |
| 自然、社會、其他 | 本 skill | 本檔「自製電子書教材鷹架架構」 |

範例成品：`examples/reference_example.html`（英語 5 頁）、`examples/math-7s1-1-1-ebook.html`、`examples/math-7s1-1-2-ebook.html`。

---

## 處理流程與執行步驟總結

當使用者傳入備課檔案（Word、PDF、圖片、文字或 YouTube 影片）：
1. **選擇規格**：依上方「各科專屬規格」表格，判斷該用專屬 skill 或 references 補充規格；學生特質未說明時先詢問。
2. **分析教材規劃關卡**：提煉核心知識點、單字/定義、基礎練習、變化句型與評量。
3. **建構 HTML**：從 `resources/template.html` 起手，置入題目、解答標記（`.correct-choice`、`.ans-slot`）、SVG 連連看與右上角工具列（含 🏠 回目錄），並填好 `ebook:*` meta。
4. **檢查列印與提示文字**：確認**絕無** `（點題目秀答案）` 等操作指示文字，並依 §9 逐頁量測高度，確保 `@media print` 完美輸出學生無答案版。
5. **存檔與登記**：依 §11 存到 `ebook/<subject>/`，並在 `ebook/index.html` 的目錄 JSON 新增或更新一筆。
6. **交付**：回報檔案路徑、頁數與各頁實測高度，並提醒教師打開 `ebook/index.html` 查看所有電子書。
