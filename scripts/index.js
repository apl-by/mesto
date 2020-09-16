const profile = document.querySelector('.profile');
const profileEdit = profile.querySelector('.profile__edit-button');
const profileAdd = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const footer = document.querySelector('.footer')
const popup = document.querySelector('.popup');
const popupTitle = popup.querySelector('.popup__title');
const formElement = popup.querySelector('.popup__container');
const firstInput = popup.querySelector('input[name="first-field"]');
const secondInput = popup.querySelector('input[name="second-field"]');
const popupClose = popup.querySelector('.popup__close');
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
const newList = initialCards.slice();


const renderInitial = () => {
  initialCards.forEach(el => {
    const copyCardTemplate = cardTemplate.cloneNode(true);
    copyCardTemplate.querySelector('.card__title').textContent = el.name;
    copyCardTemplate.querySelector('.card__img').src = el.link;
    copyCardTemplate.querySelector('.card__img').alt = el.name;
    cardsList.append(copyCardTemplate);
    console.log(initialCards)
  })
}

const submitAddForm = () => {
    const newCard = {
    name: firstInput.value,
    link: secondInput.value
  };
  newList.unshift(newCard);
   const copyCardTemplate = cardTemplate.cloneNode(true);
   copyCardTemplate.querySelector('.card__title').textContent = newCard.name;
   copyCardTemplate.querySelector('.card__img').src = newCard.link;
   copyCardTemplate.querySelector('.card__img').alt = newCard.name;
   cardsList.prepend(copyCardTemplate);
   console.log(newList)
}

const submitEditForm = () => {
  profileName.textContent = firstInput.value;
  profileJob.textContent = secondInput.value;
}

const createEditForm = () => {
  firstInput.value = profileName.textContent;
  secondInput.value = profileJob.textContent;
  formElement.action = '#';
  formElement.name = 'edit-form';
  popupTitle.textContent = 'Редактировать профиль';
}

const createAddForm = () => {
  firstInput.value = '';
  secondInput.value = '';
  firstInput.placeholder = 'Название';
  secondInput.placeholder = 'Ссылка на картинку';
  formElement.action = '#';
  formElement.name = 'add-form';
  popupTitle.textContent = 'Новое место';
}

const openPopup = (ev) => {
  popup.classList.add('popup_opened');

  if (ev.srcElement.className === 'profile__edit-button') {
    createEditForm()
  } else if (ev.srcElement.className === 'profile__add-button') {
    createAddForm();
  }
}

const closePopup = (ev) => {
  if (ev.target === ev.currentTarget) {
    popup.classList.remove('popup_opened');
  }
}

const handleForm = (ev) => {
  ev.preventDefault();
  if (formElement.name === 'edit-form') {
    submitEditForm()
  } else if (formElement.name === 'add-form') {
    submitAddForm()
  }
  popup.classList.remove('popup_opened');
}

profileEdit.addEventListener('click', openPopup);
profileAdd.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popup.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleForm);

renderInitial();