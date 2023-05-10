const form = document.querySelector('#form-js');
const nameInput = document.querySelector('#name');
const numInput = document.querySelector('#card-number');
// const monthInput = document.querySelector('#month-js');
// const yearInput = document.querySelector('#year-js');

// create Error
function createError(input, msg) {
  const formCatch = input.parentElement;
  const small = formCatch.querySelector('small');

  small.innerText = msg;

  formCatch.className = 'form__card-input error';
}

// Validation
function validate() {
  const nameValue = nameInput.value.trim();
  const numValue = numInput.value.trim();
  // const monthValue = monthInput.value.trim();
  // const yearValue = yearInput.value.trim();

  // Regex For card number
  function isCardNumber(numValue) {
    return /^([0-9]{4})[-]([0-9]{4})[-]([0-9]{4})[-]([0-9]{4})$/.test(numValue);
  }

  if (!nameValue) {
    createError(nameInput, 'Name cannot be blank');
  }

  if (!numValue) {
    createError(numInput, 'Number cannot be blank');
  } else if (!isCardNumber(numValue)) {
    createError(numInput, 'Wrong format, numbers only');
  }
}

// Form submit
form.addEventListener('submit', (eve) => {
  console.log('Hello!');
  eve.preventDefault();
  validate();
});
