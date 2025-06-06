console.log('hi');

const headerEl = document.getElementById('app_header')
console.log(typeof headerEl);



const colEl = document.querySelector('.col')
console.log(colEl);


const spanEl = document.querySelector('.col span')


/* 📌 ClassName */
// read the value (returns a string)
console.log(colEl.className); // col
// replace teh value
colEl.className = colEl.className + ' col-4'
console.log(colEl);

// add a new class to the element
colEl.className = colEl.className + ' p-4'
console.log(colEl);


/* 📌 ClassList */

console.log(colEl.classList); // dom token list (array)
colEl.classList.add('fabio')

console.log(colEl.classList);


/* 📌 Style */

headerEl.style.backgroundColor = 'red'
headerEl.style.color = 'white'


/* 📌 Element properties */

const imgEl = document.querySelector('img')
console.dir(imgEl);
console.log(imgEl.alt); // read teh value
console.log(imgEl.src); // read the value


// change the value
imgEl.src = 'https://static.wikia.nocookie.net/starwars/images/4/43/TheChild-Fathead.png'
imgEl.alt = 'Grogu'
console.log(imgEl);


// 
console.log(colEl.innerHTML)
colEl.innerHTML += '<p>ciao</p>'

colEl.append('ciao cioa')



/* 📌 Event listners */

// select the button from the DOM
const addItemBtnEl = document.getElementById('add_item') // save a dom node
// add the event listener for the event you want 

addItemBtnEl.addEventListener('click', function () {
  console.log('Hai cliccato su add item');

})


/* Live Menu mobile */
// select the button for the menu toggle
const mobileMenuBtn = document.getElementById('mobile_menu_btn')
console.log(mobileMenuBtn);

// select the menu 
const mobileMenuEl = document.querySelector('.mobile-menu')
console.log(mobileMenuEl);


mobileMenuBtn.addEventListener('click', function () {

  console.log('Clicked');
  mobileMenuEl.classList.toggle('d-none')


  if (mobileMenuEl.classList.contains('d-none')) {

    console.log('I found d-none');
    mobileMenuBtn.style.backgroundColor = 'purple'

  } else {

    console.log('d-none not found');
    mobileMenuBtn.style.backgroundColor = 'yellow'


  }

})

