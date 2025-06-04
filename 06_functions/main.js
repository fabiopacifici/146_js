console.log('Functions!!!');


const emailList = [
  'example1@mail.com',
  'example2@mail.com',
  'example3@mail.com',
]

// Create a variable where with a prompt we ask to the user his email address
//const userEmail = prompt('Type your email address here')
const userEmail = 'example2@mail.com'

let grantAccess = false;
console.log(emailList, userEmail);

// Loop over the list to find if the user email is included
for (let i = 0; i < emailList.length; i++) {
  // get the item for the current iteration
  const currentEmail = emailList[i]
  // if the user email is found we can stop the loop
  if (currentEmail === userEmail) {
    // i found the user
    grantAccess = true
    // can stop the loop
    break
  }


}

console.log(grantAccess);

// if the user can access we print a message
if (grantAccess) {
  console.log('Welcome to the party');

} else {
  console.log('Go home');

}

/* Party n.2  */

const emailList_party_2 = [
  'example1@mail.com',
  'example2@mail.com',
  'example3@mail.com',
]

const userEmail_party_2 = 'example2@mail.com'

let grantAccess_party_2 = false;
console.log(emailList_party_2, userEmail_party_2);

// Loop over the list to find if the user email is included
for (let i = 0; i < emailList_party_2.length; i++) {
  // get the item for the current iteration
  const currentEmail = emailList_party_2[i]
  // if the user email is found we can stop the loop
  if (currentEmail === userEmail_party_2) {
    // i found the user
    grantAccess_party_2 = true
    // can stop the loop
    break
  }


}

// if the user can access we print a message
if (grantAccess_party_2) {
  console.log('Welcome to the after party ');

} else {
  console.log('Go home');

}

/* 

Party 3

*/

const emailList_party_3 = [
  'example1@mail.com',
  'example2@mail.com',
  'example3@mail.com',
]

const userEmail_party_3 = 'example2@mail.com'

let grantAccess_party_3 = false;
console.log(emailList_party_3, userEmail_party_3);

// Loop over the list to find if the user email is included
for (let i = 0; i < emailList_party_3.length; i++) {
  // get the item for the current iteration
  const currentEmail = emailList_party_3[i]
  // if the user email is found we can stop the loop
  if (currentEmail === userEmail_party_3) {
    // i found the user
    grantAccess_party_3 = true
    // can stop the loop
    break
  }

}

// if the user can access we print a message
if (grantAccess_party_3) {
  console.log('Welcome to the after party ');

} else {
  console.log('Go home');

}


/* 
Functions syntax 
-> function declaration
- function expression


Function declararion 
- function keyword
- function name
- () or (param1, param2, param3 etc.)
- {// code here}

*/

// Function declaration for logHello
function logHello() {
  console.log('Hello');
}

// Function invokation for the logHello
logHello()

// function declaration for the funciton alertHello
function alertHello() {
  alert('Hello')
}
// invoke the function
//alertHello()

// function declaration for the funciton alertHello
function printHello() {
  document.writeln('Hello')
}
// invoke the function
printHello()

// Create a function that sums two numbers
function sum(num1, num2) {
  console.log(num1 + num2);
}
// invoke the function when there are parameters.
// Give a value to the arguments
sum(10, 30)

// create a function that subtracts two numbers
function subtraction(num1, num2) {
  const result = num1 - num2
  console.log(result);
}

// invoca la funzione e passa gli argomenti
subtraction(20, 100)
subtraction(50, 5) //45
const first_number = 100
const second_number = 300
subtraction(first_number, second_number)

// loggo randopm directly
console.log(Math.random());
// put random as is in the glocal scope
Math.random()
3
'Ciao'




/* 📌 Return a value from a function (make a variable accessible from the outside by returning it) */

function multiply(num1, num2) {
  // Function scope
  const result = num1 * num2

  //console.log(result);
  return result

}
//console.log(result); // Reference Error

multiply(10, 50) // 500
// log the function that returs a value
console.log(multiply(10, 50));
// save the result into a variable and then log it
const result = multiply(50, 2)
console.log(result);


// Log a function without return
console.log(sum(10, 3));



// 📌 Self contained block of code

// Global variable for function are evil 😈😈
/* let firstName = 'fabio'

function greetUser() {

  console.log(firstName);


}

greetUser()





firstName = 'Mario'

greetUser() */

function greetUser(username) {
  console.log(`Hi there ${username}`);
}

greetUser('Fabio')


// 1000k loc

greetUser('Mario')


// 📌 Function declaration are hoisted

calcAge()


function calcAge() {
  console.log('Calculate an age');

}

calcAge()