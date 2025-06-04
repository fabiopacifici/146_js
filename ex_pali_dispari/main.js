/* 

Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/



// Chiedere all’utente di inserire una parola



// Creare una funzione per capire se la parola inserita è palindroma
/* 
function isPalindrom(word) {

  // string: split the work into an array of characters (string method) ''.split()
  const splitWordArray = word.toLowerCase().split('')
  console.log(splitWordArray);

  // array: revert the order of the array's characters [].reverse()
  const reversedWordArray = splitWordArray.reverse()
  console.log(reversedWordArray);

  // array: join all the element (characters) of the array to get the string [].join()
  console.log(reversedWordArray);
  const revWord = reversedWordArray.join('')


  if (word === revWord) {
    return true
  }
  return false

}

const word = 'umbertoi' // prompt() */


/* const splitWordArray = word.toLowerCase().split('')
console.log(splitWordArray);

const reversedWordArray = splitWordArray.reverse()
console.log(reversedWordArray);

const revWord = reversedWordArray.join('')
console.log(revWord); */

//console.log(isPalindrom(word))





// 📌 Without array,string methods

// 1. string: split the work into an array of characters (string method) ''.split()

const word = 'umbertoi' // prompt() */

/* const splittedWord = []
for (let i = 0; i < word.length; i++) {
  // get the element from the array
  const thisCharacter = word[i]
  splittedWord.push(thisCharacter)

}

console.log(splittedWord); */


/**
 * Function to split a word into an array of characters
 * @param {string} word - The word to be split
 * @returns {Array} - An array containing the characters of the word
 */
/* function splitWord(word) {

  const splittedWord = []
  for (let i = 0; i < word.length; i++) {
    // get the element from the array
    const thisCharacter = word[i]
    splittedWord.push(thisCharacter.toLowerCase())

  }

  return splittedWord

} */

//const splitWordArr = splitWord(word)


// 2. array: revert the order of the array's characters [].reverse()





/* 
const splitWordArr = ['u', 'm', 'b', 'e', 'r', 't', 'o', 'i']

const revArr = []
for (let i = splitWordArr.length - 1; i >= 0; i--) {
  // get the current element
  const thisCharacter = splitWordArr[i]
  revArr.push(thisCharacter)
}
console.log(revArr); */




/**
 * Function to reverse an array
 * @param {Array} arr - The array to be reversed
 * @returns {Array} - The reversed array
 */
/* function arrReverse(arr) {
  // function scope
  const revArr = []
  for (let i = arr.length - 1; i >= 0; i--) {


    // get the current element
    const element = arr[i]
    revArr.push(element)
  }

  return revArr

} */
// invoke

/* const revArr = arrReverse(splitWordArr) // []
console.log(revArr);
 */


// 3 array: join all the element (characters) of the array to get the string [].join()

/* let joinedString = ''
for (let i = 0; i < revArr.length; i++) {
  // get the array's element
  const element = revArr[i]

  joinedString += element

}


console.log(joinedString); */



/**
 * ## Function to join an array of characters into a string
 * Joins an array of characters into a single string.
 * - lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * - sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * 
 * ```
 * function joinString(arr) {
 *   let joinedString = ''
 *   for (let i = 0; i < arr.length; i++) {
 *     // get the array's element
 *     const element = arr[i]
 *     joinedString += element
 *   }
 *   return joinedString
 * }
 * 
 * @param {Array} arr - The array of characters to be joined
 * @returns {string} - The joined string
 */
/* function joinString(arr) {
  let joinedString = ''
  for (let i = 0; i < arr.length; i++) {
    // get the array's element
    const element = arr[i]

    joinedString += element

  }

  return joinedString
}



const joinedString = joinString(revArr)
console.log(joinedString);
 */





/* function isPalindrom(word) {

  // string: split the work into an array of characters (string method) ''.split()
  const splitArrString = splitWord(word)
  console.log(splitArrString);

  // array: revert the order of the array's characters [].reverse()
  const reversedArr = arrReverse(splitArrString)

  // array: join all the element (characters) of the array to get the string [].join()
  const revWord = joinString(reversedArr)


  if (word === revWord) {
    return true
  }
  return false

}

const anotherWord = 'ada'
console.log(isPalindrom(anotherWord)) */





/* 

Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/



const PRICE_PER_KM = 0.21




function myFunction(price) {
  const condition = true

  if (condition) {
    console.log(`The price per km is ${price}€`);

  }

}


myFunction(PRICE_PER_KM)


// global variables

if (10 > 5) {
  console.log('10 is greater than 5');

  const myVar = 'Hello World'

}

// console.log(myVar); // ReferenceError: myVar is not defined, because myVar is block scoped



a = 0; // global variable
b = "buongiorno" // global variable
var c = "ciao"; // global variable

saluta();

console.log("a is " + a); // a is 0
console.log("b is " + b); // b is buongiorno

function saluta() {
  var d = "asd"; // local variable
  console.log("a is " + a); // a is 0
  var b = a + 1; // local variable
  console.log("b is " + b); // b is 1
  console.log(c); // c is ciao
}



if (true) {
  var x = 10; // global variable
  let y = 20; // block scoped variable
  const z = 30; // block scoped constant
}

console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined