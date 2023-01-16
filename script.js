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

let englishToMorse = document.querySelector(".main__english--translator");
let englishSubmit = document.querySelector(".main__english--submit");

let morseToEnglish = document.querySelector(".main__morse--translator");
let morseSubmit = document.querySelector(".main__morse--submit");

englishSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let englishTextareaValue = document.querySelector(
    ".main__english--text"
  ).value;
  let englishWords = englishTextareaValue.split(" ");
  let morseWords = englishWords.map((word) => {
    let morseWord = word.split("").map((char) => {
      return morse[char.toUpperCase()];
    });
    return morseWord.join(" ");
  });
  englishToMorse.innerHTML = morseWords.join("<br>");
  document.querySelector(".main__english--text").value = "";
});

morseSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let morseTextareaValue = document.querySelector(".main__morse--text").value;
  let morseWords = morseTextareaValue.split("\n");
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
  morseToEnglish.textContent = englishWords.join(" ");
  document.querySelector(".main__morse--text").value = "";
});
