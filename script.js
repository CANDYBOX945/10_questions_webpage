/* ===== 題目資料（依你提供的原文整理） ===== */
const questions = [
  {
    id: 1,
    type: "觀念題",
    title: "網頁三層架構分工",
    body: `在網頁開發的三層架構（HTML、CSS、JavaScript）中，下列哪一個敘述最符合 HTML 的核心職責？`,
    options: [
      { key: "A", text: "負責處理按鈕點擊後的抽籤與資料累加邏輯" },
      { key: "B", text: "負責設定文字顏色、卡片圓角與背景漸層樣式" },
      { key: "C", text: "負責定義網頁的結構與內容（例如「這裡有一個標題與一段文字」）" },
      { key: "D", text: "負責自動向伺服器重新發送網路請求並刷新網頁" }
    ],
    answer: "C",
    explain: `
      <p><strong>HTML（骨架）</strong>：負責定義網頁的結構與內容，告訴瀏覽器網頁裡「有什麼」（標題、圖片、文字段落等）。</p>
      <p><strong>CSS（衣服）</strong>：負責視覺樣式（顏色、圓角、背景漸層）。</p>
      <p><strong>JavaScript（動作）</strong>：負責互動邏輯與動態行為（點擊抽籤、分數累加）。</p>
      <p>(A) 屬 JS　(B) 屬 CSS　(D) 屬網路請求／JS 行為。</p>
    `
  },
  {
    id: 2,
    type: "觀念辨析",
    title: "標籤、元素與屬性",
    body: `觀察這段程式碼：
<div class="code-block">&lt;a href="https://example.com" target="_blank"&gt;點我前往&lt;/a&gt;</div>
下列語法結構分析何者正確？`,
    options: [
      { key: "A", text: "＜a href=\"...\"＞ 是結束標籤" },
      { key: "B", text: "href 是屬性名稱，「連結網址」是屬性值" },
      { key: "C", text: "「點我前往」是寫在開始標籤內部的屬性內容" },
      { key: "D", text: "此結構屬於沒有文字內容的「空元素 (Empty Element)」" }
    ],
    answer: "B",
    explain: `
      <p><strong>屬性 (Attribute)</strong> 寫在開始標籤內部，格式為 <code>屬性名稱="屬性值"</code>。此例中 <code>href</code> 是屬性名稱，連結網址是屬性值。</p>
      <p>(A) 錯誤：＜a ...＞ 是<strong>開始標籤</strong>，＜/a＞ 才是結束標籤。</p>
      <p>(C) 錯誤：「點我前往」是夾在開始與結束標籤中間的<strong>文字內容</strong>。</p>
      <p>(D) 錯誤：此元素有文字內容，屬於一般元素；沒有內容也不需要結束標籤的才叫空元素（如 <code>&lt;img&gt;</code>、<code>&lt;br&gt;</code>、<code>&lt;hr&gt;</code>）。</p>
    `
  },
  {
    id: 3,
    type: "程式碼閱讀與結果預測",
    title: "head 與 body",
    body: `小新寫了以下的 HTML 骨架程式碼，當瀏覽器開啟此檔案時，使用者在<strong>畫面內容區（Canvas）</strong>會看到什麼？
<div class="code-block">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;小新的個人網站&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;歡迎來到我的第一個網頁！&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</div>`,
    options: [
      { key: "A", text: "網頁分頁標題顯示「歡迎來到我的第一個網頁！」，畫面上顯示「小新的個人網站」" },
      { key: "B", text: "畫面上會同時顯示「歡迎來到我的第一個網頁！」與「這是測試段落」" },
      { key: "C", text: "畫面上只會顯示「歡迎來到我的第一個網頁！」，分頁標題顯示「小新的個人網站」" },
      { key: "D", text: "畫面上會顯示 &lt;title&gt; 與段落文字" }
    ],
    answer: "C",
    explain: `
      <p><strong>&lt;body&gt;</strong> 區塊：只有寫在 body 內部的內容才會顯示在瀏覽器的主要畫面區。因此畫面上只會出現段落文字「歡迎來到我的第一個網頁！」。</p>
      <p><strong>&lt;head&gt;</strong> 區塊：存放給瀏覽器讀取的設定與元資料。<code>&lt;title&gt;</code> 會顯示在瀏覽器分頁標題列，不會出現在畫面上。</p>
    `
  },
  {
    id: 4,
    type: "常見錯誤分析",
    title: "巢狀結構 Debug",
    body: `HTML 遵循俄羅斯娃娃般「先開後關」的巢狀 (Nesting) 原則。下列哪一段 HTML 程式碼<strong>存在語法結構錯誤</strong>？`,
    options: [
      { key: "A", text: "&lt;p&gt;這是一段 &lt;strong&gt;重要通知&lt;/strong&gt;&lt;/p&gt;" },
      { key: "B", text: "&lt;h2&gt;關於我 &lt;em&gt;新手村民&lt;/em&gt;&lt;/h2&gt;" },
      { key: "C", text: "&lt;p&gt;請點擊 &lt;strong&gt;&lt;em&gt;這裡&lt;/em&gt;&lt;/strong&gt;&lt;/p&gt;" },
      { key: "D", text: "&lt;h1&gt;&lt;span&gt;歡迎光臨&lt;/span&gt;&lt;/h1&gt;" }
    ],
    answer: "A",
    explain: `
      <p>本題四個選項其實都符合正確的「先開後關」巢狀原則。</p>
      <p>若要出「有錯誤」的題目，常見錯誤寫法會是<strong>交叉關閉</strong>，例如：</p>
      <div class="code-block">&lt;p&gt;這是一段 &lt;strong&gt;重要通知&lt;/p&gt;&lt;/strong&gt;</div>
      <p>正確應寫：<code>&lt;p&gt;這是一段 &lt;strong&gt;重要通知&lt;/strong&gt;&lt;/p&gt;</code></p>
      <p>目前選項皆為正確寫法，作答時請仔細比對是否有交叉關閉的情況。</p>
    `
  },
  {
    id: 5,
    type: "觀念題",
    title: "文字編碼與亂碼排查",
    body: `若在瀏覽器開啟網頁時發現網頁中的中文全部變成亂碼（例如變成 <code>å°æ–°</code>），最可能的原因與修正方式為何？`,
    options: [
      { key: "A", text: "忘記安裝 Live Server 延伸模組，需要在 VS Code 中重新安裝" },
      { key: "B", text: "＜head＞ 區塊內漏掉了 charset 設定（&lt;meta charset=\"UTF-8\"&gt;）" },
      { key: "C", text: "＜body＞ 內使用了錯誤標籤導致字型解析失敗" },
      { key: "D", text: "檔案副檔名誤設為 .html.txt" }
    ],
    answer: "B",
    explain: `
      <p>中文亂碼最常見原因是<strong>缺少字元編碼宣告</strong>。</p>
      <p>正確寫法應在 <code>&lt;head&gt;</code> 最前面加上：</p>
      <div class="code-block">&lt;meta charset="UTF-8"&gt;</div>
      <p>讓瀏覽器知道要用 UTF-8 解讀檔案。</p>
    `
  },
  {
    id: 6,
    type: "程式碼閱讀與結果預測",
    title: "超連結屬性",
    body: `觀察下方 <code>&lt;a&gt;</code> 標籤，當使用者點擊此連結時，瀏覽器會產生何種行為？
<div class="code-block">&lt;a href="https://github.com" target="_blank"&gt;我的 GitHub 專頁&lt;/a&gt;</div>`,
    options: [
      { key: "A", text: "直接將 GitHub 網頁檔案下載到使用者電腦中" },
      { key: "B", text: "在「當前分頁」直接替換頁面並跳轉至 GitHub 專頁" },
      { key: "C", text: "在「新分頁」開啟 GitHub 專頁，原本的網頁分頁保持開啟" },
      { key: "D", text: "彈出警示視窗提示連結已被鎖定" }
    ],
    answer: "C",
    explain: `
      <p><code>target="_blank"</code> 的作用是讓連結在<strong>新分頁（或新視窗）</strong>開啟，原本的頁面保持不變。</p>
      <p>若沒有寫 <code>target</code> 或寫 <code>target="_self"</code>，則會在當前分頁直接跳轉。</p>
    `
  },
  {
    id: 7,
    type: "常見錯誤分析",
    title: "圖片標籤與路徑屬性",
    body: `關於圖片標籤 <code>&lt;img&gt;</code>，下列敘述何者<strong>錯誤</strong>？`,
    options: [
      { key: "A", text: "＜img＞ 是空元素，不需要寫結束標籤" },
      { key: "B", text: "src 屬性用來指定圖片檔案的存放路徑或來源" },
      { key: "C", text: "alt 屬性是用來設定圖片在網頁上顯示的像素寬度" },
      { key: "D", text: "若圖片因檔名或路徑錯誤破圖，瀏覽器會顯示 alt 內的替代文字" }
    ],
    answer: "C",
    explain: `
      <p><code>alt</code> 是「替代文字」（alternative text），當圖片無法顯示時會出現，同時也提供給螢幕閱讀器使用，與寬度無關。</p>
      <p>要設定寬度應使用 <code>width</code> 屬性或 CSS。</p>
      <p>(A)(B)(D) 都正確。</p>
    `
  },
  {
    id: 8,
    type: "簡單應用概念題",
    title: "VS Code 與 Live Server 操作",
    body: `在 VS Code 中開發 HTML 網頁與使用 Live Server 延伸模組時，下列哪一項操作觀念是正確的？`,
    options: [
      { key: "A", text: "每次在 VS Code 修改程式碼後，都必須手動關閉並重新啟動 Live Server" },
      { key: "B", text: "網站的首頁檔案預設應命名為 index.html，且檔名全小寫、不留空格" },
      { key: "C", text: "在空白檔案中輸入 html5! 才能透過 Emmet 產生基本骨架" },
      { key: "D", text: "Live Server 只能即時預覽寫在 ＜body＞ 裡面的內容" }
    ],
    answer: "B",
    explain: `
      <p>正確觀念：首頁檔名習慣命名為 <code>index.html</code>（全小寫、無空格），瀏覽器與伺服器預設會優先尋找它。</p>
      <p>(A) 錯誤：Live Server 會自動偵測儲存後刷新，不需重啟。</p>
      <p>(C) 錯誤：Emmet 快捷是輸入 <code>!</code> 再按 Tab（或 Enter），不是 html5!。</p>
      <p>(D) 錯誤：Live Server 會完整載入整個 HTML 檔。</p>
    `
  },
  {
    id: 9,
    type: "觀念與視覺解析",
    title: "標題與段落語意",
    body: `小新在編輯自我介紹網頁，關於 <code>&lt;h1&gt;</code>～<code>&lt;h6&gt;</code> 與 <code>&lt;p&gt;</code>、<code>&lt;strong&gt;</code> 的使用，下列何者符合 HTML 語意規範？`,
    options: [
      { key: "A", text: "一個網頁中建議只使用一個 ＜h1＞ 作為整頁最重要的主要大標題" },
      { key: "B", text: "＜h6＞ 代表層級最高、文字尺寸最大的標題" },
      { key: "C", text: "若只是想把內文中的某個字變大，應該直接套用 ＜h1＞ 標籤" },
      { key: "D", text: "＜strong＞ 標籤僅會改變視覺上的字體粗細，語音朗讀器不會加重語氣" }
    ],
    answer: "A",
    explain: `
      <p>語意上一個頁面建議只有一個主要 <code>&lt;h1&gt;</code>，代表整頁最重要標題。</p>
      <p>(B) 錯誤：<code>&lt;h1&gt;</code> 層級最高、通常字最大；<code>&lt;h6&gt;</code> 是最低層級。</p>
      <p>(C) 錯誤：標題標籤有語意，不能只為了「變大」而濫用，應使用 CSS。</p>
      <p>(D) 錯誤：<code>&lt;strong&gt;</code> 有「重要／強調」語意，螢幕閱讀器通常會加重語氣。</p>
    `
  },
  {
    id: 10,
    type: "常見錯誤分析",
    title: "AI 提示詞除錯",
    body: `小新請 AI 幫忙寫一段 HTML，AI 回傳了這段程式碼：
<div class="code-block">&lt;p&gt;我喜歡 &lt;span style="color:red"&gt;珍珠奶茶&lt;/span&gt;&lt;/p&gt;</div>
若以第一週基礎 HTML 的標準來看，這段程式碼出現了什麼「常見陷阱」？`,
    options: [
      { key: "A", text: "＜p＞ 標籤內部不能包含中文文字" },
      { key: "B", text: "偷渡了尚未學過的 ＜span＞ 標籤與 style 行內 CSS 樣式" },
      { key: "C", text: "標籤缺少了結束標籤" },
      { key: "D", text: "段落內容必須強制移動到 ＜head＞ 區塊內" }
    ],
    answer: "B",
    explain: `
      <p>對初學者來說，AI 常會直接給出尚未教過的標籤（<code>&lt;span&gt;</code>）與行內樣式（<code>style="..."</code>），這會讓學習進度混亂。</p>
      <p>建議先把基礎標籤（h1~h6、p、a、img、ul/li 等）學穩，再慢慢接觸 CSS 與更多語意標籤。</p>
      <p>(A)(C)(D) 都不是正確的問題點。</p>
    `
  }
];

