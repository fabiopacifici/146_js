/* 

Timing functions 

// Syntax
- setTimeout(callback, ms)
- callback: a function name (without parentesis) - or an anon function
- ms: milliseconds the time that must pass before our function is executed

*/


// [option 1] With a callback function

function logWord() {
  console.log('Mandalorian');

}

function printWord() {
  document.writeln('Hi there')
}

// you can reuse the function
console.log('Ops');

/* setTimeout(logWord, 1000) */

/* for (let index = 0; index < 1000; index++) {
  const element = array[index];

}
 */

console.log('I am a syncronous code');
console.log('I am a syncronous code');
/* setTimeout(logWord, 1000) */

console.log('I am a syncronous code');
console.log('I am a syncronous code');

/* setTimeout(logWord, 2000)
 */


console.log('I am a syncronous code');
console.log('I am a syncronous code');
console.log('I am a syncronous code');



/* 
setTimeout(printWord, 1000)


 */

// With anon function
console.log('I am a syncronous code');
console.log('I am a syncronous code');
console.log('I am a syncronous code');

/* setTimeout(function () {
  console.log('Grogu');
}, 3000)
 */
console.log('I am a syncronous code');
console.log('I am a syncronous code');
console.log('I am a syncronous code');


/* 
setTimeout(function () {
  document.writeln('dfjklgdfgdkflk this is grogu')
}, 3000) */


// Width arrow anon

/* const timeoutId = setTimeout(() => {
  console.log('Hi there');

}, 2000)


console.log(timeoutId); */


/* 📌 setInterval

- setInterval(funcion_name, ms)
- function_name: name of the function that will be executed every tot ms
- ms: the time interval to repeat the execution of the funciton
- const intervalId = setInterval(funcion_name, ms) // returns the interval's id for future usage

*/

// 👉 With arrow function
// runs the function to the infinite

/* setInterval(() => {

  console.log('I am async code')

}, 500) */


// 👉 With anon function declaration
setInterval(function () {

  console.log('I am async code')

}, 5000)


// 👉 With a callback function handler
//setInterval(logWord, 2000)


