export function numSpecial(mat: number[][]): number {
  const numOnesByRowIndex = Array(mat.length).fill(0);
  const numOnesByColIndex = Array(mat[0].length).fill(0);
  for (let i = 0; i < numOnesByRowIndex.length; ++i)
    for (let j = 0; j < numOnesByColIndex.length; ++j) {
      if (mat[i][j]) ++numOnesByRowIndex[i], ++numOnesByColIndex[j];
    }
  let res = 0;
  for (let i = 0; i < numOnesByRowIndex.length; ++i)
    if (numOnesByRowIndex[i] === 1)
      for (let j = 0; j < numOnesByColIndex.length; ++j)
        if (mat[i][j] && numOnesByColIndex[j] === 1) ++res;
  return res;
}
