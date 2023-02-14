// popup
const profilePopup = document.querySelector('#popup-edit-profile')
// form
const profileForm = document.forms['profile-form'];
// open button
const profileEditButton = document.querySelector('#profile-edit-button');
// inputs
const proifleNameInput = document.querySelector('[data-input="profile-name"]');
const profileBioInput = document.querySelector('[data-input="profile-bio"]');

// name and bio values
const currentProfileName = document.querySelector('#profile-name');
const currentProfileBio = document.querySelector('#profile-bio');

// open state
profileEditButton.addEventListener('click', updateProfile);


// prevent refresh and overwrite name + bio
profileForm.addEventListener('submit', handleProfileFormSubmit)

function handleProfileFormSubmit(e) {
    e.preventDefault();
    currentProfileName.innerText = proifleNameInput.value;
    currentProfileBio.innerText = profileBioInput.value;

    closePopup(profilePopup);
}

function updateProfile() {
    openPopup(profilePopup);
    
    proifleNameInput.value = currentProfileName.innerText;
    profileBioInput.value = currentProfileBio.innerText;
}