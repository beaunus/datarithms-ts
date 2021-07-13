function strStr(haystack: string, needle: string): number {
  if (!needle.length) return 0;
  const lps = kmpProcess(needle);
  for (let i = 0, j = 0; i < haystack.length; ) {
    if (haystack[i] === needle[j]) i++, j++;
    if (j === needle.length) return i - j;
    if (i < haystack.length && haystack[i] != needle[j])
      j ? (j = lps[j - 1]) : i++;
  }
  return -1;
}

function kmpProcess(needle: string): number[] {
  const lps = Array(needle.length).fill(0);
  for (let i = 1, len = 0; i < needle.length; )
    if (needle[i] === needle[len]) lps[i++] = ++len;
    else if (len) len = lps[len - 1];
    else lps[i++] = 0;
  return lps;
}

export { strStr };
