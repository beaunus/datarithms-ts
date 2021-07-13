import { Matrix } from "../../types";

import spiralOrder from ".";

describe("spiralOrder", () => {
  it("should return an empty array if the given matrix is empty", () => {
    let matrix: Matrix<unknown> = [];
    let actual = spiralOrder(matrix);
    const expected: Array<unknown> = [];

    expect(actual).toStrictEqual(expected);

    matrix = [[]];
    actual = spiralOrder(matrix);

    expect(actual).toStrictEqual(expected);
  });

  it("should return the given elements in spiral order", () => {
    const matrix: Matrix<number> = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const actual = spiralOrder(matrix);
    const expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];

    expect(actual).toStrictEqual(expected);
  });
});
