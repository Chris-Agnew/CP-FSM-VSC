// const getDish = (dish, country) => {
//     return dish + ' is a dish from ' + country;
// }
// console.log(getDish( 'BBQ', 'Argentina'))
// console.log(getDish( 'Pizza', 'Italy'))
// console.log(getDish( 'Poutine', 'Canada'))

// const add = (x , y) => {
//     return x + y;
// }

// const multiply = (x, y) => {
//     return x * y;
// }

// const subtract = (x , y) => {
//     return x - y;
// }

// const divide = (x , y){
//     return x / y;
// }


//// example: (3 * 2) + 3
// res1:    (5 * 6) - 5 + (8 * 5)
// res2:    ((2 - 3) * (4 * 5)) - 10 + (8 * 3)
// res3:    (6 + 8) - (5 + 5) * (8 - 5)


// let example = add(multiply(3,2), 3)

// let res1 = subtract(multiply(5,6), 5) + multiply(8,5)

// let res2 = undefined

// let res3 = multiply(subtract(add(6,8), add(5,5), 3))
// 
// console.log(res1)
// console.log((5 * 6) - 5 + (8 * 5))

// console.log(res2)
// console.log((2 - 3) * (4 * 5)) - 10 + (8 * 3)

// console.log(res3)
// console.log((6 + 8) - (5 + 5) * (8 - 5))

// const findMax = (array) => {
//     let max = 0;
//     for (num of array) {
//         if (num > max){
//             max = num;
//         } 
//     }
//     return max
// }

// console.log(findMax([1,5,50,75,1337,12,24,31415,432]));

// todo write function called sumPrimes. Takes in N. find all prime numbers up to n and add them all together
// const isPrime = (n) =>{
//    for (let i = 2; i < n; i++) {
//      if (n % i === 0){
//        return false;
//      }
//    }
//    return true
// }



// const sumPrimes = (n) => {
//     let sum = 0;
//     let array = [];
//     for (let j = 2; j < n; j++) {
//         if(isPrime(n)){
//           sum += n
       
//     }
//   }
//   return sum
// }
// console.log(sumPrimes(17))

// const convertToFarenheit = (num) => {
//     return num * 1.8 + 32
// }

// console.log(convertToFarenheit(10))

// const addArray = (array) => {
//     let sum = 0;
//     for (num of array) {
//         sum += num
//     }
//     return sum
// }

// console.log(addArray([1,2,3]))
// let array = []
// function getPrimes(max) {
//     for (let i = 2; i < max; i++){
//         if (max % i == 0){
//             return false
//         }else{
//             )
//         }
//     } 
//   }
//   console.log(array)

// const reverse = (str) => {
//     let reverseString = '';
//     for (let i = str.length - 1; i>=0; i--){
//         reverseString += str[i]
//     }
//     return reverseString
// }

// console.log(reverse('fishes'))

// const diff = (array1, array2) => {
//     const array3 = array1.map(x =>x)
//     return array3
//   }

//   console.log(diff([1,2,3], [4,5,6]))

// let citiesInTheWorld = [
//   ['Amsterdam', 'The Netherlands'], 
//   ['Moscow', 'Russia'],
//   ['Los Angeles', 'The United States'], 
//   ['Seoul', 'Korea'], 
//   ['Jakarta', 'Indonesia']
// ];



// let citiesToObject = (array) => {
//   let citiesObject = {};
//   for (let i = 0; i < array.length; i++){
//      citiesObject[array[i][0]] = array[i][1];
//   }
//   return citiesObject
// }

// console.log(citiesToObject(citiesInTheWorld))

// let array = [0, 1, 'hello', '*&^', false, 2, undefined, '', 3, null, 23, 109];
// const invalid = array =>{
//   let newArray = [];

//   for (let i = 0; i < array.length; i++){
//     if (array[i]){
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;

// }

// console.log(invalid(array))

// const nameTimesNum = (name,num) => {
//   if (num == 1){
//     return name
//   }else{
//     console.log(name) 
//     return nameTimesNum(name, num - 1)
//   }
// }

// nameTimesNum('Chris',10)

// // todo sum diagonals and subtract

// let test = [11,2,4,4,5,6,10,8,-12]

// const diagonals  = (array) => {
//   let leftSum = 0;
//   let rightSum = 0;
//  for (let i = 0; i < array.length; i++){
//    if(i == 0 || i == 8){
//     leftSum += array[i]
//    }else if(i == 2 || i == 6){
//      rightSum += array[i]
//    }else if(i == 4 ){
//      leftSum += array[i]
//      rightSum += array[i]
//    }
//   } 
//   console.log('left sum is ' + leftSum)
//   console.log('right sum is ' + rightSum)
//   return Math.abs(leftSum - rightSum)
// }
// console.log(diagonals(test))


// // Todo Fib recursive function

// const fib = (n) => {
//   if (n <= 1){
//     return n;
//   }else{
//     return fib(n - 1) + fib(n - 2);
//   }+69
// }

// const fibTern = (n) =>{
// return n <= 1 ? n : fibTern(n - 2) + fibTern(n - 1);

// }

// const getFactorial = (n) => {
//   if (n == 1){
//     return 1
//   }else{
//     return n * getFactorial(n-1)
//   }
// }

// console.log(getFactorial(5))

// const isEven = (num) => {
//   if (num==0){
//     console.log('even')
//   }else if (num == 1){
//     console.log('odd')
//   }else{
//     isEven(num-2)
//   }
// }

// isEven(6)
// isEven(7)

// let add = [7,2,3,4,5,6];

// const sumArray = (array) =>{
  
//   if (array.length == 1){
//     return array[0];
//   }else{
//     console.log(array)
//     return  array.pop() + sumArray(array);
  
//   }
// }

// console.log(sumArray(add)) 

// let array1 = [1,2,3,4,5,6];
// let array2 = [5,6,7,8,9,10];


// const unique = (array1, array2) => {
//   let array3 = [];
//   let unique1;
//   let unique2;
  
//   for (let i = 0; i < array1.length; i++){
//     let unique1 = array1[i];
//     console.log(unique1)
//   }
//   for(let j = 0; j < array2.length; j++){
//       let unique2 = array2[j];
//       console.log(unique2)
//   }

//   if (unique1 != unique2){
//     array3.push();
    
//   }
//   return array3
// }


// console.log(unique(array1, array2));

let array = [1,2,3, 4, 5, 5, 6, 3]

const duplicate = (array) => {
  const remove = array.filter((item, index) =>array.indexOf(item) === index);
  return remove
}

console.log(duplicate(array))


// const calcGeometry = (radius) => {
//   const getCircumference = () => {
//     return 2 * Math.PI * radius
//   }
//   const getArea = () => {
//     return Math.PI * radius**2
//   }
  
// return 'The Circumference is ' + getCircumference().toFixed(2) + ' and the area is ' + getArea().toFixed(2)
  
// }

// console.log(calcGeometry(17))