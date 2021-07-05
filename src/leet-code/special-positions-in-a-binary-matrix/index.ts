export function numSpecial(mat: number[][]): number {
  const rows = Array(mat.length).fill(0);
  const cols = Array(mat[0].length).fill(0);
  for (let i = 0; i < rows.length; ++i)
    for (let j = 0; j < cols.length; ++j) {
      if (mat[i][j]) ++rows[i], ++cols[j];
    }
  let res = 0;
  for (let i = 0; i < rows.length; ++i)
    for (let j = 0; j < cols.length; ++j)
      if (mat[i][j] && rows[i] === 1 && cols[j] === 1) ++res;
  return res;
}
