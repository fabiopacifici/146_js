/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByInitials(stringsArray, char) {

  // Initialize an empty names array
  const names = []

  // loop over the array of names
  for (let i = 0; i < stringsArray.length; i++) {
    // get the single name
    const thisName = stringsArray[i]
    // get the first character of the selected name
    const thisChar = thisName.charAt(0) // thisName[0]
    //console.log(thisName, thisChar);

    // check IF the first char is equal to the char param
    if (thisChar === char) {
      // - if true: push the single name into the names array
      //console.log('found');
      names.push(thisName)

    }


  }


  // return the filtered names
  //console.log(names);
  return names



}

// Invoca la funzione qui e stampa il risultato in console
const filteredNames = filterByInitials(names, 'A') // ["Anna", "Adele", "Alessandra"]
console.log(filteredNames);


const othernames = filterByInitials(['Star wars', 'Mandalorian', 'Lucifer'], 'M')
console.log(othernames);


console.log(filterByInitials(['Imitiation Game', 'Dragonball', 'Billions'], 'B'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]



