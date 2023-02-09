// image elemnet
const imagePopup = document.querySelector('#popup-expand-image')
// dynamic elements
const popupImage = document.querySelector('#popup-img');
const popupCaption = document.querySelector('#popup-caption');


const expandedImageCloseButton = document.querySelector('[data-button="expand-image-close"]');
expandedImageCloseButton.addEventListener('click', closeImagePopup);

function handleImageClick(image, name) {
  popupImage.src = image.src
  popupCaption.innerText = name
  openImagePopup();

  console.log(image)
  console.log(name)
}
function openImagePopup() {
  imagePopup.classList.add('popup_opened');
}
function closeImagePopup() {
  imagePopup.classList.remove('popup_opened');
}