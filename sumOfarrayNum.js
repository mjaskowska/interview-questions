// Calculate the sum of numbers in an array of numbers

function calculateSum(arr)
{
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    
    return sum;
}

let arr = [-1, 4, 56, 240, -54];

console.log(calculateSum(arr)); 