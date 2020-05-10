/**
 * Sort in place and return the given array sorted with the Quicksort algorithm.
 *
 * Adapted from https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/Quick3way.html
 *
 * @param array
 */
export function quicksort3Way(
  array: Array<number>,
  lo = 0,
  hi = array.length - 1
): Array<number> {
  if (lo >= hi) return array;
  const pivotIndex = Math.floor(Math.random() * (hi - lo) + lo);
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

  quicksort3Way(array, lo, lt - 1);
  quicksort3Way(array, gt + 1, hi);
  return array;
}
