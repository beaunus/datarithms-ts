package com.beaunus;

import java.util.Random;

public class Sort {

  public static <T extends Comparable<T>> void quicksort(T[] array) {
    quicksort(array, 0, array.length - 1);
  }

  private static <T extends Comparable<T>> void quicksort(T[] array, int lo, int hi) {
    if (hi <= lo) {
      return;
    }
    Random random = new Random();
    int pivotIndex = lo + random.nextInt(hi - lo);
    swap(array, lo, pivotIndex);
    int p = partition(array, lo, hi);
    quicksort(array, lo, p - 1);
    quicksort(array, p + 1, hi);
  }

  private static <T extends Comparable<T>> int partition(T[] array, int lo, int hi) {
    int i = lo;
    int j = hi + 1;
    T v = array[lo];
    
    while (true) {
      while (array[++i].compareTo(v) < 0) {
        if (i == hi) {
          break;
        }
      }
      while (v.compareTo(array[--j]) < 0) {
        if (j == lo) {
          break;
        }
      }
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