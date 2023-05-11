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
for (let i = 1; i <= 12; i += 1) {
  const option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  monthInput.appendChild(option);
}

// create Error
function createError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.add('error');
  // Looping throw all the elements with small element

  if (small) {
    small.innerText = message;
  } else {
    const small = document.createElement('small');
    small.innerText = message;
    formControl.appendChild(small);
  }

  // console.log(formControl);
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
  // console.log(formError);
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
