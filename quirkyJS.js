/**
 * Quirky operators and precedence in JavaScript
 * What is the output of these three lines and why?
 */

//  + tries to convert it to a number
//  ! converts to boolean and flips the sign

let first = (!+[] * []);
// +[] -> 0 
// !+[] -> true
// true * []
// 1 * 0 => 0


let second = (!+[] + [] * []);
// true + [] * []
// true + 0 * 0
// true + 0
// 1+ 0 => 1


let third = (!+[] + [] + ![]).length;
// true + [] + false
// 'true' + '' + 'false' - strings
// 'truefalse'.length => 9


// []+[] => ''
// ![] => false
// true + [] => 'true' + ''

console.log(first);
console.log(second);
console.log(third);
console.log(!![]);