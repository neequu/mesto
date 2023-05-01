export default class Card {
    constructor({data, templateSelector, userId, handleImageClick, handleDeleteCardClick, handleSetLike, handleCardRemoveLike}) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._owner = data.owner._id
        this._userId = userId;
        this._cardId = data._id;
        this._likes = data.likes;

        this._handleSetLike = handleSetLike;
        this._handleCardRemoveLike = handleCardRemoveLike
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
        this._likesCount = this._element.querySelector('.element__like-counter')

        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.element__heading').textContent = this._name;
        this._likesCount.textContent = this._likes.length
        this._deleteButtonPresent()
        this._setEventListeners();
        this._isLiked();

        return this._element
    }


    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            if (this._likeBtn.classList.contains('element__like_active')) {
                this._handleCardRemoveLike(this._cardId)
            } else {
                this._handleSetLike(this._cardId)
            }
        })

        this._deleteBtn.addEventListener('click', () => {
            this._handleDeleteCardClick(this._cardId)
        })

        this._image.addEventListener('click', () => {
            this._handleImageClick(this._image, this._name)
        })
    }

    _isLiked() {
        if (this._likes.some(user => this._userId === user._id)) {
            this._likeBtn.classList.add('element__like_active')       
        }
    }

    likeCard(data) {
        this._likes = data.likes
        this._likesCount.textContent = this._likes.length
        this._likeBtn.classList.toggle('element__like_active')
    }

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _deleteButtonPresent() {
        if (this._owner !== this._userId) {
            this._deleteBtn.remove()
        }
    }

}



