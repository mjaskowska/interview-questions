// Print the first 10 Fibonacci numbers 
let sequence = [0,1];

for (i = 0; i <= 8; i++) {

    sequence.push(sequence[i] + sequence[i + 1])

}
sequence.splice(1,1);
console.log(sequence);


