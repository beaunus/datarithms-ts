import { add } from "./";
import * as _ from "lodash";

describe("index", () => {
  describe("add", () => {
    it("should return the result of adding both inputs", () => {
      const a = _.random(0, Number.MAX_SAFE_INTEGER / 2);
      const b = _.random(0, Number.MAX_SAFE_INTEGER / 2);
      const actual = add(a, b);
      const expected = a + b;

      expect(actual).toBe(expected);
    });
  });
});
