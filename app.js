const form = document.querySelector('#form-js');
const nameInput = document.querySelector('#name');
const numInput = document.querySelector('#card-number');
const monthInput = document.querySelector('#month-js');
const yearInput = document.querySelector('#year-js');
const cvcInput = document.querySelector('#cvc-js');

// create Error
function createError(input, msg) {
  const formCatch = input.parentElement;
  const small = formCatch.querySelector('small');

  small.innerText = msg;

  formCatch.className = 'form__card-input error';

  // create Error for the month, year, and cvv input
  if (input === monthInput || input === yearInput || input === cvcInput) {
    const formCatch = input.parentElement.parentElement;
    const small = formCatch.querySelector('small');

    small.innerText = msg;

    formCatch.className = 'form__card-input error';
  }
}

// Validation
function validate() {
  const nameValue = nameInput.value.trim();
  const numValue = numInput.value.trim();
  const monthValue = monthInput.value.trim();
  const yearValue = yearInput.value.trim();
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

  if (!monthValue) {
    createError(monthInput, 'Month cannot be blank');
  }
  if (!yearValue) {
    createError(yearInput, 'Year cannot be blank');
  }
  if (!cvcValue) {
    createError(cvcInput, 'CVC cannot be blank');
  }
}

// Remove Error
function removeError() {
  const formError = document.querySelectorAll('.error');
  console.log(formError);
  formError.forEach((error) => {
    error.classList.remove('error');
  });
}

// Reset form
function resetForm() {
  form.reset();
}

// Form submit
form.addEventListener('submit', (eve) => {
  console.log('Hello!');
  eve.preventDefault();
  removeError();
  validate();
  resetForm();
});
