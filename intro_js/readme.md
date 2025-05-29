# Human code

scelgo un film su netflix (prime, disney+ ecc.): qual è il mio mood?

creare un sistema per selezionare casualmente gli studenti e tenerne traccia

## steps

- Prendo la lista degli studenti [Fabio, Michele, Margherita, Filippo, ...]
- Scorro all’interno della lista 🚲
  - Scelgo uno studente a caso
  ? SE lo studente è presente in classe
    - seleziono lo studente 😱
  : ALTRIMENTI
    - Vado avanti e ne scelgo un altro

  - Aggiungo lo studente selezionato in una seconda lista: studenti_selezionati




```js

// creao una lista di studenti 
const studenti = ["Fabio", "Michele", "Margherita", "Filippo", "Giovanni", "Sara", "Luca", "Anna"];

// scorro nella lista degli studenti 
for(let i = 0; i < studenti.length; i++){
  const studente = studenti[i];
  // scelgo uno studente a caso
  const casuale = Math.random();
  if(casuale < 0.5){
    // SE lo studente è presente in classe
    console.log(`Selezionato: ${studente}`);
  } else {
    // ALTRIMENTI
    console.log(`Non selezionato: ${studente}`);
  }
}


```
