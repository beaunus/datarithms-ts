import { isAlienSorted } from "./index";

describe("verifying-an-alien-dictionary", () => {
  it("should pass the test cases", () => {
    expect(
      isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")
    ).toBe(true);
    expect(
      isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
    ).toBe(false);
    expect(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")).toBe(
      false
    );
    expect(isAlienSorted(["app", "apple"], "abcdefghijklmnopqrstuvwxyz")).toBe(
      true
    );
  });
});
