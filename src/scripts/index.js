import '../pages/index.css'

import Card from './components/Card.js'
import FormValidator from './components/FormValidator.js';
import PopupWithImage from './components/PopupWithImage.js'
import PopupWithForm from './components/PopupWithForm.js'
import PopupWithConfirmation from './components/PopupWithConfirmation.js'
import Section from './components/Section.js'
import UserInfo from './components/UserInfo.js'
import Api from './components/Api.js'

import {settings, placeForm, profileForm, newPlaceButton, profileEditButton, avatarForm, changeAvatar} from './constants.js'

// api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'd9a56d97-fcff-4775-997d-668b8fda98e2',
    'Content-Type': 'application/json'
  }
})

let userId

Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([initialCards, userData]) => {
  userId = userData._id
  userinfo.setUserInfo(userData)
  cardList.render(initialCards)
})
.catch(err => console.log(`Ошибка:${err}`))

// user information
const userinfo = new UserInfo({
  name: '#profile-name', 
  about: '#profile-about', 
  avatar: '#profile-avatar'
})

// place popup
const placePopup = new PopupWithForm({
  popupSelector: '#popup-place', 
  handleFormSubmit: data => {
    placePopup.setLoadingState(true)
    api.addCard(data)
      .then(data => {
        cardList.addItem(createCard(data))
        placePopup.close()
      })
      .catch(err => console.log(`Ошика: ${err}`))
      .finally(() => placePopup.setLoadingState(false))
  }
})

placePopup.setEventListeners()

newPlaceButton.addEventListener('click', () => {
  placeValidation.toggleButtonState()
  placePopup.open()
})

// avatar popup
const avatarPopup = new PopupWithForm({
  popupSelector: '#popup-avatar',
  handleFormSubmit: data => {
    avatarPopup.setLoadingState(true)
    api.editAvatar(data)
      .then(data => {
        userinfo.setUserInfo(data)
        avatarPopup.close()
      })
      .catch(err => console.log(`Ошика: ${err}`))
      .finally(() => avatarPopup.setLoadingState(false))
    }
})

avatarPopup.setEventListeners()

changeAvatar.addEventListener('click', () => {
  avatarValidation.toggleButtonState()
  avatarPopup.open()
})

// cards
const cardList = new Section({renderer: card => { cardList.addItem(createCard(card)) }}, '#elements')

// creating cards
const createCard = data => {
  const card = new Card({
    data: data, 
    templateSelector: '#element', 
    userId: userId,
    handleImageClick: () => {imagePopup.open(data.name, data.link)},
    handleDeleteCardClick: cardId => {
      confirmationPopup.open()
      confirmationPopup.submit(() => {
        api.deleteCard(cardId)
          .then(() => {
            card.deleteCard()
            confirmationPopup.close()
          })
          .catch(err => console.log(`Ошибка: ${err}`))
      })
    },
    handleSetLike: cardId => {
      api.setLike(cardId)
        .then(data => card.likeCard(data))
        .catch(err => console.log(`Ошибка: ${err}`))
    },
    handleCardRemoveLike: cardId => {
      api.deleteLike(cardId)
        .then(data => card.likeCard(data))
        .catch(err => console.log(`Ошибка: ${err}`))
    }
  })
  const cardElement = card.generateCard()
  return cardElement
}

// validate 
const profileValidation = new FormValidator(settings, profileForm)
profileValidation.enableValidation()
const placeValidation = new FormValidator(settings, placeForm)
placeValidation.enableValidation()
const avatarValidation = new FormValidator(settings, avatarForm)
avatarValidation.enableValidation()

// image popup
const imagePopup = new PopupWithImage('#popup-expand-image')
imagePopup.setEventListeners()

// profile popup
const profilePopup = new PopupWithForm({
  popupSelector: '#popup-edit-profile', 
  handleFormSubmit: data => {
    profilePopup.setLoadingState(true)
    api.editUserInfo(data)
      .then(res => {
        userinfo.setUserInfo(res)
        profilePopup.close()
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => profilePopup.setLoadingState(false))
  }
})

profilePopup.setEventListeners()

profileEditButton.addEventListener('click', () => {
  profileValidation.toggleButtonState()
  const {name, about} = userinfo.getUserInfo()
  profilePopup.setInputValues({name, about})
  profilePopup.open()
})


// confirmation popup
const confirmationPopup = new PopupWithConfirmation({
  popupSelector: '#popup-confirmation'
})

confirmationPopup.setEventListeners()