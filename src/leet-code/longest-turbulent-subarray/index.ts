function compare(a: number, b: number) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function maxTurbulenceSize(arr: number[]): number {
  let champion = 1;

  for (let i = 1, startingIndexOfTurbulentSubarray = 0; i < arr.length; ++i) {
    const comparisonWithPrevious = compare(arr[i - 1], arr[i]);
    if (comparisonWithPrevious === 0) startingIndexOfTurbulentSubarray = i;
    else if (
      i === arr.length - 1 ||
      comparisonWithPrevious !== -compare(arr[i], arr[i + 1])
    ) {
      champion = Math.max(champion, i - startingIndexOfTurbulentSubarray + 1);
      startingIndexOfTurbulentSubarray = i;
    }
  }
  return champion;
}

export { maxTurbulenceSize };
