let charElement = getElement("char");
let hintElement = getElement("hint");

let scoreElement = getElement("score");
let score = 0;
let currentKana = "繋ぎ";

let language = "english";
let romajiHints = false;
let alwaysHint = false;
let showIrregualIndicater = true;

let kana = "hiragana";

let irregularKana = [50, 16, 11, 17, 25, 27, 66, 67];

function setHiragana() {
  kana = "hiragana";
  next();
}

function setKatakana() {
  kana = "katakana";
  next();
}

const hiragana = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "か",
  "き",
  "く",
  "け",

  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "や",
  "繋ぎ",
  "ゆ",
  "繋ぎ",
  "よ",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "わ",
  "繋ぎ",
  "繋ぎ",
  "繋ぎ",
  "を",
  "ん",
  "繋ぎ",
  "繋ぎ",
  "繋ぎ",
  "繋ぎ",
  // Dakuten (voiced)
  "が",
  "ぎ",
  "ぐ",
  "げ",
  "ご",
  "ざ",
  "じ",
  "ず",
  "ぜ",
  "ぞ",
  "だ",
  "ぢ",
  "づ",
  "で",
  "ど",
  "ば",
  "び",
  "ぶ",
  "べ",
  "ぼ",
  // Handakuten (p-sound)
  "ぱ",
  "ぴ",
  "ぷ",
  "ぺ",
  "ぽ",
];

const katakana = [
  // A-row
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  // K-row
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  // S-row
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  // T-row
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",

  // N-row
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  // H-row
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  // M-row
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  // Y-row
  "ヤ",
  "繋ぎ",
  "ユ",
  "繋ぎ",
  "ヨ",
  // R-row
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  // W-row
  "ワ",
  "繋ぎ",
  "繋ぎ",
  "繋ぎ",
  "ヲ",
  // N
  "ン",
  "繋ぎ",
  "繋ぎ",
  "繋ぎ",
  "繋ぎ",
  // Dakuten
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  // Handakuten
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ",
];

const romaji = [
  "a",
  "i",
  "u",
  "e",
  "o",
  "ka",
  "ki",
  "ku",
  "ke",
  "ko",
  "sa",
  "shi",
  "su",
  "se",
  "so",
  "ta",
  "chi",
  "tsu",
  "te",
  "to",
  "na",
  "ni",
  "nu",
  "ne",
  "no",
  "ha",
  "hi",
  "fu",
  "he",
  "ho",
  "ma",
  "mi",
  "mu",
  "me",
  "mo",
  "ya",
  "N/A",
  "yu",
  "N/A",
  "yo",
  "ra",
  "ri",
  "ru",
  "re",
  "ro",
  "wa",
  "N/A",
  "N/A",
  "N/A",
  "wo",
  "n",
  "N/A",
  "N/A",
  "N/A",
  "N/A",
  // Dakuten
  "ga",
  "gi",
  "gu",
  "ge",
  "go",
  "za",
  "ji",
  "zu",
  "ze",
  "zo",
  "da",
  "ji",
  "zu",
  "de",
  "do",
  "ba",
  "bi",
  "bu",
  "be",
  "bo",
  // Handakuten
  "pa",
  "pi",
  "pu",
  "pe",
  "po",
];

const correctHiragana = [];
const correctKatakana = [];

function getRandomKana(kana_arr, correct_arr) {
  let rni = kana_arr.indexOf("繋ぎ");

  if (correct_arr.length > 69) {
    return kana_arr[0];
  }

  while (kana_arr[rni] == "繋ぎ" || correct_arr.includes(kana_arr[rni])) {
    rni = Math.floor(Math.random() * kana_arr.length);
  }
  return kana_arr[rni];
}

