/**
 * What will the output of the following two loops be?
 */
const numbers = [1, 2, 3];
numbers[10] = 11;

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}
numbers.forEach((num, idx) => {
  console.log(idx, num);
});

// numbers = [1,2,3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 11]
// forEach loops only thorough elements that were defined so we get [1,2,3,11]