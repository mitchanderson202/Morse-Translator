// import { englishToMorse, morseToEnglish } from "./script.js";
const { englishToMorse, morseToEnglish } = require("./script.js");

describe("English to Morse", () => {
  it("should convert the word 'hello' to '.... . .-.. .-.. ---'", () => {
    expect(englishToMorse("hello")).toBe(".... . .-.. .-.. ---");
  });

  it("should convert the sentence 'hello world' to '.... .- .-.. .-.. --- / .-- --- .-. .-.. -..'", () => {
    expect(englishToMorse("hello world")).toBe(
      ".... .- .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
  });
});

describe("Morse to English", () => {
  it("should convert the morse code '.... . .-.. .-.. ---' to the word 'hello'", () => {
    expect(morseToEnglish(".... . .-.. .-.. ---")).toBe("hello");
  });

  it("should convert the morse code '.... .- .-.. .-.. --- / .-- --- .-. .-.. -..' to the sentence 'hello world'", () => {
    expect(morseToEnglish(".... .- .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe(
      "hello world"
    );
  });
});
