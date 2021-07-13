function strStr(S: string, W: string): number {
  if (!W.length) return 0;
  const T = kmpProcess(W);
  for (let j = 0, k = 0; j < S.length; )
    if (W[k] === S[j]) {
      j++, k++;
      if (k === W.length) return j - k;
    } else {
      k = T[k];
      if (k < 0) j++, k++;
    }
  return -1;
}

function kmpProcess(W: string): number[] {
  const T = Array(W.length).fill(-1);
  for (let pos = 1, cnd = 0; pos < W.length; ++pos, ++cnd)
    if (W[pos] === W[cnd]) T[pos] = T[cnd];
    else {
      T[pos] = cnd;
      while (cnd >= 0 && W[pos] !== W[cnd]) cnd = T[cnd];
    }
  return T;
}

export { strStr };
