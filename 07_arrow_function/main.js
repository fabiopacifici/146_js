
// Function declaration
// can be hoisted

/* console.log(sum(2, 4)) */

/* function sum(num_1, num_2) {
  return num_1 + num_2;
}

console.log(sum(1, 4)) */



// function expression
//add(10, 300) // referce error
const add = function (num_1, num_2) {
  return num_1 + num_2;
}

console.log(add(10, 100))



/* 📌 arrow 

// Syntax
1. () => {
    // your multi-line code here
  }

2. () => // your single line of code here (return e graffe omissibili)

3. single parameter (can omit the rounded parentesys): param => {
    // multi-line code
  }

4. param => // your single line of code here

5. zero or more than one parameter (rounded parentesis mandatory): (param1, param2) => { 
     // multi-line code
  }

6. (param1, param2) => // your single line of code here without return and curly brackets


*/

// standard
/* function sum(num_1, num_2) {
  return num_1 + num_2;
}
 */
// Arrow option 1
// (): mandatory
// {} + return 
/* const sum = (num_1, num_2) => {
  return num_1 + num_2;
}
 */
// Arrow option 2
const sum = (num_1, num_2) => num_1 + num_2



// standard

/* function isEven(num) {
  if (num % 2 === 0) {
    return true
  }
  return false
}
 */
// arrow function 

// option 1
/* const isEven = (num) => {
  if (num % 2 === 0) {
    return true
  }
  return false
}

isEven(20) // true */


// option 2
/* const isEven = num => {
  if (num % 2 === 0) {
    return true
  }
  return false
} */

// option 3


const isEven = num => num % 2 === 0

console.log(isEven(11)) // false

