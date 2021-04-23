let array = [3, 2, 5, 8, 6, 1];

const merge = (array1, array2) => {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      sortedArr.push(array1[i]);
    }
  }
};

const mergeSort = (array) => {
  if (array.length == 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid + 1));
  let right = mergeSort(array.slice(mid + 1, array.length - 1));
};
