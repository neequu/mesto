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
// save button
const saveButton = document.querySelector('#save-button');


// open state
profileEditButton.addEventListener('click', () => {
    popup.classList.add('popup_opened');
    inputName.value = currentName.innerText;
    inputBio.value = currentBio.innerText;

    saveButton.addEventListener('click', () => {
        currentName.innerText = inputName.value;
        currentBio.innerText = inputBio.value;
        closePopup();
    })
})
// closed state
popupCloseButton.addEventListener('click', closePopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}


// prevent refresh
form.addEventListener('submit', (e) => {
    e.preventDefault();
})



const likeButtons = document.querySelectorAll('#like-button');
likeButtons.forEach(button => button.addEventListener('click', () => {
    button.classList.toggle('element__like_active')
}))
