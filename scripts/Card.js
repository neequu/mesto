export default class Card {
    constructor(data, templateSelector, handleImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
    }

    _getTemplate() {
        this._card = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)

        return this._card
    }

    generateCard() {
        this._element = this._getTemplate()

        this._image = this._element.querySelector('.element__image');
        this._deleteBtn = this._element.querySelector('[data-button="delete"]')
        this._likeBtn = this._element.querySelector('[data-button="like"]')


        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.element__heading').textContent = this._name;

        this._setEventListeners();

        return this._element
    }


    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            this._likeCard()
        })

        this._deleteBtn.addEventListener('click', () => {
            this._deleteCard()
        })

        this._image.addEventListener('click', () => {
            this._handleImageClick(this._image, this._name)
        })
    }

    _likeCard() {
        this._likeBtn.classList.toggle('element__like_active');
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }
}



