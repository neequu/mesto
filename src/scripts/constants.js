// form
const placeForm = document.forms['place-form'];
const profileForm = document.forms['profile-form'];
// open button
const newPlaceButton = document.querySelector('#new-place-button');
const profileEditButton = document.querySelector('#profile-edit-button');
// fields
const profileNameInput = document.querySelector('[data-input="profile-name"]')
const profileBioInput = document.querySelector('[data-input="profile-bio"]')
// cards
const items = [
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

export {settings, items, placeForm, profileForm, newPlaceButton, profileEditButton, profileNameInput, profileBioInput}