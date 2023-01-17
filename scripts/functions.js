import { morse } from "./morse.js";

export const englishToMorse = (text) => {
  if (!text.match(/^[A-Za-z0-9\?,!@#&."'()\/:;=+\-_$\s]+$/))
    return "The input contains invalid English characters";
  return text
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char) => morse[char.toUpperCase()])
        .join(" ");
    })
    .join("<br>");
};

export const morseToEnglish = (text) => {
  if (!text.match(/^[.\-\n\s]+$/))
    return "The input contains invalid Morse Code characters";
  return text
    .split("\n")
    .map((word) => {
      let englishWord = "";
      word.split(" ").forEach((code) => {
        for (const [key, value] of Object.entries(morse)) {
          if (code === value) {
            englishWord += key;
            break;
          }
        }
      });
      return englishWord;
    })
    .join(" ");
};
