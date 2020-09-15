const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');
const formElement = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('input[name="name"]');
const jobInput = popup.querySelector('input[name="job"]');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.js-card').content;
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

const renderInitialCards = () => {
  initialCards.forEach(elt => {
    const copyCardTemplate = cardTemplate.cloneNode(true);
    copyCardTemplate.querySelector('.card__title').textContent = elt.name;
    copyCardTemplate.querySelector('.card__img').src = elt.link;
    copyCardTemplate.querySelector('.card__img').alt = elt.name;
    cardsList.append(copyCardTemplate);
  })
}

const popupOpen = () => {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const popupClose = (ev) => {
  if (ev.target === ev.currentTarget) {
    popup.classList.remove('popup_opened');
  }
}

const formSubmitHandler = (ev) => {
  ev.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', popupOpen)
popupCloseButton.addEventListener('click', popupClose);
popup.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);

renderInitialCards();