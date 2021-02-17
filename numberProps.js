/**
 * What will the value of the three log statements be?
 */
let n1 = 111; //primitive
let n2 = new Number(123); //object
let n3 = Number(123); //primitive
n1.prop = true;
n2.prop = true;
n3.prop = true;
console.log(n1.prop); //undefined
console.log(n2.prop); //true
console.log(n3.prop); //undefined

// always using NEW we create an object. here {123}
// primitives are booleans, they don't have properties to be set