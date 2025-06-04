console.log('hi');

/* 
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

*/


// create a variable to hold the list of email addresse

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















/* ----- DADI ----

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


*/


// create a variable to hold a random number from 1 to 6 for the player
const playerNumber = Math.floor(Math.random() * 6) + 1
// create a variable to hold a random number from 1 to 6 for the pc
const pcNumber = Math.floor(Math.random() * 6) + 1

console.log(playerNumber, pcNumber);

// IF player number is greather than the pc number
// - the player wins
if (playerNumber > pcNumber) {
  console.log(`You win! Player: ${playerNumber} - PC: ${pcNumber}`);
}
// ELSE IF the player nunmber is less than the pc number
// - pc wins
else if (playerNumber < pcNumber) {
  console.log(`PC wins! Player: ${playerNumber} - PC: ${pcNumber}`);

} else {
  console.log(`Try again! Player: ${playerNumber} - PC: ${pcNumber}`);

}
// ELSE otherwise draw


