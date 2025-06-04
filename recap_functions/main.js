// Functions



// Function declaration 

// function declaration without params
function logAge(){
  console.log(45);
}
// invoke the function with arguments
logAge()

// function declaration with params
/* function calcAge(year_of_birth){
  // implement the function here
  const currentYear = 2025
  const resultAge = currentYear - year_of_birth
  
  console.log(resultAge)
} */

// invoke the function with the argument
// pass the argument as a variable
//const yob = 1980
//calcAge(yob)
// pass the argument directly
//calcAge(1990)

// Function Declaration with a return

function calcAge(year_of_birth) {
  // implement the function here
  const currentYear = 2025
  //
  const resultAge = currentYear - year_of_birth

  //console.log(resultAge)
  return resultAge
}

// when you use the return you need to:
// - save the function result in a varible
// - log the invokation directly
const ageResult = calcAge(1800)
console.log(ageResult);
console.log(calcAge(1500));

// Hoisting (function declaration)


logName() // Fabio
function logName(){
  console.log('Fabio');
}
logName() // Fabio



// Function Expression with anon function

 

// Function expressio with arrow function

