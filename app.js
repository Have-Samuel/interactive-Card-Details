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

  // When Everything in the form is correct, confirm and display the popup
  $('.btn').on('click', function () {
    $(this).css('display', 'block');
  });
}

// Mouse Click
$('.img-1').click(function () {
  alert('HELLO!');
});

$('.img-2').click(function () {
  alert('HELLO!');
});

$('.img-3').click(function () {
  alert('HELLO!');
});

// Mouse Leave
$('input').on('mouseleave', function () {
  console.log('Mouse Leave!!');
});

// Mouse Click
$('input').on('click', function () {
  $(this).css('border', '1px solid magenta');
});

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
$('.img-2').append('<div class="newCvc">Hello!</div>');
$('.img-3').append('<div class="newNum">1111 2222 3333 4444</div>');
$('.img-3').append('<div class="namAndDate"><p class="cardName">Joe Doe</p><date class="cardDate">02/20</date></div>');

form.addEventListener('submit', (eve) => {
  eve.preventDefault();
  removeError();
  validate();
  resetForm();
});
