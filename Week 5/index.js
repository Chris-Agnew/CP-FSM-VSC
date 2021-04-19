// // const countUp = (n) => {
// //     if (n == 0){
// //         return 0;
// //     }else{
// //         return n + countUp(--n)
// //     }
// // }
// // console.log(countUp(10))

// // let array = [8,7,6,5,4,3,2,1];
// // // let array = [5,7,1,2,3,10]

// // const sorted = (arr) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //       if (arr[j] < arr[i]) {
// //         let temp = arr[i];
// //         arr[i] = arr[j];
// //         arr[j] = temp;
// //       }
// //     }
// //   }
// //   return arr;
// // };

// // console.log(sorted(array));

// // todo write a function that compares two objects and returns true if they are equal and return false if // they're not

// // const object1 = {
// //   a: 5,
// //   b: 12,
// // };

// // const object2 = {
// //   a: 5,
// //   b: 12,
// // };

// const compare = (obj1, obj2) => {
//   if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // console.log(compare(object1, object2));

// // todo sort an array of JS Objects

// const library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     libraryID: 1254,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     libraryID: 4264,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];

// // sort by library ID

// library.sort((a, b) => {
//   return a.libraryID - b.libraryID;
// });

// library.forEach((id) => {
//   console.log(`'${id.title}' by: ${id.author} ID: ${id.libraryID}`);
// });

// // sort by author name

// library.sort((a, b) => {
//   let fa = a.author.toLowerCase();
//   let fb = b.author.toLowerCase();
//   if (fa < fb) {
//     return -1;
//   }
//   if (fa > fb) {
//     return 1;
//   }
//   return 0;
// });

// library.forEach((e) => {
//   console.log(`${e.author} is the author of '${e.title}'`);
// });
