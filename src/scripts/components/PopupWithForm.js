import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this._form = this._popup.querySelector('.popup__form')
        this._inputList = this._form.querySelectorAll('.form__input')
        this._submitButton = this._form.querySelector('.form__submit-button')
        this._submitButtonText = this._submitButton.textContent
    }

    _getInputValues() {
        this._inputValues = {}
        this._inputList.forEach(input => this._inputValues[input.name] = input.value)
        return this._inputValues
    }


    setEventListeners() {
        this._form.addEventListener('submit', e => {
            e.preventDefault()
            this._handleFormSubmit(this._getInputValues())
        })
        super.setEventListeners()

    }

    _reset() {
        this._form.reset();
    }

    close() {
        super.close()
        this._reset()
    }

    setLoadingState(isLoading) {
        isLoading 
        ? this._submitButton.textContent = 'Сохранение...'
        : this._submitButton.textContent = this._submitButtonText
    }
}