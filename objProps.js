/**
 * What will be the output of the following console.log?
 */

let obj = {
    'a': 'three',
    b: 4,
    'c': "five",
    a: 3,
    'b': "four",
    "c": 'five',
    "a": "tre",
    "b": 'fyra',
    c: 5
};
console.log(obj);
// {a: 'tre', b: 'fyra', c: 5}
// because: all properties of an object here are treated as a string, either they have '' or "" or nothing
// outputs the last abc as they're reasigned