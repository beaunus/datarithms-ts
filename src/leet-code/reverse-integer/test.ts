import { reverse } from "./index";

describe("reverse-integer", () => {
  it("should pass the test cases", () => {
    expect(reverse(123)).toStrictEqual(321);
    expect(reverse(1534236469)).toStrictEqual(0);
  });
});
