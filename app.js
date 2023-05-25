/* eslint-disable no-loop-func */
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

  // connecting the yearInput to the card
  $('#year-js').on('input', function () {
    $('.cardDate').text($(this).val());

    if ($(this).val().length > 2) {
      $('.cardDate').text($(this).val().slice(0, 2));
    } else if ($(this).val().length < 2) {
      $('.cardDate').text($(this).val().slice(0, 2));
    } else {
      $('.cardDate').text($(this).val());
    } if ($(this).val() === '') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '0') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '1') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '2') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '3') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '4') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '5') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '6') {
      $('.cardDate').text('02/20');
    } else
    if ($(this).val() === '7') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '8') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '9') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '10') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '11') {
      $('.cardDate').text('02/20');
    } else if ($(this).val() === '12') {
      $('.cardDate').text('02/20');
    }
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

    if ($(this).val().length > 3) {
      $('.newCvc').text($(this).val().slice(0, 3));
    } else if ($(this).val().length < 3) {
      $('.newCvc').text($(this).val().slice(0, 3));
    } else {
      $('.newCvc').text($(this).val());
    }
    // if ($(this).val() === '') {
    //   $('.newCvc').text('CVC');
    // }
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
// $('.img-1').click(function () {
//   alert('HELLO!');
// });

// $('.img-2').click(function () {
//   alert('HELLO!');
// });

// $('.img-3').click(function () {
//   alert('HELLO!');
// });

// Mouse Leave
$('input').on('mouseleave', () => {
  console.log('Mouse Leave!!');
});

// Mouse Click
$('input').on('click', function () {
  $(this).css('border', '1px solid magenta');
});

$('form').on('focus', 'input', function () {
  $(this).val('ALOKALOAKA');
});

$('.all-images').on('focus', function () {
  $(this).val('ALOKALOAKA');
});

// FadeOut
// $('.img-1').on('click', function () {
//   $(this).fadeOut();
// });

// $('.img-2').on('click', function () {
//   $(this).fadeOut();
// });

// $('.img-3').on('click', function () {
//   // $(this).fadeOut(3000, function () {
//   //   $(this).remove();
//   // });
//   $(this).animate({
//     opacity: 0,
//     width: '50px',
//   }, 3000, function () {
//     $(this).remove();
//   });
// });

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
$('.img-3').append('<div class="namAndDate"><p class="cardName">Jone Carter</p><date class="cardDate">02/20</date></div>');

// Displaying text on the card when typing in the input field

form.addEventListener('submit', (eve) => {
  eve.preventDefault();
  removeError();
  validate();
  resetForm();
});
