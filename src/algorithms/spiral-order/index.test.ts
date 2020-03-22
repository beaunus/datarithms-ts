import spiralOrder from "./";
import * as _ from "lodash";

type Matrix = ReadonlyArray<ReadonlyArray<any>>;

describe("spiralOrder", () => {
  it("should return an empty array if the given matrix is empty", () => {
    let matrix: Matrix = [];
    let actual = spiralOrder(matrix);
    const expected: Array<any> = [];

    expect(actual).toEqual(expected);

    matrix = [[]];
    actual = spiralOrder(matrix);

    expect(actual).toEqual(expected);
  });

  it("should return the given elements in spiral order", () => {
    const matrix: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const actual = spiralOrder(matrix);
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];

    expect(actual).toEqual(expected);
  });
});
