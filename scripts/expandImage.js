// image elemnet
const imagePopup = document.querySelector('#popup-expand-image')
// dynamic elements
const popupImage = document.querySelector('#popup-img');
const popupCaption = document.querySelector('#popup-caption');


function handleImageClick(image, name) {
  popupImage.src = image.src
  popupCaption.innerText = name
  popupImage.alt = name

  openPopup(imagePopup);
}
