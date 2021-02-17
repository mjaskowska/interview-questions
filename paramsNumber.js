// determine if the function received the number of params that is expected

let f = function (a, b) {
  if (arguments.length === f.length) {
    console.log("match");
  } else {
    console.log("no match");
  }
};
f(1);
// no match
f(1, 2);
// match
f(1, 2, 3);
// no match