// Select the DOM elements
const numbersList = document.getElementById('numbers-list')
const contdownEl = document.getElementById('countdown')
const answersFormEl = document.getElementById('answers-form')
const instructionsEl = document.getElementById('instructions')

// Initial data
let seconds = 3
const limit = 0



// generate the numbers
const numbers = generateNumbersList(50, 5)
numbersList.innerHTML = numbers

// show the timer
const timer = setInterval(displayTimer, 1000)



// handle the form submission
const inputsEl = document.querySelectorAll('input')

answersFormEl.addEventListener('submit', handleFormSubmit)
