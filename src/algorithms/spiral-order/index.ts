export default function spiralOrder(
  matrix: ReadonlyArray<ReadonlyArray<any>>,
  layer: number = 0
): Array<any> {
  if (!matrix[0]) return [];

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  if (layer * 2 >= Math.min(numRows, numCols)) return [];

  const topRowIndex = layer;
  const rightColIndex = numCols - layer - 1;
  const bottomRowIndex = numRows - layer - 1;
  const leftColIndex = layer;

  const result = [];

  for (let col = leftColIndex; col < rightColIndex; ++col)
    result.push(matrix[topRowIndex][col]);
  for (let row = topRowIndex; row < bottomRowIndex; ++row)
    result.push(matrix[row][rightColIndex]);
  for (let col = rightColIndex; col > leftColIndex; --col)
    result.push(matrix[bottomRowIndex][col]);
  for (let row = bottomRowIndex; row > topRowIndex; --row)
    result.push(matrix[row][layer]);

  result.push(...spiralOrder(matrix, layer + 1));

  return result;
}
