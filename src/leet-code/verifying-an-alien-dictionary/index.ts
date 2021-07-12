function isAlienSorted(words: string[], order: string): boolean {
  const positionByChar = order
    .split("")
    .reduce<Record<string, number>>(
      (acc, cur, index) => ({ ...acc, [cur]: index }),
      {}
    );
  for (let i = 1; i < words.length; ++i) {
    const word = words[i];
    const prevWord = words[i - 1];
    const shortestLength = Math.min(word.length, prevWord.length);
    for (let j = 0; j <= shortestLength; ++j)
      if (positionByChar[prevWord[j]] < positionByChar[word[j]]) break;
      else if (
        (!word[j] && prevWord[j]) ||
        positionByChar[word[j]] < positionByChar[prevWord[j]]
      )
        return false;
  }
  return true;
}

export { isAlienSorted };
