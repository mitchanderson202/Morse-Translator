let englishToMorse = document.querySelector(".main__english--translator");
let englishSubmit = document.querySelector(".main__english--submit");

let morseToEnglish = document.querySelector(".main__morse--translator");
let morseSubmit = document.querySelector(".main__morse--submit");

// englishSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(englishTextareaValue);
// });

englishSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let englishTextareaValue = document.querySelector(
    ".main__english--text"
  ).value;

  englishToMorse.textContent = englishTextareaValue;

  document.querySelector(".main__english--text").value = "";
});

morseSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let morseTextaresValue = document.querySelector(".main__morse--text").value;

  morseToEnglish.textContent = morseTextaresValue;

  document.querySelector(".main__morse--text").value = "";
});
