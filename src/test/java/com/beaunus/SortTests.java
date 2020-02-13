package com.beaunus;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Random;

import org.junit.jupiter.api.Test;

class SortTests {

  @Test
  void sorts() {
    for (int numElements = 1; numElements < 100000; numElements *= 2) {
      Random random = new Random();
      Integer[] array = new Integer[numElements];
      for (int i = 0; i < numElements; ++i) {
        array[i] = random.nextInt();
      }

      Sort.quicksort(array);

      for (int i = 1; i < numElements; ++i) {
        assertTrue(array[i - 1] <= array[i]);
      }
    }
  }
}
