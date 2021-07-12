import { minStartValue } from "./index";

describe("minimum-value-to-get-positive-step-by-step-sum", () => {
  it("should pass the test cases", () => {
    expect(minStartValue([-3, 2, -3, 4, 2])).toBe(5);
    expect(minStartValue([1, 2])).toBe(1);
    expect(minStartValue([1, -2, -3])).toBe(5);
  });
});