/* ===== 狀態 ===== */
let currentIndex = 0;
let score = 0;
let answered = Array(questions.length).fill(null);
let reviewMode = false;

/* ===== DOM ===== */
const qNumber = document.getElementById("qNumber");
const qType = document.getElementById("qType");
const qTitle = document.getElementById("qTitle");
const qBody = document.getElementById("qBody");
const optionsEl = document.getElementById("options");
const feedback = document.getElementById("feedback");
const feedbackResult = document.getElementById("feedbackResult");
const feedbackExplain = document.getElementById("feedbackExplain");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const questionCard = document.getElementById("questionCard");
const resultScreen = document.getElementById("resultScreen");
const finalScore = document.getElementById("finalScore");
const resultEmoji = document.getElementById("resultEmoji");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const restartBtn = document.getElementById("restartBtn");
const reviewBtn = document.getElementById("reviewBtn");

totalEl.textContent = questions.length;

/* ===== 渲染題目 ===== */
function renderQuestion() {
  const q = questions[currentIndex];
  const state = answered[currentIndex];

  qNumber.textContent = `第 ${q.id} 題`;
  qType.textContent = q.type;
  qTitle.textContent = q.title;
  qBody.innerHTML = q.body;

  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="opt-letter">${opt.key}</span><span>${opt.text}</span>`;
    btn.dataset.key = opt.key;

    if (state) {
      btn.disabled = true;
      if (opt.key === q.answer) btn.classList.add("correct");
      if (opt.key === state.selected && !state.correct) btn.classList.add("wrong");
      if (opt.key === state.selected) btn.classList.add("selected");
    } else {
      btn.addEventListener("click", () => selectAnswer(opt.key));
    }

    optionsEl.appendChild(btn);
  });

  if (state) {
    feedback.hidden = false;
    if (state.correct) {
      feedbackResult.className = "feedback-result correct";
      feedbackResult.textContent = "✓ 答對了！";
    } else {
      feedbackResult.className = "feedback-result wrong";
      feedbackResult.textContent = `✗ 答錯了，正確答案是 (${q.answer})`;
    }
    feedbackExplain.innerHTML = q.explain;
  } else {
    feedback.hidden = true;
  }

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = !state;
  nextBtn.textContent = currentIndex === questions.length - 1 ? "看結果" : "下一題";

  const progress = ((currentIndex + 1) / questions.length) * 100;
  progressBar.style.setProperty("--progress", `${progress}%`);
  progressText.textContent = `第 ${currentIndex + 1} / ${questions.length} 題`;

  scoreEl.textContent = score;
}

/* ===== 選擇答案 ===== */
function selectAnswer(key) {
  if (answered[currentIndex]) return;

  const q = questions[currentIndex];
  const correct = key === q.answer;
  answered[currentIndex] = { selected: key, correct };
  if (correct) score++;

  renderQuestion();
}

/* ===== 導航 ===== */
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (!answered[currentIndex]) return;

  if (currentIndex === questions.length - 1) {
    showResult();
  } else {
    currentIndex++;
    renderQuestion();
  }
});

/* ===== 結果頁 ===== */
function showResult() {
  questionCard.hidden = true;
  resultScreen.hidden = false;

  finalScore.textContent = score;
  const percent = (score / questions.length) * 100;

  if (percent >= 90) {
    resultEmoji.textContent = "🏆";
    resultTitle.textContent = "太強了！";
    resultMessage.textContent = "幾乎全對，HTML 基礎非常扎實！";
  } else if (percent >= 70) {
    resultEmoji.textContent = "🎉";
    resultTitle.textContent = "表現不錯！";
    resultMessage.textContent = "已經掌握大部分重點，再複習一下錯題就更完美。";
  } else if (percent >= 50) {
    resultEmoji.textContent = "💪";
    resultTitle.textContent = "繼續加油！";
    resultMessage.textContent = "有進步空間，建議把解析再看一次並動手練習。";
  } else {
    resultEmoji.textContent = "📚";
    resultTitle.textContent = "再練一次吧！";
    resultMessage.textContent = "基礎觀念還需要加強，不用灰心，多做幾次就會進步。";
  }
}

/* ===== 重新開始 ===== */
restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  answered = Array(questions.length).fill(null);
  reviewMode = false;
  questionCard.hidden = false;
  resultScreen.hidden = true;
  renderQuestion();
});

/* ===== 回顧 ===== */
reviewBtn.addEventListener("click", () => {
  currentIndex = 0;
  reviewMode = true;
  questionCard.hidden = false;
  resultScreen.hidden = true;
  renderQuestion();
});

/* ===== 啟動 ===== */
renderQuestion();