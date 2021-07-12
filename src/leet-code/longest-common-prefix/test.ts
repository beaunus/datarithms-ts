import { longestCommonPrefix } from "./index";

describe("longest-common-prefix", () => {
  it("should pass the test cases", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });
});
