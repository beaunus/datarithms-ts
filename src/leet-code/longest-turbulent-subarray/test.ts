import * as path from "path";

import { maxTurbulenceSize } from "./index";

const dirnameArray = path.dirname(__filename).split("/");

// eslint-disable-next-line jest/valid-title
describe(dirnameArray[dirnameArray.length - 1], () => {
  it("should pass the test cases", () => {
    expect(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])).toBe(5);
    expect(maxTurbulenceSize([4, 8, 12, 16])).toBe(2);
    expect(maxTurbulenceSize([100])).toBe(1);
    expect(maxTurbulenceSize([9, 9, 9, 9, 9, 9, 9])).toBe(1);
    expect(maxTurbulenceSize([1, 2, 1, 2, 1, 2, 1, 2])).toBe(8);
  });
});
