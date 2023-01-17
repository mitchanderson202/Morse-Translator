import { englishToMorse, morseToEnglish } from "./functions";

describe("English to Morse", () => {
  it("should return 'Invalid input' for invalid characters such as ` or \\", () => {
    expect(englishToMorse("hello`world")).toBe(
      "The input contains invalid English characters"
    );
    expect(englishToMorse("hello\\world")).toBe(
      "The input contains invalid English characters"
    );
  });

  it("should convert the word 'hello' to '.... . .-.. .-.. ---'", () => {
    expect(englishToMorse("hello")).toBe(".... . .-.. .-.. ---");
  });

  it("should convert the sentence 'hello world' to '.... . .-.. .-.. --- .-- --- .-. .-.. -..", () => {
    expect(englishToMorse("hello world")).toBe(
      ".... . .-.. .-.. ---<br>.-- --- .-. .-.. -.."
    );
  });
});

describe("Morse to English", () => {
  it("should return 'Invalid input' for invalid characters such as ` or \\", () => {
    expect(morseToEnglish(".... . .-.. .-.. ---`.-- --- .-. .-.. -..")).toBe(
      "The input contains invalid Morse Code characters"
    );
    expect(
      morseToEnglish(".... . .-.. .-.. --- `1224.-- --- .-. .-.. -..")
    ).toBe("The input contains invalid Morse Code characters");
  });

  it("should convert the morse code '.... . .-.. .-.. ---' to the word 'hello'", () => {
    expect(morseToEnglish(".... . .-.. .-.. ---")).toBe("HELLO");
  });

  it("should convert the morse code '.... . .-.. .-.. --- .-- --- .-. .-.. -..' to the sentence 'hello world'", () => {
    expect(morseToEnglish(".... . .-.. .-.. --- .-- --- .-. .-.. -..")).toBe(
      "HELLOWORLD"
    );
  });
});
