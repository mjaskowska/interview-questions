// Create a function that receives an array of numbers and 
// returns an array containing only the positive numbers

function returnPositiveNums(arr) {
    arrPositive = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrPositive.push(arr[i]);
        }
    }
    return arrPositive;
}
const arr = [-1, 0, 5, 6];
console.log(returnPositiveNums(arr));