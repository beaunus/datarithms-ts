function minOperations(logs: string[]): number {
  let result = 0;
  for (const log of logs) {
    if (log[0] !== ".") ++result;
    if (log[1] === ".") result = result ? result - 1 : 0;
  }
  return Math.max(result, 0);
}

export { minOperations };
