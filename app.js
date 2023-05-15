const { createContext } = require("react");

/* eslint-disable no-undef */
const form = document.querySelector('#form-js');
const nameInput = document.querySelector('#name');
const numInput = document.querySelector('#card-number');
const monthInput = document.querySelector('#month-js');
const yearInput = document.querySelector('[data-expiration-year]');
const cvcInput = document.querySelector('#cvc-js');

// Setting Date
const currentYear = new Date().getFullYear();
for (let i = currentYear; i < currentYear + 10; i += 1) {
  const option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  yearInput.appendChild(option);
}

// Setting Month
for (let i = 1; i < 13; i += 1) {
  const option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  monthInput.appendChild(option);
}

// Setting CVC
cvcInput.addEventListener('input', (eve) => {
  const { value } = eve.target;
  eve.target.value = value.replace(/\D/g, '');

  if (value.length > 3) {
    eve.target.value = value.slice(0, 3);
  } else if (value.length < 3) {
    eve.target.value = value.slice(0, 3);
  } else {
    eve.target.value = value;
  }
});

// create Error
function createError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.add('error');

  if (small) {
    small.innerText = message;
  } else {
    const small = document.createElement('small');
    small.innerText = message;
    formControl.appendChild(small);
  }
}

// Validation
function validate() {
  const nameValue = nameInput.value.trim();
  const numValue = numInput.value.trim();
  const cvcValue = cvcInput.value.trim();

  // Regex For card number
  function isCardNumber(numValue) {
    return /^\d{16}$/.test(numValue);
  }

  if (!nameValue) {
    createError(nameInput, 'Name cannot be blank');
  }

  if (!numValue) {
    createError(numInput, 'Number cannot be blank');
  } else if (!isCardNumber(numValue)) {
    createError(numInput, 'Wrong format, numbers only');
  }
  if (!cvcValue) {
    createError(cvcInput, 'CVC cannot be blank');
  }
}

function removeError() {
  const formError = document.querySelectorAll('.error');

  formError.forEach((error) => {
    error.classList.remove('error');
  });
}

function resetForm() {
  form.reset();
}

// USE OF JQUERY SYNTAX
// $('button').addClass('button');\
// CHAINING
// $('button').addClass('btn')
//   .css('background-color', 'green')
//   .css('color', 'white')
//   .css('border-radius', '5px')
//   .css('border', 'none')
//   .css('padding', '10px 20px')
//   .css('cursor', 'pointer')
//   .css('margin-top', '20px')
//   .css('font-size', '16px')
//   .css('font-weight', 'bold')
//   .css('letter-spacing', '1px')
//   .css('transition', 'all 0.3s ease-in-out');

// Selecting Img-2, and adding a new div
const newDiv = createContext('div');
newDiv.classList.add('newDiv');
newDiv.innerText = 'This this is CVC';

$('newDiv').createElement('div');
$('newDiv').html('This this is CVC');
$('newDiv').text('This this is CVC');
$('newDiv').css('color', 'red');
$('newDiv').css('font-size', '20px');
$('newDiv').css('font-weight', 'bold');
$('newDiv').css('letter-spacing', '1px');
$('newDiv').css('margin-top', '20px');
$('newDiv').css('transition', 'all 0.3s ease-in-out');
$('newDiv').css('border', '5px solid red');
$('img-2').appendChild('newDiv');

form.addEventListener('submit', (eve) => {
  eve.preventDefault();
  removeError();
  validate();
  resetForm();
});
