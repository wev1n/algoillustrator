import { describe, expect, it } from "vitest";
import { quickSort } from "../../algorithms/sorting/quick-sort";

const array = [9, 2, 6, 8, 3, 5, 1, 7, 4];

describe("Quick Sort", () => {
  it("Should sort the array in ascending order", () => {
    const sortedArray = quickSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("Should sort an empty array", () => {
    const array: Array<number> = [];
    const sortedArray = quickSort(array);
    expect(sortedArray).toEqual([]);
  });
});
