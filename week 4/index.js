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

const sumPrimes = (n) => {
    let sum = 0;
    let array = [];
    let isPrime;
    for (let i = 2; i < n; i++) {
        if(n % 2 === 0){
            isPrime = false
        }else{
            isPrime = true
        }
    }
    if (isPrime == true) {
        array.push(n[i]);
        console.log(array)
    }
}

console.log(sumPrimes(5))


