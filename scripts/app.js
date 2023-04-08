import Card from './Card.js'
import FormValidator from './FormValidator.js';

const imagePopup = document.querySelector('#popup-expand-image');
const popupImage = document.querySelector('#popup-img');
const popupCaption = document.querySelector('#popup-caption');
// popup
const placePopup = document.querySelector('#popup-place');
const profilePopup = document.querySelector('#popup-edit-profile')
// form
const placeForm = document.forms['place-form'];
const profileForm = document.forms['profile-form'];
// open button
const newPlaceButton = document.querySelector('#new-place-button');
const profileEditButton = document.querySelector('#profile-edit-button');
// inputs
const placeNameInput = document.querySelector('[data-input="place-name"]');
const placeLinkInput = document.querySelector('[data-input="place-link"]');
const proifleNameInput = document.querySelector('[data-input="profile-name"]');
const profileBioInput = document.querySelector('[data-input="profile-bio"]');
// elements
const elements = document.querySelector('#elements')
// close buttons
const closeButtons = document.querySelectorAll('[data-button="close"]');
// name and bio values
const currentProfileName = document.querySelector('#profile-name');
const currentProfileBio = document.querySelector('#profile-bio');

// cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// settings for validation
const settings = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
// validate each form
Array.from(document.forms).forEach(form => {
  const val = new FormValidator(settings, form)
  val.enableValidation()
})
// handle click
document.addEventListener('click', e => e.target.classList.contains('popup_opened') ? closePopup(e.target) : '') 
// open state
profileEditButton.addEventListener('click', updateProfile);
// prevent refresh and overwrite name + bio
profileForm.addEventListener('submit', handleProfileFormSubmit)
// close buttons click
closeButtons.forEach(button => button.addEventListener('click', () => {
  const closestPopup = button.closest('.popup');
  closePopup(closestPopup)
}))
// create card for each element
initialCards.forEach(card => prependElement(card))
// open state
newPlaceButton.addEventListener('click', () => {
  openPopup(placePopup);
  resetForm(placePopup); 
})
// prevent refresh and overwrite name + bio
placeForm.addEventListener('submit', handlePlaceFormSubmit)

function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keyup', handleEscapeKeyPress)
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEscapeKeyPress)
}
function handleEscapeKeyPress(e) {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  } 
}
function resetForm(popup) {
  popup.querySelector('.form').reset()
}
function handleImageClick(image, name) {
  popupImage.src = image.src
  popupCaption.innerText = name
  popupImage.alt = name
  openPopup(imagePopup);
}
function prependElement(data) {
  const card = new Card(data, '#element',handleImageClick, openPopup, closePopup, handleEscapeKeyPress)
  const cardElement = card.generateCard()
  elements.prepend(cardElement)
}
function handlePlaceFormSubmit(e) {
    e.preventDefault();
    prependElement({name: placeNameInput.value, link: placeLinkInput.value})
    e.target.reset()
    closePopup(placePopup);
}
function handleProfileFormSubmit(e) {
  e.preventDefault();
  currentProfileName.innerText = proifleNameInput.value;
  currentProfileBio.innerText = profileBioInput.value;
  closePopup(profilePopup);
}
function updateProfile() {
  openPopup(profilePopup);
  resetForm(profilePopup); 
  proifleNameInput.value = currentProfileName.innerText;
  profileBioInput.value = currentProfileBio.innerText;
}