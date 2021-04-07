// let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArray =[];


// for (let i = array.length - 1; i >= 0; i--){
//   newArray.push(array[i])
// }

// console.log(newArray)

// let string = ''

// for (let i = 0; i < array.length; i++){
//     string = string + array[i]
// }
// console.log(string)

// let array = [[1, 2, '#'], ['#', 16, 32], [64, '#', 256], [512, 1024, '#'], [4096, '#', 16384]];
// let index = 0

// for (let i = 0; i < array.length; i++){
//     for (let j = 0; j < array[i].length; j++){
//         if (array[i][j] == '#'){
//            array[i][j] = 2 ** index;
            
//         }
//         index++;
//     }
     
// }
// console.log(array)


// let book1 = {
//     title: '12 Rules for Life: An antidote to Chaos',
//     author: 'Jordan B Peterson',
//     genre:  'Non-fiction',
//     store: 'Audible'
// }, book2 = {
//     title: 'Mental Game of Poker',
//     author: 'Jared Tendler',
//     genre:  'Non-fiction',
//     store: 'Audible'
// }, book3 = {
//     title: 'Atomic Habits',
// author: 'James Clear',
// genre:  'Non-fiction',
// store: 'Audible'
// }

// let userList = [
//     {
//         id: 001,
//         make: 'ford',
//         model: 'fiesta',
//         color: 'purple'

// }]

// userList[1] = {
//     id: 002,
//     make: 'ford',
//     model: 'fusion',
//     color: 'grey'
// }

// console.log(userList)


// let netflixShows = [
//     {
//       title: 'Stranger Things', 
//       rating: 4, 
//     }, 
//     { 
//       title: 'Cobra Kai', 
//       rating: 2,
//     }, 
//     {
//       title: 'Queen\'s Gambit', 
//       rating: 5,
//     }, 
//     {
//       title: 'Locke & Key', 
//       rating: 4,
//     },
//     {
//       title: 'Big Mouth',
//       rating: 3,
//     }, 
//     {
//       title: 'Glee',
//       rating: 2,
      
//     }
//   ];

//   for (let i = 0; i < netflixShows.length; i++){
//       if(netflixShows[i].rating >=3){
//           console.log('this show ' + netflixShows[i].title + ' is awesome')
//       }
//   }

//   for (let i = 0; i < netflixShows.length; i++){
//     netflixShows[i].director = 'john'
//         console.log(netflixShows[i].director)
//     }



// const listOfMovies = {
//         account: 'Jessy', 
//         genres: ['Thriller', 'Drama', 'Anime', 'Comedy','Romance', 'Horror', 'Documentaries'],
//         favourites: [
//           {
//             title: 'Little Miss Sunshine',
//             genre: 'Comedy',
//             year: 2006
//           }, 
//           {
//             title: 'Howl\'s Moving Castle',
//             genre: 'Japanese animation',
//             year: 2004
//           }, 
//           { 
//             title: 'Aquaman',
//             genre: 'Action',
//             year: 2019
//           },       
//           {
//             title: 'The Shape of Water',
//             genre: 'Drama',
//             year: 2017
//           },
//           { 
//             title: 'Your name',
//             genre: 'Japanese animation',
//             year: 2017
//           },
//           { 
//             title: 'Inception',
//             genre: 'Action',
//             year: 2010
//           }, 
//         ]
//     }
// let secondMovie = listOfMovies.favourites[1].title
// console.log(secondMovie)

// let danielsList = {}

// danielsList.favorites = listOfMovies.favourites[2]

// console.log(danielsList)



// let arrayGenre = [];
// let arrayFavourites = [];
// let arrayMissing = [];

// for (let i = 0; i < listOfMovies.genres.length; i++){
// arrayGenre.push(listOfMovies.genres[i])}
// for (let j = 0; j < listOfMovies.favourites.length; j++){
//       arrayFavourites.push(listOfMovies.favourites[j].genre )
//     }
// if (arrayGenre != arrayFavourites){
//   const missing = arrayGenre.filter(genre => !arrayFavourites.includes(genre));
//   arrayMissing.push(missing);

// }
//     // console.log(arrayGenre);
//     // console.log(arrayFavourites);
//     console.log(arrayMissing);


  
  // console.log(array)

  // function fiftyThirtyTwenty(income){
  //   return {
  //   Needs : income * 0.5,
  //   Wants : income * 0.3,
  //   Savings : income * 0.2
  //   }
  // }

  // console.log(fiftyThirtyTwenty(50000))

let crazyArray = [
  'Elon Musk',
  'Bootcamp',
  3,
  5,
  { a:2, b: 8},
  '#',
  { language: 'Japanese', greeting: '#'},
  767,
  34,
  '#', 
  ['tomato', '#', 'pineapple'],
  { sports: '#'}
];

function replaceHash(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] == '#'){
      array[i] = 'Hash'
    }
    for (let j = 0; j < array[i].length; j++){
     if (array[i][j] == '#'){
        array[i][j] = 'Boom'
    }; 
    }; 

    if (typeof array[i] === 'object'){
      Object.keys(array[i]).forEach((key)=>{
        if (array[i][key] === '#'){
          array[i][key] = 'Yeah'
        }
      });
      }
  }
  return array
}

console.log(replaceHash(crazyArray))

// function convertArray(obj){
//   return Object.entries(obj)
//   if (obj = {}){
//     return []
//   }
// }

// console.log(convertArray({ first: 'Chris',
// last: 'Agnew',
// middle: 'SA'}));

// console.log(convertArray({}));