
/**
 * Variable Scope
 * What will be the output of the three log statements
 * and in what order?
 */
(() => {
    let one, two; //two=321 from catch
    try {
      throw new Error(321); //error message
    } catch (one) {
      (one = 123), (two = 321); //one is a local variable passed as an argument, doesn't exist in global scope
      console.log(one); //123
    }
    console.log(one); //undefined
    console.log(two); //321
  })();


