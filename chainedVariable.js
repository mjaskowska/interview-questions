(function f1() {
    var a = 1, b = 1;
    var x = y = 2;
})();
(function f2() {
    let j = 1, k = 1;
    let r = s = 2;
})();

// //what are the values for a, b, x, y, j, k, r, s in the global scope?
// //which of these variables will exist on the window/global object?
console.log(global.s);

// ----------------------
// a x j r don't exist in global scope, only in functions so console.log doesnt have access to them - ReferenceError
//  because of the comma, b is also declared as var (same with k - j and k are lets)
// y = 2 - it exists in global scope (multiple assignment assigns let/var to r and x, not y or s )
// y and s are created in global scope
 