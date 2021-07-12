function minStartValue(numbers: number[]): number {
  let minSoFar = numbers[0];
  let sumSoFar = numbers[0];
  for (let i = 1; i < numbers.length; ++i) {
    sumSoFar += numbers[i];
    minSoFar = Math.min(minSoFar, sumSoFar);
  }
  return Math.max(1 - minSoFar, 1);
}

export { minStartValue };
