import {
  firstInputEdit,
  secondInputEdit,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';

const zoomImage = (link, name) => {
  const popupWithImage = new PopupWithImage('.js-popup_zoomed');
  popupWithImage.openPopup(link, name);
}

export const renderCard = (cardData) => {
  const card = new Card(cardData, {handleCardClick: zoomImage},'.js-card-template');
  const cardElement = card.generateCard();
  return cardElement;
}

export const setInputValues = (profileValues) => {
  firstInputEdit.value = profileValues.nickname;
  secondInputEdit.value = profileValues.job;
}

// возвращает дефолтное состояние полям ввода после валидации при повторном открытии формы
export const setDefaultState = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_visible');
    errorElement.textContent = '';
  });
  if (formElement === document.forms.editForm) {
    buttonElement.classList.remove('form__submit_disabled');
    buttonElement.removeAttribute('disabled', true);
  } else if (formElement === document.forms.addForm) {
    buttonElement.classList.add('form__submit_disabled');
    buttonElement.setAttribute('disabled', true);
  }
}