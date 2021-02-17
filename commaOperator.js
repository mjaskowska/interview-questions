
/**
 * What will be the value stored in the variable n?
 *
 */

let n = ((x = 1), (y = 2), (z = 3));

// logged: 3
// reason: it's the return value from this expression
// logging out (x=1) gives us 1
// if we have multiple expressions like that separated by comma, the last one gets returned and it's a truthy value