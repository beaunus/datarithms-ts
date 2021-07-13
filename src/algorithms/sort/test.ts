import _ from "lodash";

import * as Sort from ".";

describe("Sort", () => {
  const NUM_ELEMENTS = _.random(50, 100);
  const array = Array.from({ length: NUM_ELEMENTS }, () => Math.random());
  Object.freeze(array);

  Object.entries(Sort).forEach(([funcName, func]) => {
    // eslint-disable-next-line jest/valid-title
    describe(funcName, () => {
      it("should return an array containing all the elements of the given array", () => {
        const actual = func(array.slice());

        expect(actual).toHaveLength(array.length);
        array.forEach((element) => {
          expect(actual).toContain(element);
          expect(actual.filter((x) => x === element)).toHaveLength(
            array.filter((x) => x === element).length
          );
        });
      });

      it("should return a sorted array", () => {
        const actual = func(array.slice());

        for (let i = 1; i < actual.length; ++i)
          expect(actual[i - 1]).toBeLessThanOrEqual(actual[i]);
      });

      it("should sort the given array in place", () => {
        const arrayCopy = array.slice();
        const actual = func(arrayCopy);

        expect(arrayCopy).toStrictEqual(actual);
      });
    });
  });
});
