export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._closeButton = this._popup.querySelector('[data-button="close"]')
        this._escapeClose = this._handleEscClose.bind(this)
    }

    open() {
        this._popup.classList.add('popup_opened')
        document.addEventListener('keyup', this._escapeClose)
    }

    close() {
        this._popup.classList.remove('popup_opened')
        document.removeEventListener('keyup', this._escapeClose)
    }

    _handleEscClose(e) {
        e.key === 'Escape' ? this.close() : ''
    }


    setEventListeners() {
        this._closeButton.addEventListener('click', () => this.close())

        this._popup.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup')) {
                this.close();
            }
        })
    }
}