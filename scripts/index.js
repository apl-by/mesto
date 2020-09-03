let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let formElement = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('input[name="nickname"]');
let jobInput = popup.querySelector('input[name="description"]');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');

let popupToggle = () => {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

let popupClose = (ev) => {
  if (ev.target === ev.currentTarget) {
    popupToggle();
  }
}

let formSubmitHandler = (ev) => {
  ev.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupToggle();
}

profileEditButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupClose);
popup.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
