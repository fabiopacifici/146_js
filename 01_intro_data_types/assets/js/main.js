// this is a js comment
const mySuperSecretVariable = "Hello World";
//Data types 
// textual strings

// strings
"fabio"
'pacific'

// numeric strings
"10"


// numbers

10

20


/* Console log */

// dot notation
// console = object 
// log = method
console.log("fabio");
console.log("pacific");
console.log("10");
console.log(10);
console.log(20);


console.log(mySuperSecretVariable);


/* 📌 Variables  */


// type error: firstName not defined
//console.log(firstName)

// camelCase
const fistName = "Fabio";
let last_name = "Pacific";

// log the variables

console.log(fistName);
console.log(last_name);

// Variables operations

// With const you MUST initialize a variable
// declaration and initialization of a variable
const userName = 'Mario';
console.log(userName); // Mario


//const age; // TypeError: Missing initializer in const declaration

const age = 30; // initialization of a variable
console.log(age); // 30


console.log(mySuperSecretVariable);


// declaration of a variable
let city;
console.log(city); // undefined
// ....

// initialization of the city variable
city = "Rome"; // initialization of a variable

console.log(city); // Rome


//log multiple variables in one line
console.log('fabio', city, age, userName, fistName, last_name); // fabio Rome 30 Mario Fabio Pacific


let laptop = "MacBook Pro";
console.log(laptop); // MacBook Pro

let laptopPrice;
console.log(laptopPrice); // undefined

// sono pronto a dare un valore alla variabile laptopPrice
laptopPrice = 2000; // initialization of a variable

// from not on the variable laptopPrice has a value
console.log(laptopPrice); // 2000


// 👉 const cannot be reassigned

const laptopBrand = "Apple";

// reassignment of a const variable
//laptopBrand = "Dell"; // TypeError: Assignment to constant variable.


// 👉 let can be reassigned


let laptopModel = "MacBook Pro 16-inch";
console.log(laptopModel); // MacBook Pro 16-inch



laptopModel = "MacBook Pro 14-inch"; // reassignment of a let variable`
console.log(laptopModel); // MacBook Pro 14-inch




// dichiarazione variabile
let miaStringa;

// assegnazione
miaStringa = 'ciao';

// // utilizzo/richiamo
console.log(miaStringa); // ciao

// assegnazione
miaStringa = 'arrivederci';

// utilizzo/richiamo
console.log(miaStringa); // arrivederci



// 👉 hoisting
// Const and Let are not hoisted

var myVariable3; // hoisting, var is hoisted

//console.log(myVariable); // type error: myVariable is not defined
//console.log(myVariable2); // type error: myVariable2 is not defined
console.log(myVariable3); // undefined, because var is hoisted



// declare and initialize variables
const myVariable = "Hello World";
let myVariable2 = "Hello World 2";
var myVariable3 = "Hello World 3"; // var is hoisted


console.log(myVariable, myVariable2); // Hello World Hello World 2
console.log(myVariable3); // Hello World 3




// 👉 var, let, const


//console.log("myVariable:", myUserName); // type error: myUserName is not defined


let myUserName = "Fabio";
myUserName = 12
console.log(myUserName);




let myAge;

console.log("myAge:", myAge); // undefined, because let is not hoisted



// 📌 String concatenation

// contatenation without spaces
const myLongString = "hello" + 'world'

console.log(myLongString); // helloworld



// concatenation with spaces

const myLongStringWithSpaces = "hello" + ' ' + 'world';
console.log(myLongStringWithSpaces); // hello world


console.log('2' + 2); // 22
console.log('2' + '2'); // 22



// contatenation with variables

const myFullName = 'My full name is: ' + fistName + ' ' + last_name;

console.log(myFullName); // Fabio Pacific


// template literals (ES6+)

console.log('My full name is');



console.log(`
  My full name is:
   ${fistName} 
   ${last_name}
   `);


const sentence = `
   My full name is:
    ${fistName} 
    ${last_name}
    `

const sentence2 = 'My full name is: ' + fistName + ' ' + last_name;

console.log(sentence);




// 📌 Numbers
console.log(2 + 2); // 4


const classString = "Fabio Claudio"
const anotherString = "Fabio" + " " + "Claudio"

const anotherone = 'Fabio'



// Math operations
// addizione, con il segno +
let somma = 4 + 4;
console.log(somma); // 8

// sottrazione, con il segno -
let sottr = somma - 3;
console.log(sottr); // 5


// divisione, con il segno
let divisione = somma / 2;
console.log(divisione); // 4


// moltiplicazione, con il segno*
let molt = sottr * 2;
console.log(molt); // 10



// 📌 Method and properties of Strings and numbers


molt.toString(); // convert number to string
console.log(molt.toString()); // "10"


console.log(fistName.length); // 5, length of the string
console.log(fistName.toUpperCase()); // FABIO
console.log(fistName.toLowerCase()); // fabio




console.log(sentence);

sentence.length;
