// var and let hoisiting

// VAR - gets hoisted and assigned a value of undefined
// LET - gets hoisted but no value is assigned - ReferenceError till the point we actually define a variable

// area = undefined;
// name;
console.log("var", area);
// undefined
console.log("let", name);
// Reference Error
let name = "Bert";
let area = "geology";

// catch errors
if (area != undefined) {
  console.log("var", area);
}
try {
  console.log("let", name);
} catch (err) {
  console.log(err.name, err.message);
}
