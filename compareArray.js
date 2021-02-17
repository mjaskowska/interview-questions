
/**
 * Which of the following lines will return a true and
 * which will return false?
 */

console.log(["a", "b"] == ["a", "b"]); // FALSE arrays are objects and we can't compare two objects with ==
console.log(["a", "b"] == ["a", "b"] + []); //TRUE
// ['a','b'] == 'a,b' + ''
// 'a,b' == 'a,b'
console.log(["a", "b", "c"] == ["a", "b"] + []); //FALSE
// 'a,b,c' == 'a,b'
console.log(["a", "b"] == ["b", "a"]); //FALSE
// different order
console.log(["a", "b"] == "a,b");  //TRUE