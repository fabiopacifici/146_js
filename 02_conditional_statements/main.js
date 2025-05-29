console.log('it works');
/*

📌 Conditional statements

syntax:
- if
- (condition)
- { // your code here }

// if statement
if (condition) {

  // your code here

}

// if else statement

if (condition) {

  // your code here

} else {

 // the code to run here

 }



 // if/elseif/else

 if (condizione) {

 // blocco di istruzioni 1

} else if (altra condizione ) {

 // blocco di istruzioni 2

} else {

 // blocco di istruzioni 3

}



*/


/*
// example 1
if (true) {

  // your code here
  console.log('inside the if block');

}

*/


/*
if (false) {
  // run if condition is true

} else {
  console.log('Inside the else block');

}

console.log('Outside of the if block'); */


// RElational operators

/* 3
'3'
console.log(3, typeof 3);
console.log('3', typeof '3');


const x = 3

console.log(x === '3'); */

const x = 12


// 12 < 10? false
// 12 > 10? true
if (x > 10) {
  console.log('x is more than 10', x);

} else {
  console.log('x is not more than 10');
}



// Operatori logici 

const isAvailable = true
const y = 18



// true AND 18 > 18? false
if (isAvailable && y > 18) {
  console.log('This is available');

} else {
  console.log('inside the else block');
}


// true OR 18 > 18 
if (isAvailable || y > 18) {
  console.log('This is available');
} else {
  console.log('inside the else block');
}


console.log(y > 10); // true

console.log(!y > 10); // false


console.log(y < 10); // false

console.log(!y < 10); // true



/* Passing user input to the script */

/* const word1 = prompt('type a word');
const word2 = prompt('Type another word')

console.log(word1);
console.log(word2); */


// convert a numeric string into a number
/* const numb1 = Number(prompt('type a number'));
const numb2 = parseInt(prompt('Type another number'))

console.log(numb1);
console.log(numb2);

console.log(numb1 + numb2); */

// Math object

console.log(Math.random())
console.log(Math.floor(Math.random()));
console.log(Math.ceil(Math.random()));



/* Pari dispari */

const userChoice = 'dispari'
const userNumb = 4
const pcNumb = Math.floor(Math.random() * 9) + 1


const sum = pcNumb + userNumb
let result;


if (sum % 2 === 0) {
  result = 'pari'
} else {
  result = 'dispari'
}

console.log(userChoice, result, sum);
if (userChoice === result) {
  console.log('You win');
} else {
  console.log('you loose');

}