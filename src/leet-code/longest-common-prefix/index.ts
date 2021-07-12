function longestCommonPrefix(strings: string[]): string {
  const base = strings[0] ?? "";
  let longestSoFar = base.length;

  for (let i = 1; i < strings.length; ++i) {
    let numCommon = 0;
    for (
      let j = 0;
      numCommon < strings[i].length &&
      numCommon < longestSoFar &&
      strings[i][j] === base[j];
      ++j
    )
      ++numCommon;
    longestSoFar = numCommon;
  }

  return base.substring(0, longestSoFar);
}

export { longestCommonPrefix };
