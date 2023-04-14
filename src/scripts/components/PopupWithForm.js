import Popup from "./Popup.js";
import UserInfo from "./UserInfo.js";
export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this._form = this._popup.querySelector('.popup__form')
        this._inputList = this._form.querySelectorAll('.form__input')
    }

    _getInputValues() {
        this._inputValues = {}
        this._inputList.forEach(input => 
            {
                this._inputValues[input.name] = input.value
                input.textContent = input.value
                console.log(input.textContent)
            
            })

        return this._inputValues
    }


    setEventListeners() {
        this._form.addEventListener('submit', e => {
            e.preventDefault()
            this._handleFormSubmit(this._getInputValues())
            this.close()
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
}