package com.beaunus;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;
import java.util.Random;
import java.util.stream.Stream;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

class SortTests {

  @TestFactory
  Stream<DynamicTest> testSortingMethods() throws ClassNotFoundException {
    final Class<?> c = Class.forName("com.beaunus.Sort");
    return Arrays.stream(c.getDeclaredMethods())
        .filter(method -> Modifier.isPublic(method.getModifiers()))
        .map(method -> dynamicTest(method.getName(), () -> testSortMethod(method)));
  }

  private static void testSortMethod(final Method method)
      throws IllegalAccessException, IllegalArgumentException, InvocationTargetException {
    for (int numElements = 1; numElements < 1000; numElements *= 2) {
      final Random random = new Random();
      final Integer[] array = Arrays.stream(new Integer[numElements])
          .map(number -> random.nextInt()).toArray(Integer[]::new);

      method.invoke(null, new Object[] {array});

      for (int i = 1; i < numElements; ++i) {
        assertTrue(array[i] >= array[i - 1],
            "Each element should be greater than or equal to its predecessor");
      }
    }
  }

}
