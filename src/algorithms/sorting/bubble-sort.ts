export function bubbleSort(array: Array<number | undefined>): Array<number> {
  let n = array.length;
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] !== undefined && array[i + 1] !== undefined) {
        if (array[i]! > array[i + 1]!) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    }
    n--;
  } while (swapped);

  return array as Array<number>;
}
