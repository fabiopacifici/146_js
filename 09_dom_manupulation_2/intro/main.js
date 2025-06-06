console.log("Hello, World!");


const movies = [
  'Starwars',
  'Il signore degli anelli',
  'Avengers',
  'Space jam',
  'Predator',
  'ritorno al futuro'
]

const listEl = document.querySelector('.list')
let listItemsString = ''

for (let index = 0; index < movies.length; index++) {
  const thisMovie = movies[index];
  listItemsString += `<li>${thisMovie}</li>`

}


console.log(listItemsString);
listEl.innerHTML = listItemsString


for (let index = 0; index < movies.length; index++) {
  const thisMovie = movies[index];

  const liEl = document.createElement('li')
  liEl.append(thisMovie)
  console.log(liEl);

  listEl.appendChild(liEl)
  liEl.addEventListener('click', () => {
    console.log('hai cliccato');

  })

}



/* Example two  */

const rowEl = document.querySelector('.row')
let colsEl = ''


for (let index = 0; index < movies.length; index++) {
  const thisMovie = movies[index];
  const colStr = `
    <div class="col">
        <div class="card">
          <div class="card-header">
            ${thisMovie}
          </div>
          <div class="card-body">
            ${thisMovie}
          </div>
        </div>
      </div>
  `

  // creo la colonna
  const colEl = document.createElement('div')
  colEl.className = 'col'
  //<div class='col'>
  // </div>
  // creo la card
  const cardEl = document.createElement('div')
  cardEl.className = 'card'

  // card header
  const cardHeaderEl = document.createElement('div')
  cardHeaderEl.className = 'card-header'
  cardHeaderEl.append(thisMovie)

  // card body
  const cardBodyEl = document.createElement('div')
  cardBodyEl.className = 'card-body'
  cardBodyEl.append(thisMovie)




}

console.log(colsEl);
rowEl.innerHTML = colsEl




for (let index = 0; index < movies.length; index++) {
  const thisMovie = movies[index];
  const colStr = `
    <div class="col">
        <div class="card">
          <div class="card-header">
            ${thisMovie}
          </div>
          <div class="card-body">
            ${thisMovie}
          </div>
        </div>
      </div>
  `
  colsEl += colStr

}