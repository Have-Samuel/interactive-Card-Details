const form = document.querySelector('#form-js');
const nameInput = document.querySelector('#name');
const numInput = document.querySelector('#number');
const monthInput = document.querySelector('#month-js');
const yearInput = document.querySelector('#year-js');

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
  const monthValue = monthInput.value.trim();
  const yearValue = yearInput.value.trim();
}

// Form submit
form.addEventListener('submit', function (eve) {
  eve.preventDefault();
  validate();
});
