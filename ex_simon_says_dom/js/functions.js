


/* Functions */

/**
 * # Generate numbers list
 * @param {Number} max The max numbner to generate
 * @param {Number} limit The max number of numbers to generate
 * @returns {Array} The array of numbers generated
 */
function generateNumbersList(max, limit) {

  let numbers = [] // 0

  while (numbers.length < limit) {

    const numb = Math.ceil(Math.random() * max)

    if (!numbers.includes(numb)) {
      numbers.push(numb)
    }


  }
  console.log(numbers);
  return numbers
}

/**
 * Display the timer 
 */


function displayTimer() {

  contdownEl.innerText = seconds

  seconds--


  if (seconds < limit) {
    // stop the count down
    clearInterval(timer)
    // clear the numbers list el
    numbersList.innerText = ''
    // show the answer form
    answersFormEl.classList.remove('d-none')

  }


}

function handleFormSubmit(e) {
  e.preventDefault()

  console.log(inputsEl);


  // create an empty array where save the user values
  /* const userAnwers = [] */
  const userGuesses = []

  // loop over the nodelist inputsEl
  for (let i = 0; i < inputsEl.length; i++) {
    const userAnswer = Number(inputsEl[i].value)
    /* userAnwers.push(userAnswer) */

    console.log(numbers, userAnswer);
    if (numbers.includes(userAnswer)) {
      userGuesses.push(userAnswer)
    }


  }

  console.log(userGuesses);
  //alert(`Hai indovinato ${userGuesses.length}, numbers: ${userGuesses}`)

  instructionsEl.innerText = `Hai indovinato ${userGuesses.length}, numbers: ${userGuesses}`
  answersFormEl.classList.add('d-none')
}

