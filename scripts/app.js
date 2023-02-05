const form = document.querySelector('#popup-form');
// popup
const popup = document.querySelector('#popup');
const popupCloseButton = document.querySelector('#popup-close-button');
const profileEditButton = document.querySelector('#profile-edit-button');
// inputs
const inputName = document.querySelector('#input-name');
const inputBio = document.querySelector('#input-bio');
// name and bio values
const currentName = document.querySelector('#profile-name');
const currentBio = document.querySelector('#profile-bio');

// open state
profileEditButton.addEventListener('click', openPopup)

function openPopup() {
    popup.classList.add('popup_opened');
    inputName.value = currentName.innerText;
    inputBio.value = currentBio.innerText;
}
// closed state
popupCloseButton.addEventListener('click', closePopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

// prevent refresh and overwrite name + bio
form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault();
    currentName.innerText = inputName.value;
    currentBio.innerText = inputBio.value;
    closePopup();
}