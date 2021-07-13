import { strStr } from "./index";

const TEST_CASES: { args: [string, string]; expected: any }[] = [
  { args: ["hello", "ll"], expected: 2 },
  { args: ["aaaaa", "bba"], expected: -1 },
  { args: ["", ""], expected: 0 },
  { args: ["", "a"], expected: -1 },
];

describe("implement-strstr", () => {
  TEST_CASES.forEach(({ args, expected }) =>
    it(`should return ${expected} for ${args.join(", ")}`, () =>
      expect(strStr.apply(null, args)).toBe(expected))
  );
});
