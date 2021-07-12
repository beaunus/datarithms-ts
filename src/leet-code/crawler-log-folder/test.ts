import { minOperations } from "./index";

describe("crawler-log-folder", () => {
  it("should pass the test cases", () => {
    expect(minOperations(["d1/", "d2/", "../", "d21/", "./"])).toBe(2);
    expect(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])).toBe(3);
    expect(minOperations(["d1/", "../", "../", "../"])).toBe(0);
  });
});
