
/**
 * What will the output from the console.log be and why?
 */
let box = {};
let bag = {
  prop: "bag",
  can: "box"
};
let can = {
  prop: "can",
  bag: "box"
};
box[bag] = "Monday"; // box[{prop: 'bag', can: 'box'}] ==> (typeOf) box[ '[Object object]' ] ="monday"
box[can] = "Tuesday"; //box[ '[Object object]' ] ="tuesday"

console.log(box[bag]); //box['[Object object]']

// object keys are always going to be strings!!

