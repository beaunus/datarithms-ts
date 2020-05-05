package com.beaunus;

import java.math.BigInteger;

public class Math {
  /**
   * Return the factorial of the given int.
   * 
   * @param n n
   * @return
   */
  public static BigInteger factorial(final int n) {
    BigInteger result = BigInteger.ONE;

    for (int i = 1; i <= n; ++i)
      result = result.multiply(new BigInteger(String.valueOf(i)));

    return result;
  }
}
