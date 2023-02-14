// elements
const elements = document.querySelector('#elements')
// close buttons
const closeButtons = document.querySelectorAll('[data-button="close"]');
// handle click
document.addEventListener('click', e => e.target.classList.contains('popup_opened') ? closePopup(e.target) : '') 

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

initialCards.forEach(card => prependElement(card.name, card.link))
// close buttons click
closeButtons.forEach(button => button.addEventListener('click', () => {
  const closestPopup = button.closest('.popup');
  closePopup(closestPopup)
}))

function prependElement(name, link) {
  const card = createCard(name, link)
  elements.prepend(card)
}
function handleLikeButtonClick(likeButton) {
  likeButton.classList.toggle('element__like_active')
}
function handleDeleteButtonClick(button) {
  button.closest('article.element').remove()
}
function createCard(name, link) {
  const elementTemplate = document.querySelector('#element').content
  const elementItem = elementTemplate.cloneNode(true)
  const elementImage = elementItem.querySelector('.element__image');
  const deleteButton = elementItem.querySelector('[data-button="delete"]')
  const likeButton = elementItem.querySelector('[data-button="like"]')
  
  likeButton.addEventListener('click', () => handleLikeButtonClick(likeButton))
  deleteButton.addEventListener('click', () => handleDeleteButtonClick(deleteButton))



  elementImage.src = link
  elementImage.alt = name
  elementImage.addEventListener('click', () => handleImageClick(elementImage, name))

  elementItem.querySelector('.element__heading').innerText = name

  
  return elementItem
}
function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keyup', handleEscapeKeyPress)
  resetForm(popup)
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEscapeKeyPress)
}
function handleEscapeKeyPress(e) {
  const currentPopup = document.querySelector('.popup_opened') || null;
  e.key === 'Escape' 
  ? closePopup(currentPopup)
  : ''
}
function resetForm(popup) {
  popup.querySelector('.form').reset()
}