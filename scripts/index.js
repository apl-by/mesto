const profile = document.querySelector('.profile');
const profileEdit = profile.querySelector('.profile__edit-button');
const profileAdd = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const popupEditForm = document.querySelector('.js-popup_form_edit');
const editForm = popupEditForm.querySelector('.form');
const firstInputEdit = popupEditForm.querySelector('input[name="nickname"]');
const secondInputEdit = popupEditForm.querySelector('input[name="job"]');
const editFormClose = popupEditForm.querySelector('.form__close');

const popupAddForm = document.querySelector('.js-popup_form_add');
const addForm = popupAddForm.querySelector('.form');
const firstInputAdd = popupAddForm.querySelector('input[name="place"]');
const secondInputAdd = popupAddForm.querySelector('input[name="link"]');
const addFormClose = popupAddForm.querySelector('.form__close');

const popupZoom = document.querySelector('.js-popup_zoomed');
const zoomImage = popupZoom.querySelector('.zoom__img');
const zoomText = popupZoom.querySelector('.zoom__text');
const zoomClose = popupZoom.querySelector('.zoom__close');

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.js-card').content;


const createCard = (elt) => {
  const copyCardTemplate = cardTemplate.cloneNode(true);
  const copyCardImage = copyCardTemplate.querySelector('.card__img');
  copyCardTemplate.querySelector('.card__title').textContent = elt.name;
  copyCardImage.src = elt.link;
  copyCardImage.alt = elt.name;
  copyCardTemplate.querySelector('.card__button').addEventListener('click', putLike);
  copyCardTemplate.querySelector('.card__recycle').addEventListener('click', removeCard);
  copyCardImage.addEventListener('click', () => zoomCard(elt));
  return copyCardTemplate
}

const putLike = (evt) => {
  evt.target.classList.toggle('card__button_active')
}

const removeCard = (evt) => {
  evt.target.closest('.card').remove()
}

const zoomCard = (elt) => {
  openPopup(popupZoom)
  zoomImage.src = elt.link;
  zoomImage.alt = elt.name;
  zoomText.textContent = elt.name
}

initialCards.forEach(elt => {
  const card = createCard(elt);
  cardsList.append(card);
});

const submitAddForm = (evt) => {
  evt.preventDefault();
  const newCard = {
    name: firstInputAdd.value,
    link: secondInputAdd.value
  };
  const card = createCard(newCard);
  cardsList.prepend(card);
  closePopup(evt);
}

const submitEditForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = firstInputEdit.value;
  profileJob.textContent = secondInputEdit.value;
  closePopup(evt)
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopup)
}

const closePopup = (evt) => {
  if (evt.target === evt.currentTarget || evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closePopup)
  }
}

// возвращает дефолтное состояние полям ввода после валидации при повторном открытии формы
const setDefaultState = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('input'));
  const buttonElement = formElement.querySelector('.form__submit');
  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_visible');
    errorElement.textContent = '';
  });
  if (formElement.name === 'editForm') {
    buttonElement.classList.remove('form__submit_disabled');
    buttonElement.removeAttribute('disabled', true);
  } else if (formElement.name === 'addForm') {
    buttonElement.classList.add('form__submit_disabled');
    buttonElement.setAttribute('disabled', true);
  }
}

profileEdit.addEventListener('click', () => {
  openPopup(popupEditForm)
  setDefaultState(editForm);
  firstInputEdit.value = profileName.textContent;
  secondInputEdit.value = profileJob.textContent;
});
editFormClose.addEventListener('click', closePopup);
popupEditForm.addEventListener('click', closePopup);
editForm.addEventListener('submit', submitEditForm);

profileAdd.addEventListener('click', () => {
  openPopup(popupAddForm);
  addForm.reset();
  setDefaultState(addForm);
});
addFormClose.addEventListener('click', closePopup);
popupAddForm.addEventListener('click', closePopup);
addForm.addEventListener('submit', submitAddForm);

zoomClose.addEventListener('click', closePopup);
popupZoom.addEventListener('click', closePopup);
