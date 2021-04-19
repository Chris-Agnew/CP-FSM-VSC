// const item = [
//     ["phone", "blue", "pixel"],
//     ["computer", "silver", "lenovo"],
//     ["phone", "gold", "iphone"],
//   ],
//   ruleKey = "type",
//   ruleValue = "phone";

// const countMatches = (item, ruleKey, ruleValue) => {
//   let num = 0;
//   for (let i = 0; i < item.length; i++) {
//     if (ruleKey == "type" && item[i][0].includes(ruleValue)) {
//       num++;
//     } else if (ruleKey == "color" && item[i][1].includes(ruleValue)) {
//       num++;
//     } else if (ruleKey == "name" && item[i][2].includes(ruleValue)) {
//       num++;
//     }
//   }
//   return num;
// };

// console.log(countMatches(item, ruleKey, ruleValue));

// const nums = [1, 1, 1, 1];
// const numIdenticalPairs = (nums) => {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] == nums[j] && i < j) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(numIdenticalPairs(nums));
// todo Output: [[1,0,0],[0,1,0],[1,1,1]]
// const image = [
//   [1, 1, 0],
//   [1, 0, 1],
//   [0, 0, 0],
// ];
// const flipAndInvertImage = (image) => {
//   for (let i = 0; i < image.length; i++) {
//     for (let j = 0; j < image.length; j++) {
//       image[0].reverse([i]);
//       if (image[i][j] == 1) {
//         image[i][j] -= 1;
//       } else if (image[i][j] == 0) {
//         image[i][j] += 1;
//       }
//     }
//   }
//   return image;
// };

// console.log(flipAndInvertImage(image));

// const arr = [3, 0, 1, 1, 9, 7],
//   a = 7,
//   b = 2,
//   c = 3;
// const countGoodTriplets = (arr, a, b, c) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       for (let k = j + 1; k < arr.length - 2; k++) {
//         if (
//           i < j < k < arr.length &&
//           Math.abs(arr[i] - arr[j]) <= a &&
//           Math.abs(arr[j] - arr[k]) <= b &&
//           Math.abs(arr[i] - arr[k]) <= c
//         ) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// };

// console.log(countGoodTriplets(arr, a, b, c));

const canPlaceFlowers = (flowerbed, n) => {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      n--;
      i++;
    }
  }
  return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
