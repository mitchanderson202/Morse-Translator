let englishTextarea = document.querySelector(".main__english--text");
let englishToMorse = document.querySelector(".main__english--translator");
let morseTextarea = document.querySelector(".main__morse--text");
let morseToEnglish = document.querySelector(".main__morse--translator");

englishTextarea.addEventListener("input", (e) => {
  console.log(e.target.value);
  englishToMorse.append(e.target.value);
});

morseTextarea.addEventListener("input", (e) => {
  console.log(e.target.value);
  morseToEnglish.append(e.target.value);
});
