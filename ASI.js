// ASI - automatic semicolon injection

// what happens when it runs and how to fix it? => add semicolon
//  a is not defined, ReferenceError


let a = {
  a: 123,
};
// [a].forEach(function (x) {
//   console.log(x);
// });

// without semicolon it's a 'valid' syntax of {}[].forEach() which fails in this example
// console.log(a['a'])