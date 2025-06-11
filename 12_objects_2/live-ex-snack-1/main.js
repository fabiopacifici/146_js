/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

*/


const bikes = [
  { nome: "Bici A", peso: 7.5 },
  { nome: "Bici B", peso: 8.0 },
  { nome: "Bici C", peso: 7.2 },
  { nome: "Bici D", peso: 8.5 },
  { nome: "Bici E", peso: 7.8 }
];


function findLightest(bikes) {
  let lightestBike = bikes[0]

  for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];

    if (bike.peso < lightestBike.peso) {
      lightestBike = bike
    }

  }

  return lightestBike

}


console.log(findLightest(bikes))
const lighestBike = findLightest(bikes)


const divEl = document.createElement('div')
const result = `The lightest bike is: ${lighestBike.nome} - weight: ${lighestBike.peso}`

divEl.append(result)

console.log(divEl);

const resultEl = document.getElementById('lightestBikeResult')
console.log(resultEl);


resultEl.appendChild(divEl)