console.log("Hello, World!");
/* 
**Consegna**

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

**BONUS**

Facciamo accendi e spegni:

- Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
- Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
- E così via...

Per fare questo bonus potremmo aver bisogno di del metodo [string.includes()](https://www.w3schools.com/jsref/jsref_includes.asp) 😉
*/


// Select the dom elements
const bulbImageEl = document.querySelector("img");
const bulbButtonEl = document.querySelector("button");


bulbImageEl.addEventListener('click', () => {

  // loggo in console un messaggio
  console.log("Button clicked");


  // loggo l'immagine corrente della lampadina
  console.log(bulbImageEl.src);


  // update the bulb image source

  /*   bulbImageEl.src = './assets/img/yellow_lamp.png';
    console.log(bulbImageEl.src);
   */

  if (bulbImageEl.src.includes('yellow')) {
    // loggo in console un messaggio
    console.log("Bulb is ON");
    bulbImageEl.src = './assets/img/white_lamp.png';
    bulbButtonEl.innerText = "Accendi";
  } else {
    // loggo in console un messaggio
    console.log("Bulb is OFF");
    bulbImageEl.src = './assets/img/yellow_lamp.png';
    bulbButtonEl.innerText = "Spegni";
  }

})