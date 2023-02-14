// popup
const placePopup = document.querySelector('#popup-place');
// form
const placeForm = document.forms['place-form'];

// open button
const newPlaceButton = document.querySelector('#new-place-button');
// inputs
const placeNameInput = document.querySelector('[data-input="place-name"]');
const placeLinkInput = document.querySelector('[data-input="place-link"]');

// open state
newPlaceButton.addEventListener('click', () => {
    openPopup(placePopup);
    resetForm(placePopup); 
})

// prevent refresh and overwrite name + bio
placeForm.addEventListener('submit', handlePlaceFormSubmit)

function handlePlaceFormSubmit(e) {
    e.preventDefault();

    prependElement(placeNameInput.value, placeLinkInput.value)

    e.target.reset()

    closePopup(placePopup);
}

