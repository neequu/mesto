

  const showInputError = (form, input, errorMessage, classes) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.add(classes.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(classes.errorClass);
  };
  

  const hideInputError = (form, input, classes) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.remove(classes.inputErrorClass);
    errorElement.classList.remove(classes.errorClass);
    errorElement.textContent = '';
  };
  
const toggleButtonState = (button, validState) => {
  validState 
  ? button.removeAttribute('disabled') 
  : button.setAttribute('disabled', true)
}

const checkInputValidity = input => input.validity.valid

  const checkValidity = (form, input, formButton, classes) => {
    const isValidInput = checkInputValidity(input)
    const allFormInputs = form.querySelectorAll(classes.inputSelector)
    const allFormInputsList = Array.from(allFormInputs)
    const allInputsValid = allFormInputsList.every(input => checkInputValidity(input))

    toggleButtonState(formButton, allInputsValid)

    if (isValidInput) {
        hideInputError(form, input, classes)
    } else {
        showInputError(form, input, input.validationMessage, classes)
    }
  }

  const setEventListeners = (form, classes) => {
    const inputs = Array.from(form.querySelectorAll(classes.inputSelector))
    const formButton = form.querySelector(classes.submitButtonSelector)

    form.addEventListener('reset', () => {
      setTimeout(() => {  
        toggleButtonState(formButton, false), 0 })
      inputs.forEach(input => {
        hideInputError(form, input, classes)
      }) 
    }) 

    inputs.forEach(input => {
        input.addEventListener('input', () => checkValidity(form, input, formButton, classes))
    })
  }

  const enableValidation = (...selectors) => {
    const forms = Array.from(document.forms)
    const classes = selectors[0]
    forms.forEach(form => {
        setEventListeners(form, classes)
    })

  }

  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
  }); 