import {
  initialCards,
  validationSelectors,
  profileEdit,
  profileAdd,
  profileName,
  profileJob,
  popupEditForm,
  editForm,
  firstInputEdit,
  secondInputEdit,
  editFormClose,
  popupAddForm,
  addForm,
  firstInputAdd,
  secondInputAdd,
  addFormClose,
  popupZoom,
  zoomImage,
  zoomText,
  zoomClose,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
// delete?
export const cardsList = document.querySelector('.cards__list');

// const zoomCard = (name, link) => {
//   openPopup(popupZoom)
//   zoomImage.src = link;
//   zoomImage.alt = name;
//   zoomText.textContent = name;
// }

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item,
      '.js-card-template',
      {
        handleCardClick: (link, name) => {
          const popupWithImage = new PopupWithImage('.js-popup_zoomed');
          popupWithImage.openPopup(link, name);
          popupWithImage.setEventListeners('.zoom__close')
        }
      }
    );
    const cardElement = card.generateCard();
    cardSection.addItemAppend(cardElement);
  },
},
  '.cards__list'
);

cardSection.renderItems()

const submitAddForm = (evt) => {
  evt.preventDefault();
  const newCard = {
    name: firstInputAdd.value,
    link: secondInputAdd.value
  };
  const card = new Card(newCard, '.js-card-template', zoomCard);
  const cardElement = card.generateCard();
  cardsList.prepend(cardElement);
  closePopup(evt);
}

const submitEditForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = firstInputEdit.value;
  profileJob.textContent = secondInputEdit.value;
  closePopup(evt)
}

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keyup', closePopup)
// }

// function closePopup(evt) {
//   if (evt.target === evt.currentTarget || evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened');
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keyup', closePopup)
//   }
// }

const popup = new Popup('.js-popup_form_edit');//--------------------
popup.setEventListeners('.form__close')//------------------------------

const editFormValidator = new FormValidator(validationSelectors, editForm);
const addFormValidator = new FormValidator(validationSelectors, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

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
  pop.openPopup() //------------------------------------
  setDefaultState(editForm);
  firstInputEdit.value = profileName.textContent;
  secondInputEdit.value = profileJob.textContent;
});
// editFormClose.addEventListener('click', closePopup);
// popupEditForm.addEventListener('click', closePopup);
// editForm.addEventListener('submit', submitEditForm);

profileAdd.addEventListener('click', () => {
  // openPopup(popupAddForm);
  addForm.reset();
  setDefaultState(addForm);
});
// addFormClose.addEventListener('click', closePopup);
// popupAddForm.addEventListener('click', closePopup);
// addForm.addEventListener('submit', submitAddForm);

// zoomClose.addEventListener('click', closePopup);
// popupZoom.addEventListener('click', closePopup);
