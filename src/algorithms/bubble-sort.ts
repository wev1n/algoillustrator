export function bubbleSort(array: (number | undefined)[]): number[] {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] !== undefined && array[j + 1] !== undefined) {
        if (array[j]! > array[j + 1]!) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }

  return array as number[];
}
