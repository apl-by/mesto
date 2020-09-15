let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let formElement = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('input[name="name"]');
let jobInput = popup.querySelector('input[name="job"]');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.js-card').content;
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Архыз'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt: 'Природа челябинской области'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Спальный район Иваново'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt: 'Подножие горы'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Железная дорога'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      alt: 'Зимний Байкал'
  }
];

const renderInitialCards = () => {
  initialCards.forEach(element => {
    const  copyCardTemplate = cardTemplate.cloneNode(true);
    copyCardTemplate.querySelector('.card__title').textContent = element.name;
    copyCardTemplate.querySelector('.card__img').src = element.link;
    copyCardTemplate.querySelector('.card__img').alt = element.alt;
    cardsList.append(copyCardTemplate);
  })
}

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

renderInitialCards();