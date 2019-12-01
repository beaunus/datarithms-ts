export default class DisjointSet {
  private parent: Array<number>;
  private rank: Int8Array;

  constructor(n: number) {
    this.parent = new Array(n);
    this.rank = new Int8Array(n);
    for (let i = 0; i < n; ++i) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x: number) {
    let root = x;
    while (this.parent[root] !== root) root = this.parent[root];

    while (this.parent[x] !== root) {
      const parent = this.parent[x];
      this.parent[x] = root;
      x = parent;
    }

    return root;
  }

  union(x: number, y: number) {
    let rootOfLargerSet = this.find(x);
    let rootOfSmallerSet = this.find(y);
    if (rootOfLargerSet === rootOfSmallerSet) return;

    if (this.rank[rootOfLargerSet] < this.rank[rootOfSmallerSet]) {
      const temp = rootOfLargerSet;
      rootOfLargerSet = rootOfSmallerSet;
      rootOfSmallerSet = temp;
    }

    this.parent[rootOfSmallerSet] = rootOfLargerSet;
    if (this.rank[rootOfLargerSet] === this.rank[rootOfSmallerSet])
      ++this.rank[rootOfLargerSet];
  }
}
