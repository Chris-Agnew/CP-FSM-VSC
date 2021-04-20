let nums = [1, 3, 6, 14, 20, 21, 65, 75, 82, 102, 130, 145, 175];
let target = 145;

const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] == target) {
      return middle;
    } else if (array[middle] < target) {
      start = middle + 1;
    } else if (array[middle] > target) {
      end = middle - 1;
    }
  }
  return false;
};

console.log(binarySearch(nums, target));

// const binarySearch = (array, target, start = 0, end = array.length - 1) => {
//   if (end < start) {
//     return false;
//   }
//   let middleIndex = Math.floor((start + end) / 2);
//   if (array[middleIndex] === target) {
//     return `${target} is found`;
//   }
//   if (array[middleIndex] < target) {
//     return binarySearch(array, target, middleIndex + 1, end);
//   }
//   if (array[middleIndex] > target) {
//     return binarySearch(array, target, start, middleIndex - 1);
//   }
// };

// console.log(binarySearch(nums, target));
