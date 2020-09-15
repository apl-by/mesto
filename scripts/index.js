let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let formElement = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('input[name="name"]');
let jobInput = popup.querySelector('input[name="job"]');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');

let popupOpen = () => {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

let popupClose = (ev) => {
  if (ev.target === ev.currentTarget) {
    popup.classList.remove('popup_opened');
  }
}

let formSubmitHandler = (ev) => {
  ev.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', popupOpen)
popupCloseButton.addEventListener('click', popupClose);
popup.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
