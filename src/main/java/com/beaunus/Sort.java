package com.beaunus;

import java.util.Arrays;
import java.util.Random;

public class Sort {

  /**
   * Sort the given array using the quicksort algorithm.
   * 
   * @param <T> type of elements
   * @param array array to be sorted
   */
  public static <T extends Comparable<T>> void quicksort(final T[] array) {
    final Random random = new Random();
    quicksort(array, random, 0, array.length - 1);
  }

  private static <T extends Comparable<T>> void quicksort(final T[] array, final Random random,
      final int lo, final int hi) {
    if (hi <= lo) {
      return;
    }

    final int randomIndex = lo + random.nextInt(hi - lo);
    swap(array, lo, randomIndex);

    final int p = partition(array, lo, hi);
    quicksort(array, random, lo, p - 1);
    quicksort(array, random, p + 1, hi);
  }

  private static <T extends Comparable<T>> int partition(final T[] array, final int lo,
      final int hi) {
    int i = lo;
    int j = hi + 1;

    final T pivot = array[lo];

    while (true) {
      do {
        ++i;
      } while (array[i].compareTo(pivot) <= 0 && i < hi);

      do {
        --j;
      } while (array[j].compareTo(pivot) >= 0 && j > lo);

      if (i >= j) {
        break;
      }
      swap(array, i, j);
    }

    swap(array, lo, j);
    return j;

  }

  private static void swap(final Comparable<?>[] array, final int i, final int j) {
    final Comparable<?> temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
