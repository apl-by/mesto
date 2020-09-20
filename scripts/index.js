import {initialCards} from './data.js';

const profile = document.querySelector('.profile');
const profileEdit = profile.querySelector('.profile__edit-button');
const profileAdd = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const popupEditForm = document.querySelector('.js-popup_editForm');
const editForm = popupEditForm.querySelector('.form');
const firstInputEdit = popupEditForm.querySelector('input[name="name"]');
const secondInputEdit = popupEditForm.querySelector('input[name="job"]');
const editFormClose = popupEditForm.querySelector('.form__close');

const popupAddForm = document.querySelector('.js-popup_addForm');
const addForm = popupAddForm.querySelector('.form');
const firstInputAdd = popupAddForm.querySelector('input[name="place"]');
const secondInputAdd = popupAddForm.querySelector('input[name="link"]');
const addFormClose = popupAddForm.querySelector('.form__close');

const popupItem = document.querySelector('.js-popup_image');
const itemImage = popupItem.querySelector('.item__img');
const itemText = popupItem.querySelector('.item__text');
const itemClose = popupItem.querySelector('.item__close');

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.js-card').content;


const createCard = (elt) => {
  const copyCardTemplate = cardTemplate.cloneNode(true);
  const copyCardImage = copyCardTemplate.querySelector('.card__img');
  copyCardTemplate.querySelector('.card__title').textContent = elt.name;
  copyCardImage.src = elt.link;
  copyCardImage.alt = elt.name;
  copyCardTemplate.querySelector('.card__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button_active')
  });
  copyCardTemplate.querySelector('.card__recycle').addEventListener('click', function (evt) {
    evt.target.parentElement.remove()
  });
  copyCardTemplate.querySelector('.card__img').addEventListener('click', function () {
    openPopup(popupItem)
    itemImage.src = elt.link;
    itemImage.alt = elt.name;
    itemText.textContent = elt.name
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
}

const closePopup = (evt) => {
  evt.classList.remove('popup_opened');
}

profileEdit.addEventListener('click', function () {
  openPopup(popupEditForm)
  firstInputEdit.value = profileName.textContent;
  secondInputEdit.value = profileJob.textContent;
});
editFormClose.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupEditForm)
});
popupEditForm.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupEditForm)
});
editForm.addEventListener('submit', submitEditForm);

profileAdd.addEventListener('click', function () {
  openPopup(popupAddForm)
});
addFormClose.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupAddForm)
});
popupAddForm.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupAddForm)
});
addForm.addEventListener('submit', submitAddForm);

itemClose.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupItem)
});
popupItem.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget)
    closePopup(popupItem)
});

renderInitial();