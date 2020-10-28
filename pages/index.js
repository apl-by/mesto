import {
  initialCards,
  validationSelectors,
  profileEdit,
  profileAdd,
  profileName,
  profileJob,
  // popupEditForm,
  editForm,
  firstInputEdit,
  secondInputEdit,
  // editFormClose,
  // popupAddForm,
  addForm,
  firstInputAdd,
  secondInputAdd,
  // addFormClose,
  // popupZoom,
  // zoomImage,
  // zoomText,
  // zoomClose,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


// delete?
export const cardsList = document.querySelector('.cards__list');



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



const popupAddForm = new PopupWithForm(
  '.js-popup_form_add',
  {
    submitForm: (item) => {
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
      cardSection.addItemPrepend(cardElement);
    }
  }
);

popupAddForm.setEventListeners('.form__close')



const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
});


const popupEditForm = new PopupWithForm(
  '.js-popup_form_edit',
  {
    submitForm: (info) => {
      userInfo.setUserInfo(info)
    }
  }
);

popupEditForm.setEventListeners('.form__close')

const editFormValidator = new FormValidator(validationSelectors, editForm);
const addFormValidator = new FormValidator(validationSelectors, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// возвращает дефолтное состояние полям ввода после валидации при повторном открытии формы
const setDefaultState = (formElement) => {
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

const setInputValues = (profileValues) => {
  firstInputEdit.value = profileValues.nickname;
  secondInputEdit.value = profileValues.job;
}

profileEdit.addEventListener('click', () => {
  setInputValues(userInfo.getUserInfo())
  popupEditForm.openPopup();
  setDefaultState(editForm);
});


profileAdd.addEventListener('click', () => {
  popupAddForm.openPopup()
  setDefaultState(addForm);
});
