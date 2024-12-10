export function quickSort(arr: (number | undefined)[]): (number | undefined)[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  if (pivot === undefined) {
    throw new Error("Pivot cannot be undefined");
  }

  const leftArr: number[] = [];
  const rightArr: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    if (current !== undefined) {
      if (current < pivot) {
        leftArr.push(current);
      } else {
        rightArr.push(current);
      }
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
