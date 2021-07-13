function strStr(haystack: string, needle: string): number {
  const m = haystack.length;
  const n = needle.length;
  if (!n) {
    return 0;
  }
  const lps = kmpProcess(needle);
  for (let i = 0, j = 0; i < m; ) {
    if (haystack[i] == needle[j]) {
      i++, j++;
    }
    if (j == n) {
      return i - j;
    }
    if (i < m && haystack[i] != needle[j]) {
      j ? (j = lps[j - 1]) : i++;
    }
  }
  return -1;
}

function kmpProcess(needle: string): number[] {
  const n = needle.length;
  const lps = Array(n).fill(0);
  for (let i = 1, len = 0; i < n; ) {
    if (needle[i] == needle[len]) {
      lps[i++] = ++len;
    } else if (len) {
      len = lps[len - 1];
    } else {
      lps[i++] = 0;
    }
  }
  return lps;
}

export { strStr };
