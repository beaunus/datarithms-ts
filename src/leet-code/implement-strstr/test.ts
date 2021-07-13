import { strStr } from "./index";

const TEST_CASES: { args: [string, string]; expected: any }[] = [
  { args: ["hello", "ll"], expected: 2 },
  { args: ["aaaaa", "bba"], expected: -1 },
  { args: ["", ""], expected: 0 },
  { args: ["", "a"], expected: -1 },
  { args: ["hello", "participate in parachute "], expected: -1 },
];

describe("implement-strstr", () => {
  TEST_CASES.forEach(({ args, expected }) =>
    it(`should return ${expected} for ${args.join(", ")}`, () =>
      expect(strStr(...args)).toBe(expected))
  );
  it("should return the correct result for long strings", () => {
    const haystack = Array(100000).fill("a").concat(["b"]).join("");
    const needle = Array(10000).fill("a").concat(["b"]).join("");
    expect(strStr(haystack, needle)).toBe(haystack.length - needle.length);
  });
});
