const { englishToMorse, morseToEnglish } = require("./script.js");

describe("English to Morse", () => {
  it("should convert the word 'hello' to '.... . .-.. .-.. ---'", () => {
    expect(englishToMorse("hello")).toEqual(".... . .-.. .-.. ---");
  });

  it("should convert the sentence 'hello world' to '.... .- .-.. .-.. --- / .-- --- .-. .-.. -..'", () => {
    expect(englishToMorse("hello world")).toEqual(
      ".... .- .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
  });
});

describe("Morse to English", () => {
  it("should convert the morse code '.... . .-.. .-.. ---' to the word 'hello'", () => {
    expect(morseToEnglish(".... . .-.. .-.. ---")).toEqual("hello");
  });

  it("should convert the morse code '.... .- .-.. .-.. --- / .-- --- .-. .-.. -..' to the sentence 'hello world'", () => {
    expect(
      morseToEnglish(".... .- .-.. .-.. --- / .-- --- .-. .-.. -..")
    ).toEqual("hello world");
  });
});
