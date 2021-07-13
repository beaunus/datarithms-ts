function reverse(x: number) {
  const result =
    (x < 0 ? -1 : 1) *
    Number(Math.abs(Number(x)).toString().split("").reverse().join(""));
  return result < 2 ** 31 - 1 && result > -(2 ** 31) ? result : 0;
}

export { reverse };
