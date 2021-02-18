// Create a function that will convert from Fahrenheit to Celsius

let fahrenheit = 0;
function convert (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
    }
    
    console.log(fahrenheit + ' degrees Fahrenheit is equal to ' + convert(fahrenheit) + ' degrees Celsius.');