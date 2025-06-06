/* Scrivi una funzione che `accetti una stringa` e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * Counts the number of vowels in a string.
 * @param {String} str - The input string to count vowels in. 
 */
function contVowels(str) {


  // keep track of the vowels count
  let counter = 0
  // get the list of vowels
  const vowels = 'aeiou'

  // loop over the string characters
  for (let i = 0; i < str.length; i++) {
    // get the single character
    const thisChar = str[i]

    // IF vowels includes the single char
    if (vowels.includes(thisChar)) {
      counter++ // counter = counter + 1
    }
    // - increment the count of 1

  }


  //console.log('return the counter', counter);
  // returns the vowels counter
  return counter

}


// Invoca la funzione qui e stampa il risultato in console
const totalVowels = contVowels(word)
console.log(totalVowels);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)