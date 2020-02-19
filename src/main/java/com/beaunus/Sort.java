package com.beaunus;

import java.util.Arrays;
import java.util.Random;

public class Sort {

  public static <T extends Comparable<T>> void quicksort(T[] array) {
    Random random = new Random();
    System.out.println(Arrays.toString(array));
    quicksort(array, random, 0, array.length - 1);
    System.out.println(Arrays.toString(array));
  }

  private static <T extends Comparable<T>> void quicksort(T[] array, Random random, int lo,
      int hi) {
    if (hi <= lo) {
      return;
    }

    int randomIndex = lo + random.nextInt(hi - lo);
    swap(array, lo, randomIndex);

    int p = partition(array, lo, hi);
    quicksort(array, random, lo, p - 1);
    quicksort(array, random, p + 1, hi);
  }

  private static <T extends Comparable<T>> int partition(T[] array, int lo, int hi) {
    int i = lo;
    int j = hi + 1;

    T pivot = array[lo];

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

  private static void swap(Comparable<?>[] array, int i, int j) {
    Comparable<?> temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
