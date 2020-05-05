/**
 * Sort in place and return the given array sorted with the Quicksort algorithm.
 *
 * @param array
 */
export function quicksort(
  array: Array<number>,
  lo = 0,
  hi = array.length - 1
): Array<number> {
  if (lo >= hi) return array;
  const pivotIndex = Math.floor(Math.random() * (1 + hi - lo));
  [array[lo], array[pivotIndex]] = [array[pivotIndex], array[lo]];

  let lt = lo;
  let gt = hi;
  const pivot = array[lo];
  let i = lo + 1;

  while (i <= gt)
    if (array[i] < pivot) {
      [array[i], array[lt]] = [array[lt], array[i]];
      ++i;
      ++lt;
    } else if (array[i] > pivot) {
      [array[i], array[gt]] = [array[gt], array[i]];
      --gt;
    } else ++i;

  quicksort(array, lo, lt - 1);
  quicksort(array, gt + 1, hi);

  return array.sort();
}
