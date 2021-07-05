const valueByNumeral: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; ++i)
    result +=
      valueByNumeral[s[i]] < valueByNumeral[s[i + 1]]
        ? -valueByNumeral[s[i]]
        : valueByNumeral[s[i]];
  return result;
}

export { romanToInt };
