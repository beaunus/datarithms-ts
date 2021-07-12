function minOperations(logs: string[]): number {
  let result = 0;
  for (const log of logs) {
    if (log === "./") continue;
    if (log === "../") result = result ? result - 1 : 0;
    else ++result;
  }
  return Math.max(result, 0);
}

export { minOperations };
