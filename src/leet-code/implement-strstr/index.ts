function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; ++i) {
    let numMatches = 0;
    while (
      numMatches < needle.length &&
      needle[numMatches] === haystack[i + numMatches]
    )
      ++numMatches;
    if (numMatches === needle.length) return i;
  }
  return needle.length ? -1 : 0;
}

export { strStr };
