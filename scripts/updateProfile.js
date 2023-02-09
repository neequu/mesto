// form
const profileForm = document.querySelector('#profile-form');
// popups
const popupProfile = document.querySelector('#popup-edit-profile');
// close buttons
const popupProfileCloseButton = document.querySelector('[data-button="profile-close"');
// open buttons
const profileEditButton = document.querySelector('#profile-edit-button');
// inputs
const proifleNameInput = document.querySelector('[data-input="profile-name"]');
const profileBioInput = document.querySelector('[data-input="profile-bio"]');

// name and bio values
const currentProfileName = document.querySelector('#profile-name');
const currentProfileBio = document.querySelector('#profile-bio');

// open state
profileEditButton.addEventListener('click', updateProfile);

// closed state
popupProfileCloseButton.addEventListener('click', closeProfilePopup);

// prevent refresh and overwrite name + bio
profileForm.addEventListener('submit', handleProfileFormSubmit)

function handleProfileFormSubmit(e) {
    e.preventDefault();
    currentProfileName.innerText = proifleNameInput.value;
    currentProfileBio.innerText = profileBioInput.value;

    closeProfilePopup();
}
function openProfilePopup() {
    popupProfile.classList.add('popup_opened');
}
function closeProfilePopup() {
    popupProfile.classList.remove('popup_opened');
}
function updateProfile() {
    openProfilePopup();

    proifleNameInput.value = currentProfileName.innerText;
    profileBioInput.value = currentProfileBio.innerText;
}