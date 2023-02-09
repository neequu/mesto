
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


initialCards.forEach(card => appendElement(card.name, card.link))


function appendElement(name, link) {
    const elements = document.querySelector('#elements')
    const elementTemplate = document.querySelector('#element').content
    const elementItem = elementTemplate.cloneNode(true)

    elementItem.querySelector('.element__heading').innerText = name
    elementItem.querySelector('.element__image').src = link

    let likeButton = elementItem.querySelector('[data-button="like-button"]')
    likeButton.addEventListener('click', () => handleLikeButtonClick(likeButton))

    let deleteButton = elementItem.querySelector('[data-button="delete-button"]')
    deleteButton.addEventListener('click', () => handleDeleteButtonClick(deleteButton))

    let elementImage = elementItem.querySelector('.element__image');
    elementImage.addEventListener('click', () => handleImageClick(elementImage, name))

    elements.prepend(elementItem)
}

function handleLikeButtonClick(likeButton) {
  likeButton.classList.toggle('element__like_active')
}

function handleDeleteButtonClick(deleteButton) {
  deleteButton.parentElement.remove()
}






