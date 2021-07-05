export function numSpecial(mat: number[][]): number {
  const hasOneByRowIndex = Array(mat.length);
  const hasOneByColIndex = Array(mat[0].length);
  let result = 0;
  for (let row = 0; row < mat.length; ++row)
    for (let col = 0; col < mat[row].length; ++col) {
      if (mat[row][col]) {
        for (
          let row2 = row + 1;
          !hasOneByColIndex[col] && row2 < mat.length;
          ++row2
        )
          if (mat[row2][col]) hasOneByColIndex[col] = true;
        for (
          let col2 = col + 1;
          !hasOneByRowIndex[row] && col2 < mat[row].length;
          ++col2
        )
          if (mat[row][col2]) hasOneByRowIndex[row] = true;
        if (!hasOneByColIndex[col] && !hasOneByRowIndex[row]) ++result;
        hasOneByColIndex[col] = true;
        hasOneByRowIndex[row] = true;
      }
    }
  return result;
}
