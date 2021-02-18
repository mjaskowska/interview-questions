// Find the maximum number in an array of numbers

function findMax(arr) {
    let max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
arr = [-5, 75, 0];
console.log(findMax(arr));