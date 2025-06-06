/* const formEl = document.querySelector('form')
const inputEl = document.getElementById('first-name')

console.log(inputEl.value);


formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log(e);

  console.log(inputEl.value);





}) */


/* Select the dom elements inside the form */
const formEl = document.querySelector('form')
const selectTitleEl = document.getElementById('title')
const inputFullNameEl = document.getElementById('full-name')
const inputJobEl = document.getElementById('job')
const inputCompanyEl = document.getElementById('company')
const inputEmailEl = document.getElementById('email')
const inputPhoneEl = document.getElementById('phone')
const inputImageEl = document.getElementById('image')


console.log(formEl,
  selectTitleEl,
  inputFullNameEl,
  inputJobEl,
  inputCompanyEl,
  inputEmailEl,
  inputPhoneEl,
  inputImageEl
);



/* Select the dom elements for the card */

const cardHeaderEl = document.querySelector('.card-header')
const cardTitleEl = document.querySelector('.title')
const cardFullNameEl = document.querySelector('.full-name')
const cardJobEl = document.querySelector('.job')
const cardEmailEl = document.querySelector('.email')
const cardPhoneEl = document.querySelector('.phone')
const cardImageEl = document.querySelector('img')


console.log(cardHeaderEl,
  cardTitleEl,
  cardFullNameEl,
  cardJobEl,
  cardEmailEl,
  cardPhoneEl,
  cardImageEl
);



// Implementation

formEl.addEventListener('submit', (e) => {

  // Prevent the default behavoiur
  e.preventDefault()

  // Read the input values
  const titleValue = selectTitleEl.value
  const fullNameValue = inputFullNameEl.value
  const jobValue = inputJobEl.value
  const companyValue = inputCompanyEl.value
  const emailValue = inputEmailEl.value
  const phoneValue = inputPhoneEl.value
  const imageValue = inputImageEl.value

  console.log(titleValue,
    fullNameValue,
    jobValue,
    companyValue,
    emailValue,
    phoneValue,
    imageValue
  );


  // update the dom card
  cardHeaderEl.innerHTML = companyValue
  cardTitleEl.innerHTML = titleValue
  cardFullNameEl.innerHTML = fullNameValue
  cardJobEl.innerHTML = jobValue
  cardPhoneEl.innerHTML = phoneValue
  cardEmailEl.innerHTML = emailValue
  cardImageEl.src = imageValue


})