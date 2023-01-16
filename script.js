const morse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  "?": "..--..",
  "!": "-.-.--",
  "@": ".--.-.",
  "&": ".-...",
  ".": ".-.-.-",
  ",": "--..--",
  '"': ".-..-.",
  "'": ".----.",
  "(": "-.--.",
  ")": "-.--.-",
  "/": "-..-.",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  $: "...-..-",
};

function englishToMorse(text) {
  let englishWords = text.split(" ");
  let morseWords = englishWords.map((word) => {
    let morseWord = word.split("").map((char) => {
      return morse[char.toUpperCase()];
    });
    return morseWord.join(" ");
  });
  return morseWords.join("<br>");
}

const morseToEnglish = (text) => {
  let morseWords = text.split("\n");
  let englishWords = morseWords.map((word) => {
    let englishWord = "";
    let morseCode = word.split(" ");
    for (let code of morseCode) {
      for (const [key, value] of Object.entries(morse)) {
        if (code === value) {
          englishWord += key;
          break;
        }
      }
    }
    return englishWord;
  });
  return englishWords.join(" ");
};

let englishToMorseBtn = document.querySelector(".main__english--submit");
let morseToEnglishBtn = document.querySelector(".main__morse--submit");

englishToMorseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let englishTextareaValue = document.querySelector(
    ".main__english--text"
  ).value;
  let morseTranslation = englishToMorse(englishTextareaValue);
  document.querySelector(".main__english--translator").innerHTML =
    morseTranslation;
  document.querySelector(".main__english--text").value = "";
});

morseToEnglishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let morseTextareaValue = document.querySelector(".main__morse--text").value;
  let englishTranslation = morseToEnglish(morseTextareaValue);
  document.querySelector(".main__morse--translator").textContent =
    englishTranslation;
  document.querySelector(".main__morse--text").value = "";
});

module.exports = {
  englishToMorse,
  morseToEnglish,
};
