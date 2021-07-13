/**
 * A disjoint-set data structure.
 *
 * Adapted from https://algs4.cs.princeton.edu/code/
 */
export default class DisjointSet {
  private _parent: Array<number>;
  private _rank: Int8Array;

  /**
   * Construct an new DisjointSet instance with the given number of elements.
   *
   * @param n
   */
  constructor(n: number) {
    this._parent = new Array(n);
    this._rank = new Int8Array(n);
    for (let i = 0; i < n; ++i) {
      this._parent[i] = i;
      this._rank[i] = 0;
    }
  }

  /**
   * Returns the identifier for the set that the given element belongs to.
   *
   * @param x
   */
  find(x: number): number {
    let root = x;
    while (this._parent[root] !== root) root = this._parent[root];

    while (this._parent[x] !== root) {
      const parent = this._parent[x];
      this._parent[x] = root;
      // eslint-disable-next-line no-param-reassign
      x = parent;
    }

    return root;
  }

  /**
   * Merges the sets containing the given elements.
   *
   * @param x
   * @param y
   */
  union(x: number, y: number): void {
    let rootOfLargerSet = this.find(x);
    let rootOfSmallerSet = this.find(y);
    if (rootOfLargerSet === rootOfSmallerSet) return;

    if (this._rank[rootOfLargerSet] < this._rank[rootOfSmallerSet]) {
      const temp = rootOfLargerSet;
      rootOfLargerSet = rootOfSmallerSet;
      rootOfSmallerSet = temp;
    }

    this._parent[rootOfSmallerSet] = rootOfLargerSet;
    if (this._rank[rootOfLargerSet] === this._rank[rootOfSmallerSet])
      ++this._rank[rootOfLargerSet];
  }
}
