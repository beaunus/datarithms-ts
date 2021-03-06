/**
 * Sort in place and return the given array sorted with the Quicksort algorithm.
 *
 * Adapted from https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/Quick3way.html
 *
 * @param array
 */
/* eslint-disable no-param-reassign */
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

  for (let i = lo + 1, pivot = array[lo]; i <= gt; )
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
/* eslint-enable no-param-reassign */

export function mergeSort(
  array: number[],
  aux = new Array(array.length),
  lo = 0,
  hi = array.length - 1
) {
  if (hi <= lo) return array;
  const mid = lo + Math.floor((hi - lo) / 2);
  mergeSort(array, aux, lo, mid);
  mergeSort(array, aux, mid + 1, hi);
  merge(array, aux, lo, mid, hi);
  return array;
}

/* eslint-disable no-param-reassign */
function merge(
  array: number[],
  aux: number[],
  lo: number,
  mid: number,
  hi: number
) {
  for (let i = lo; i <= hi; i++) aux[i] = array[i];
  for (let i = lo, leftIndex = lo, rightIndex = mid + 1; i <= hi; i++)
    array[i] =
      leftIndex > mid || (rightIndex <= hi && aux[rightIndex] < aux[leftIndex])
        ? aux[rightIndex++]
        : aux[leftIndex++];
}
/* eslint-enable no-param-reassign */

export function mergeSortBottomUp(array: number[]) {
  const aux = new Array(array.length);
  for (let len = 1; len < array.length; len *= 2)
    for (let lo = 0; lo < array.length - len; lo += len + len)
      merge(
        array,
        aux,
        lo,
        lo + len - 1,
        Math.min(lo + len + len - 1, array.length - 1)
      );
  return array;
}
