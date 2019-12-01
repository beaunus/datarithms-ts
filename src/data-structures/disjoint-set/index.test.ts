import DisjointSet from "./";
import * as _ from "lodash";

describe("DisjointSet", () => {
  const NUM_ELEMENTS = _.random(10, 20);
  let disjointSet: DisjointSet;

  beforeEach(() => {
    disjointSet = new DisjointSet(NUM_ELEMENTS);
  });

  it("each element should be its own parent if no union operations have been executed", () => {
    for (let i = 0; i < NUM_ELEMENTS; ++i) expect(disjointSet.find(i)).toBe(i);
  });

  it("elements that have been joined by a union operation should share a unique root", () => {
    const allElements = _.shuffle(_.range(NUM_ELEMENTS));
    const groups: Array<Array<number>> = [];

    while (allElements.length > 1) {
      const numElementsInGroup = _.random(1, allElements.length / 2);
      const newGroup = allElements.splice(0, numElementsInGroup);
      groups.push(newGroup);
    }

    groups.forEach(group => {
      for (let i = 1; i < group.length; ++i) {
        const elementToJoin = group[i];
        const randomIndex = _.random(0, i - 1);
        const randomOtherElement = group[randomIndex];
        disjointSet.union(elementToJoin, randomOtherElement);
      }
    });

    const rootsSeenSoFar = new Set();

    groups.forEach(group => {
      const thisGroupRoot = disjointSet.find(group[0]);
      expect(rootsSeenSoFar).not.toContain(thisGroupRoot);
      rootsSeenSoFar.add(thisGroupRoot);
      group
        .slice(1)
        .forEach(element =>
          expect(disjointSet.find(element)).toBe(thisGroupRoot)
        );
    });
  });
});
