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

export function mergeSort(
  array: number[],
  aux = new Array(array.length),
  lo = 0,
  hi = array.length - 1
) {
  if (hi <= lo) return;
  const mid = lo + Math.floor((hi - lo) / 2);
  mergeSort(array, aux, lo, mid);
  mergeSort(array, aux, mid + 1, hi);
  merge(array, aux, lo, mid, hi);
  return array;
}

function merge(
  array: number[],
  aux: number[],
  lo: number,
  mid: number,
  hi: number
) {
  for (let i = lo; i <= hi; i++) aux[i] = array[i];
  let leftIndex = lo;
  let rightIndex = mid + 1;
  for (let i = lo; i <= hi; i++)
    if (leftIndex > mid || aux[rightIndex] < aux[leftIndex])
      array[i] = aux[rightIndex++];
    else array[i] = aux[leftIndex++];
}
