/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Extracts the initials from an array of names.
 * @param {Array} names 
 * @returns {Array} An array of initials.
 */
function initials(names) {

  const initialsArray = [] // local variable to store the initials (visible only inside the function)
  // loop over the array and get the current element
  for (let i = 0; i < names.length; i++) {
    const thisName = names[i]
    //console.log(thisName);
    //console.log(thisName.charAt(0));

    // push the first character inside the array
    initialsArray.push(thisName[0])

    //initialsArray.push(names[i].charAt(0))

  }

  //console.log(initialsArray);

  return initialsArray

}

// Invoca la funzione qui e stampa il risultato in console

// global variable 
const initialsArray = initials(names) // ["A", "L", "M", "A", "G", "A"]
console.log(initialsArray);

const cri = 123;


//initials(names)






//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
/* 10

const numb = 10

console.log(numb);

console.log(10); */