function next() {
  if (kana == "hiragana") {
    currentKana = getRandomKana(hiragana, correctHiragana);
  } else {
    currentKana = getRandomKana(katakana, correctKatakana);
  }
  charElement.innerHTML = currentKana;
  hintElement.innerHTML = "";
  scoreElement.innerHTML = score;

  hintElement.setAttribute("hidden", "hidden");
  charElement.removeAttribute("hidden");

  if (alwaysHint) {
    buttonGetHint();
  }

  scoreToAdd = 1;
}

let scoreToAdd = 1;

function getHint(kana_arr, hint_element, current_kana) {
  let kanaIndex = kana_arr.indexOf(current_kana);
  let hintText = language == "english" ? "Hint: " : "示唆: ";

  hintText +=
    " " + kana_arr[Math.floor(kanaIndex / 5) * 5] + kana_arr[kanaIndex % 5];

  if (kanaIndex < 5) {
    hintText = hintText[1];
  }

  if (getCorrectKana(kana).length > 69) {
    hintText =
      "You got all the katakana or hiragana characters right! Press 組み替える in options to reset both kana or switch to the other kana.";
  }

  if (kanaIndex == 50) {
    hintText = hintText[0];
  }

  if (irregularKana.includes(kanaIndex) && showIrregualIndicater) {
    hintText += ` ★`;
  }

  if (romajiHints) {
    hintText += ` ${romaji[kanaIndex]}`;
  }

  hint_element.innerHTML = hintText;
  hintElement.removeAttribute("hidden");
}

function buttonGetHint() {
  if (kana == "hiragana") {
    getHint(hiragana, hintElement, currentKana);
  } else {
    getHint(katakana, hintElement, currentKana);
  }
}

function no() {
  if (hintElement.innerHTML != "" && scoreToAdd == 1) {
    scoreToAdd -= 1;
    score += scoreToAdd;
    next();
  } else {
    if (scoreToAdd == 1) {
      buttonGetHint();
      scoreToAdd -= 1;
    } else if (scoreToAdd == 2) {
      score += scoreToAdd - 3;
      next();
    } else {
      scoreToAdd -= 1;
      score += scoreToAdd;
      next();
    }
  }

  scoreElement.innerHTML = score;
}

function yes() {
  if (hintElement.innerHTML != "" && scoreToAdd < 2) {
    next();
  } else {
    if (scoreToAdd == 2) {
      score += scoreToAdd - 1;
      getCorrectKana(kana).push(currentKana);
      next();
    } else {
      buttonGetHint();
      scoreToAdd += 1;
    }
  }

  scoreElement.innerHTML = score;
}

function toggleGeneric(toggle) {
  toggle = !toggle;
}

function toggleRomaji() {
  romajiHints = !romajiHints;
  buttonGetHint();
}

function toggleAlwaysHint() {
  alwaysHint = !alwaysHint;
  buttonGetHint();
}

function toggleIrregualIndicater() {
  showIrregualIndicater = !showIrregualIndicater;
}

function addOne() {
  scoreToAdd = 1;
  score += scoreToAdd;
  scoreElement.innerHTML = score;
}

function minusOne() {
  scoreToAdd = -1;
  score += scoreToAdd;
  scoreToAdd = 1;
  scoreElement.innerHTML = score;

  getCorrectKana(kana).pop();
}

function reset() {
  scoreToAdd = 1;
  score = 0;
  scoreElement.innerHTML = score;
  correctKatakana.splice(0, correctKatakaenglishna.length);
  next();
}

function getCorrectKana(kana) {
  if (kana == "hiragana") {
    return correctHiragana;
  } else {
    return correctKatakana;
  }
}

