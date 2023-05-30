/* eslint-disable func-names */
/* eslint-disable no-alert */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
const form = document.querySelector('#form-js');
const nameInput = document.querySelector('#name');
// const numInput = document.querySelector('#card-number');
const numInput = document.querySelectorAll('input[type="tel"]');
const monthInput = document.querySelector('#month-js');
const yearInput = document.querySelector('[data-expiration-year]');
const cvcInput = document.querySelector('#cvc-js');

// Connecting the nameInput to the card
$('#name').on('input', function () {
  $('.cardName').text($(this).val());
});

// Connecting the numberInput to the card
$('#card-number').on('input', function () {
  $('.newNum').text($(this).val());
});

// Setting Date
const currentYear = new Date().getFullYear();
for (let i = currentYear; i < currentYear + 10; i += 1) {
  const option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  yearInput.appendChild(option);

  // connecting the monthInput and yearInput to the card
  $('#month-js, #year-js').on('input', () => {
    $('.cardDate').text(`${monthInput.value}/${yearInput.value}`);
  });
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

  // connecting the cvcInput to the card
  $('#cvc-js').on('input', function () {
    $('.newCvc').text($(this).val());
  });
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

  if (!numValue) {
    createError(numInput, 'Number cannot be blank');
  } else if (!isCardNumber(numValue)) {
    createError(numInput, 'Wrong format, numbers only');
  }

  if (!nameValue) {
    createError(nameInput, 'Name cannot be blank');
  }

  if (!cvcValue) {
    createError(cvcInput, 'CVC cannot be blank');
  } else if (cvcValue.length < 3) {
    createError(cvcInput, '3 characters atleast');
  }
  const popUp = document.querySelector('#js-comp');
  if (nameValue && numValue && cvcValue) {
    popUp.style.visibility = 'visible';
    alert('Your payment is successful');
  } else {
    alert('Your payment is not successful');
  }

  // remove the popUp
  const offPopup = document.querySelector('#close');
  offPopup.addEventListener('click', () => {
    popUp.style.visibility = 'hidden';
  });
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

// Using Jquery
$('.img-2').append('<div class="newCvc">000</div>');
$('.img-3').append('<div class="newNum">0000 0000 0000 0000</div>');
$('.img-3').append('<div class="namAndDate"><p class="cardName">Jone Carter</div>');
$('.img-3').append('</p><date class="cardDate">00/0000</date>');

// Displaying text on the card when typing in the input field

form.addEventListener('submit', (eve) => {
  eve.preventDefault();
  removeError();
  validate();
  resetForm();
});
