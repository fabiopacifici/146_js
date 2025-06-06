/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Luigi';


// Dichiara la funzione qui.
function greetings(name) {

  return `ciao ${name}`
}
'Ciao Mario'
// Invoca la funzione qui e stampa il risultato in console
const greet = greetings(userName) // `ciao mario`


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(greet);