function setEnglish() {
  language = "english";

  getElement("know_header").innerHTML = "Do you know how to pronounce ...";

  getElement("bYes").innerHTML = "はい";
  getElement("bNo").innerHTML = "いいえ";
  getElement("bNext").innerHTML = "Next Kana";
  getElement("bHint").innerHTML = "Get Hint";

  getElement("score_text").innerHTML = 'Score: <span id="score">0</span>';
  getElement("bAdd").innerHTML = "+1 Score";
  getElement("bSub").innerHTML = "-1 Score";

  getElement("Lromaji").innerHTML = "Toggle Romaji Hints";

  getElement("Ltoggle_hints").innerHTML = "Show Hints by Default";

  getElement("Ltoggle_irregular_indicater").innerHTML =
    "Toggle Irregular Pronounciation Indicater";

  getElement("bReset").innerHTML = "Reset Score";

  scoreElement = getElement("score");
}

window.onload = (event) => {
  if (getElement("english").checked) {
    setEnglish();
  } else {
    setJapanese();
  }

  if (getElement("hiragana").checked) {
    setHiragana();
  } else {
    setKatakana();
  }

  romajiHints = getElement("romaji").checked;
  alwaysHint = getElement("toggle_hints").checked;
  showIrregualIndicater = getElement("toggle_irregular_indicater").checked;

  next();
};

let mainWindow = getElement("main_window");
let infoWindow = getElement("info_header");
let optionsWindow = getElement("options_window");
let cheatSheetWindow = getElement("cheat_sheet_window");
let cheatSheet = getElement("cheat_sheet");

function hideWindow(windowElement) {
  windowElement.setAttribute("hidden", "hidden");
}

function showWindow(windowElement) {
  windowElement.removeAttribute("hidden");
}

function setWindowOptions() {
  hideWindow(mainWindow);
  hideWindow(infoWindow);
  hideWindow(cheatSheetWindow);
  showWindow(optionsWindow);
}

function setWindowMain() {
  hideWindow(optionsWindow);
  hideWindow(cheatSheetWindow);
  showWindow(mainWindow);
  showWindow(infoWindow);
}

function setWindowCheatSheet() {
  hideWindow(mainWindow);
  hideWindow(infoWindow);
  hideWindow(optionsWindow);
  showWindow(cheatSheetWindow);

  cheatSheet.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    for (let j = i; j < hiragana.length; j += 5) {
      const cheatSheetChar = kana == "hiragana" ? hiragana[j] : katakana[j];

      const cheatSheetElement = document.createElement("div");
      cheatSheetElement.setAttribute("class", "cheat_sheet_box");
      const cheatSheetTextElement = document.createElement("h2");

      cheatSheetTextElement.textContent =
        cheatSheetChar != "繋ぎ" ? cheatSheetChar : "";

      if (showIrregualIndicater && irregularKana.includes(j)) {
        cheatSheetTextElement.textContent += " ★";
      }

      cheatSheetElement.appendChild(cheatSheetTextElement);

      if (romajiHints) {
        const cheatSheetRomajiElement = document.createElement("h4");
        cheatSheetRomajiElement.textContent =
          romaji[j] != "N/A" ? romaji[j] : "";
        cheatSheetElement.appendChild(cheatSheetRomajiElement);
      }

      cheatSheet.appendChild(cheatSheetElement);
    }
  }
}

function getElement(id) {
  return document.getElementById(id);
}

function setJapanese() {
  language = "japanese";

  getElement("know_header").innerHTML = "あなたは知っていますか ...";

  getElement("bYes").innerHTML = "はい";
  getElement("bNo").innerHTML = "いいえ";
  getElement("bNext").innerHTML = "次";
  getElement("bHint").innerHTML = "示唆を得る";

  getElement("score_text").innerHTML = '点数: <span id="score">0</span>';
  getElement("bAdd").innerHTML = "1を追加";
  getElement("bSub").innerHTML = "1を引く";

  getElement("Lromaji").innerHTML = "ローマ字を切り替える";

  getElement("Ltoggle_hints").innerHTML = "常に提案";

  getElement("Ltoggle_irregular_indicater").innerHTML = "不規則な発音をする";

  getElement("bReset").innerHTML = "Reset Score";

  scoreElement = getElement("score");
}
