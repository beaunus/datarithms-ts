import { romanToInt } from "./index";

describe("roman-to-int", () => {
  it("should pass the test cases", () => {
    expect(romanToInt("III")).toStrictEqual(3);
    expect(romanToInt("IV")).toStrictEqual(4);
    expect(romanToInt("IX")).toStrictEqual(9);
    expect(romanToInt("LVIII")).toStrictEqual(58);
    expect(romanToInt("MCMXCIV")).toStrictEqual(1994);
  });
});
