import { Matrix } from "../..";

/**
 * Traverse the given matrix in spiral order.
 *
 * @param matrix 2-d array of elements to traverse in spiral order
 * @param [layer = 0] layer to traverse (0 is outermost layer)
 *
 * @example
 *
 * ```typescript
 * // Returns [1,2,3,6,9,8,7,4,5]
 * spiralOrder([
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ])
 * ```
 */
export default function spiralOrder(matrix: Matrix, layer = 0): Array<unknown> {
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
