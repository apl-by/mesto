const profile = document.querySelector('.profile');
const profileEdit = profile.querySelector('.profile__edit-button');
const profileAdd = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const popupEditForm = document.querySelector('form[name="editForm"]').parentElement
const formEdit = popupEditForm.querySelector('.popup__container');
const inputsEdit = popupEditForm.querySelectorAll('input');
const firstInputEdit = inputsEdit[0];
const secondInputEdit = inputsEdit[1];
const popupEditClose = popupEditForm.querySelector('.popup__close');

const popupAddForm = document.querySelector('form[name="addForm"]').parentElement
const formAdd = popupAddForm.querySelector('.popup__container');
const inputsAdd = popupAddForm.querySelectorAll('input');
const firstInputAdd = inputsAdd[0];
const secondInputAdd = inputsAdd[1];
const popupAddClose = popupAddForm.querySelector('.popup__close');

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

const createCard = (elt) => {
  const copyCardTemplate = cardTemplate.cloneNode(true);
  copyCardTemplate.querySelector('.card__title').textContent = elt.name;
  copyCardTemplate.querySelector('.card__img').src = elt.link;
  copyCardTemplate.querySelector('.card__img').alt = elt.name;
  copyCardTemplate.querySelector('.card__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button_active')
  });
  copyCardTemplate.querySelector('.card__recycle').addEventListener('click', function (evt) {
    evt.target.parentElement.remove()
  });
  return copyCardTemplate
}

const renderInitial = () => {
  initialCards.forEach(elt => {
    const card = createCard(elt)
    cardsList.append(card);
  })
}

const submitAddForm = (evt) => {
  evt.preventDefault();
  const newCard = {
    name: firstInputAdd.value,
    link: secondInputAdd.value
  };
  const card = createCard(newCard)
  cardsList.prepend(card);
  closePopup(popupAddForm);
  firstInputAdd.value = '';
  secondInputAdd.value = '';
}

const submitEditForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = firstInputEdit.value;
  profileJob.textContent = secondInputEdit.value;

  closePopup(popupEditForm)
}



const openPopup = (evt) => {
  evt.classList.add('popup_opened');
  if (evt === popupEditForm) {
    firstInputEdit.value = profileName.textContent;
    secondInputEdit.value = profileJob.textContent;
  }
}

const closePopup = (evt) => {
  evt.classList.remove('popup_opened');
}


profileEdit.addEventListener('click', function () {
  openPopup(popupEditForm)
});
popupEditClose.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupEditForm)
});
popupEditForm.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupEditForm)
});
formEdit.addEventListener('submit', submitEditForm);



profileAdd.addEventListener('click', function () {
  openPopup(popupAddForm)
});
popupAddClose.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupAddForm)
});
popupAddForm.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupAddForm)
});
formAdd.addEventListener('submit', submitAddForm);

renderInitial();