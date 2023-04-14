import '../pages/index.css'

import Card from './components/Card.js'
import FormValidator from './components/FormValidator.js';
import PopupWithImage from './components/PopupWithImage.js'
import PopupWithForm from './components/PopupWithForm.js'
import Section from './components/Section.js'
import UserInfo from './components/UserInfo.js'
import {settings, items, placeForm, profileForm, newPlaceButton, profileEditButton, profileNameInput, profileBioInput} from './constants.js'
// creating a card
const createCard = data => {
  const card = new Card({
    data: data, 
    templateSelector: '#element', 
    handleImageClick: () => {imagePopup.open(data.name, data.link)}})
  const cardElement = card.generateCard()
  return cardElement
}
// validate each form
const profileValidation = new FormValidator(settings, profileForm)
profileValidation.enableValidation()

const placeValidation = new FormValidator(settings, placeForm)
placeValidation.enableValidation()
// current info in fields
const userinfo = new UserInfo('#profile-name', '#profile-bio')
// popups
const imagePopup = new PopupWithImage('#popup-expand-image')
imagePopup.setEventListeners()

const profilePopup = new PopupWithForm({
  popupSelector: '#popup-edit-profile', 
  handleFormSubmit: data => userinfo.setUserInfo(data)})

profilePopup.setEventListeners()

profileEditButton.addEventListener('click', () => {
  profileValidation.toggleButtonState()
  const {name, bio} = userinfo.getUserInfo()
  profileNameInput.value = name
  profileBioInput.value = bio
  profilePopup.open()
})

const placePopup = new PopupWithForm({
  popupSelector: '#popup-place', 
  handleFormSubmit: data => cardList.addItem(createCard(data))})

placePopup.setEventListeners()

newPlaceButton.addEventListener('click', () => {
  placeValidation.toggleButtonState()
  placePopup.open()
})
// initial cards
const cardList = new Section({items, renderer: card => { cardList.addItem(createCard(card)) }}, '#elements')
cardList.render()




