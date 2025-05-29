// 📌 Global Scope

/*

il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60

*/
/* Preparation steps */
let ticket_price, message, test;

// Ask the number of km to the passenger
const KM = Number(prompt('Type the number of km you want to buy'))

// Ask the passenger age
const PASSENGER_AGE = Number(prompt('Type the passenger age'))


// Create a constant variable to store the price per km (0.21)
const PRICE_PER_KM = 0.21


/* Elaboration steps */
// Create a variable to store the standard price
ticket_price = KM * PRICE_PER_KM

// Create a variable to store a message for the applied discount
message = 'Standard price applied'
console.log(ticket_price, message);


// Create a contant variable for each of the discounts
const MINOR_DISCOUNT = 0.8
const SENIOR_DISCOUNT = 0.6
test = 'discount 20%'

// IF the passenger age is less than 18 apply 20% off
if (PASSENGER_AGE < 18) {
  // 📌 Block scope
  // minor here
  ticket_price = ticket_price * MINOR_DISCOUNT
  message = 'Applied minor disount, 20% off'

  test = '123'

} else if (PASSENGER_AGE >= 65) {
  // ELSE IF the passenger age is greather than 65 apply 40% off
  // senior here
  ticket_price = ticket_price * SENIOR_DISCOUNT
  message = 'Applied senior disount, 40% off'

  test = '1234'
}

console.log(test);


/* Output step */
// Print a message to the user
alert(`The price for your ticket is: ${ticket_price.toFixed(2)} ${message}`);



/* 
Variable scope

*/


let validation = true;
const wordA = "Word A"; // Global variable
let wordB = "Word B"; // Global variable

if (validation === true) {
  let wordC = "Word C"; // Block variable
  let wordB = "Word Custom B"; // Block variabl;
  console.log(wordA); // Word A
  console.log(wordB); // Word Custom B
  console.log(wordC); // Word C
}

console.log(wordA); // Word A
console.log(wordB); // Word B
console.log(wordC); // Error