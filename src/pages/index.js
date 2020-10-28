import './index.css'
import {
  initialCards,
  validationSelectors,
  profileEdit,
  profileAdd,
  editForm,
  addForm
} from '../utils/constants.js';
import {
  renderCard,
  setDefaultState,
  setInputValues
} from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

const insertCard = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      insertCard.addItemAppend(renderCard(cardData));
    }
  },
  '.cards__list'
);
insertCard.renderItems();

const userInfo = new UserInfo(
  {
    nameSelector: '.profile__name',
    jobSelector: '.profile__job'
  }
);

const popupWithImage = new PopupWithImage('.js-popup_zoomed')
popupWithImage.setEventListeners('.zoom__close');


const popupAddForm = new PopupWithForm(
  {
    submitForm: (formValues) => {
      insertCard.addItemPrepend(renderCard(formValues));
    }
  },
  '.js-popup_form_add'
);
popupAddForm.setEventListeners('.form__close');

const popupEditForm = new PopupWithForm(
  {
    submitForm: (info) => {
      userInfo.setUserInfo(info);
    }
  },
  '.js-popup_form_edit'
);
popupEditForm.setEventListeners('.form__close');


const editFormValidator = new FormValidator(validationSelectors, editForm);
const addFormValidator = new FormValidator(validationSelectors, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

profileEdit.addEventListener('click', () => {
  setInputValues(userInfo.getUserInfo());
  popupEditForm.openPopup();
  setDefaultState(editForm);
});

profileAdd.addEventListener('click', () => {
  popupAddForm.openPopup();
  setDefaultState(addForm);
});
