/* 

Consegna:

Scrivi un programma che stampi i numeri da 1 a 100,
 - ma per i multipli di 3 stampi “Fizz” al posto del numero
 - per i multipli di 5 stampi Buzz. 
 - Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

 tools:
 - for loop
 - modulus operator: %
 - if/elseif/else
 - console.log


*/


/* 
// creo un ciclo for per stampare i numeri fino a 100 da 1
for (let i = 1; i <= 100; i++) {

  // verifica SE il numero in questa iterazione (i) e' divisibile per 3 senza lasciare rimanenza
  // - stampo con in log fizz al posto del numero


  //i % 3 === 0 && i % 5 === 0
  if (i % 15 === 0) {

    // verifica ALTRIMENTI SE il numero in questa iterazione (i) e' divisibper sia per 3 che per 5 (ovvero per 15) 
    // - stampo con il log fizz buzz al posto del numero
    console.log('FizzBuzz');

  } else if (i % 3 === 0) {
    console.log('Fizz');

  } else if (i % 5 === 0) {
    // verifica ALTRIMENTI SE il numero in questa iterazione (i) e' divisibile per 5 senza lasciare rimanenza
    // - stampo con il log buzz al posto del numero

    console.log('Buzz');

  } else {
    // ALTRIMENTI stampa il numero (i) in questa iterazione
    console.log(i);

  }



} */


console.log(15 % 3 === 0);
