// Create a function that will find the nth Fibonacci number using recursion

let sequence = [0, 1];

for (i = 0; i <= 20; i++) {

    sequence.push(sequence[i] + sequence[i + 1])

}


function findNum(n) {
    if (n === 0) {
        const num = 0;
        return num;
    }
    else if (n === 1) {
        const num = 1;
        return num;
    }
    else {
        const num = sequence[n - 1] + sequence[n - 2];
        return num;
    }
}
console.log(sequence)
console.log(findNum(5));

