// create an array that is prepopulated

let arr = Array.from({length: 5},n=>Math.random())

// 1st value: array.from creates an array from passed object, that object has one property of length so array will have 5 elements
// 2nd value: map function 

let arr2 = new Array(5).fill(1).map(n=>n* Math.random())

// creates a new array that is 5 elements long, all elements are 1, then map function changes the elements to be random

