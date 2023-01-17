import { englishToMorse, morseToEnglish } from "./functions.js";

const englishToMorseBtn = document.querySelector(".main__english--submit");
const morseToEnglishBtn = document.querySelector(".main__morse--submit");

englishToMorseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const englishTextareaValue = document.querySelector(
    ".main__english--text"
  ).value;
  const morseTranslation = englishToMorse(englishTextareaValue);
  document.querySelector(".main__english--translator").innerHTML =
    morseTranslation;
  document.querySelector(".main__english--text").value = "";
});

morseToEnglishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const morseTextareaValue = document.querySelector(".main__morse--text").value;
  const englishTranslation = morseToEnglish(morseTextareaValue);
  document.querySelector(".main__morse--translator").textContent =
    englishTranslation;
  document.querySelector(".main__morse--text").value = "";
});
