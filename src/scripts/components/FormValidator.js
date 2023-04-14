export default class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings
        this._formElement = formElement
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector))
        this._formButton = formElement.querySelector(this._settings.submitButtonSelector)
    }
    
    _showInputError(input, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
    }

    _hideInputError(input) {
        const errorElement = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(input) {
        return input.validity.valid
    }

    _allInputsValid() {
        return this._inputList.every(input => this._checkInputValidity(input))
    }

    _checkValidity(input) {
        const isValidInput = this._checkInputValidity(input)
        this.toggleButtonState()
    
        if (isValidInput) {
            this._hideInputError(input)
        } else {
            this._showInputError(input, input.validationMessage)
        }
    }

    toggleButtonState() {
        return this._allInputsValid()
        ? this._formButton.removeAttribute('disabled') 
        : this._formButton.setAttribute('disabled', true)
    } 

    _setEventListeners() {

        this._formElement.addEventListener('reset', () => { 
            this._inputList.forEach(input => { 
                this._hideInputError(input) 
            })  
        })  

      
          this._inputList.forEach(input => input.addEventListener('input', () => this._checkValidity(input)))
    }

    enableValidation() {
        this._setEventListeners();
    }
    _
}

