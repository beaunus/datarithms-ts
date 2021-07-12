function isAlienSorted(words: string[], order: string): boolean {
  const positionByCharacter = order
    .split("")
    .reduce<Record<string, number>>(
      (acc, cur, index) => ({ ...acc, [cur]: index }),
      {}
    );
  for (let i = 1; i < words.length; ++i) {
    const shortestLength = Math.min(words[i].length, words[i - 1].length);
    let isLeftWordLower = false;
    for (let j = 0; !isLeftWordLower && j <= shortestLength; ++j) {
      if (
        positionByCharacter[words[i - 1][j]] < positionByCharacter[words[i][j]]
      )
        isLeftWordLower = true;
      else if (
        (!words[i][j] && words[i - 1][j]) ||
        positionByCharacter[words[i][j]] < positionByCharacter[words[i - 1][j]]
      )
        return false;
    }
  }
  return true;
}

export { isAlienSorted };
