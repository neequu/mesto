// form
const placeForm = document.forms['place-form'];
const profileForm = document.forms['profile-form'];

const avatarForm = document.forms['avatar-form']; 
// open button
const newPlaceButton = document.querySelector('#new-place-button');
const profileEditButton = document.querySelector('#profile-edit-button');
const changeAvatar = document.querySelector('#change-avatar'); 

// settings for validation
const settings = {
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}

export {settings, placeForm, profileForm, newPlaceButton, profileEditButton, avatarForm, changeAvatar}