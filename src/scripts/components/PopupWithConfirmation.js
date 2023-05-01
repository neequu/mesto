import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
    constructor({popupSelector}) {
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__form');
    }

    submit(func) {
        this._submit = func
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', e => {
            e.preventDefault()
            this.close()
            this._submit()
        })
    }
}