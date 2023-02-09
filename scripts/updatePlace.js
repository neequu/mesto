
// form
const placeForm = document.querySelector('#place-form');
// popup
const popupPlace = document.querySelector('#popup-place');
// close button
const popupNewImageCloseButton = document.querySelector('[data-button="new-image-close"]');
// open button
const newPlaceButton = document.querySelector('#new-place-button');
// inputs
const placeNameInput = document.querySelector('[data-input="place-name"]');
const placeLinkInput = document.querySelector('[data-input="place-link"]');

// open state
newPlaceButton.addEventListener('click', openPlacePopup)

// closed state
popupNewImageCloseButton.addEventListener('click', closePlacePopup);

// prevent refresh and overwrite name + bio
placeForm.addEventListener('submit', handlePlaceFormSubmit)

function handlePlaceFormSubmit(e) {
    e.preventDefault();

    appendElement(placeNameInput.value, placeLinkInput.value)

    placeNameInput.value = ''
    placeLinkInput.value = ''

    closePlacePopup();
}
function openPlacePopup() {
    popupPlace.classList.add('popup_opened');
}
function closePlacePopup() {
    popupPlace.classList.remove('popup_opened');
}
