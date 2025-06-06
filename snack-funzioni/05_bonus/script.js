/* Scrivi una funzione che accetti:
- param1: una stringa contenente un nome 
- restituisca:
un saluto seguito dal nome fornito. 


Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/




// Dichiara la funzione qui.
function greetings(name) {

  const now = new Date()
  console.log(now);
  //now.setHours(18)
  const hour = now.getHours();

  let message = ''
  if (hour < 13) {
    message = 'buongiorno'
    //return `buongiorn ${name}`
  } else if (hour >= 13 && hour < 17) {
    message = 'buon pomeriggio'
  } else {
    message = 'buona sera'
  }


  return `${message} ${name}`

}

// Invoca la funzione qui e stampa il risultato in console
const firstName = 'Mario';
console.log(greetings(firstName))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.