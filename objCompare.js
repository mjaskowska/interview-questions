/***
 * What will be the output of this code and why?
 */
let obj = { a: 1 };
let objb = { a: 1 };

if ({ a: 1 } === { a: 1 }) {
  console.log("Monday");
} else if ({ a: 1 } == { a: 1 }) {
  console.log("Tuesday");
} else if (obj == { a: 1 }) {
  console.log("Wednesday");
} else if (obj == objb) {
  console.log("Thursday");
} else if (Object.is(obj, objb)) {
  console.log("Friday");
} else {
  console.log("Saturday");
}

// monday: no - those two objects are stored in a different place in memory
// tuesday: no - we can compare two numbers, strings etc but not two objects, it will return false
// wednesday: different objects, the fact they're objects it means that they're not the same object
// thursday: different objects - same as wednesday
// friday: same as thursday

// to compare objects we have to find out if the objects are the same type, length properties, properties are the same, compare values of the properties
// OR
console.log(JSON.stringify(obj) === JSON.stringify(objb))  //true
// the order of properties in the object matters 