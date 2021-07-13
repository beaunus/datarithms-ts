import { strStr } from "./index";

describe("implement-strstr", () => {
  it("should pass the test cases", () => {
    expect(strStr("hello", "ll")).toBe(2);
    expect(strStr("aaaaa", "bba")).toBe(-1);
    expect(strStr("", "")).toBe(0);
    expect(strStr("", "a")).toBe(-1);
  });
});
