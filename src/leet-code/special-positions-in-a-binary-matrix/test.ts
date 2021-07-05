import { numSpecial } from "./index";

describe("special-positions-in-a-binary-matrix", () => {
  it("should pass the test cases", () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
      ])
    ).toStrictEqual(1);

    expect(
      numSpecial([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ])
    ).toStrictEqual(3);

    expect(
      numSpecial([
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ])
    ).toStrictEqual(2);

    expect(
      numSpecial([
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0],
      ])
    ).toStrictEqual(0);

    expect(
      numSpecial([
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1],
      ])
    ).toStrictEqual(3);
  });
});
