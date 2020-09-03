let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let formElement = popup.querySelector('.popup__container');
let popupText = popup.querySelectorAll('.popup__text');

let popupToggle = () => {
  popup.classList.toggle('popup_opened')
}

popupToggle();
profileEditButton.addEventListener('click', popupToggle)

let popupClose = (ev) => {
  if (ev.target === ev.currentTarget) {
    popupToggle();
  }
}
popupCloseButton.addEventListener('click', popupClose);
popup.addEventListener('click', popupClose);

function formSubmitHandler(ev) {
  ev.preventDefault();

  let nameInput = popupText[0];
  let jobInput = popupText[1];

  let profileName = profile.querySelector('.profile__name');
  let profileDescription = profile.querySelector('.profile__description');

  let checkValue = (i) => {
    if (i.value === '') {
      return i.placeholder;
    } else {
      return i.value;
    }
  }

  profileName.textContent = checkValue(nameInput);
  profileDescription.textContent = checkValue(jobInput);

  popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);
