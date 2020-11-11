import './index.css'
import {
  initialCards,
  validationSelectors,
  profileEdit,
  profileAdd,
  editForm,
  addForm,
  myId
  // popupDeleteBtn
} from '../utils/constants.js';
import {
  setDefaultState,
  setInputValues
} from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupConfirm from '../components/PopupConfirm.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: 'b2a2a541-6bef-4eb9-91cd-396f84ba323f',
    'Content-Type': 'application/json'
  }
}); 


const popupWithImage = new PopupWithImage('.js-popup_zoomed')
popupWithImage.setEventListeners('.zoom__close');

const zoomImage = (link, name) => {
  popupWithImage.openPopup(link, name);
}

const openConfirmation = (cardId, cardItem) => {
  popupDeleteCard.openPopup(cardId, cardItem)
}

export const renderCard = (cardData) => {
  const card = new Card(cardData,  myId, '.js-card-template', {
    handleCardClick: zoomImage,
    openConfirmation: openConfirmation,
  },);
  const cardElement = card.generateCard();
  return cardElement;
}



const insertCard = new Section(
  {
    renderer: (cardData) => {
      insertCard.addItemAppend(renderCard(cardData));
    }
  },
  '.cards__list'
);

api.getInitialCards()
.then(res => {

  console.log(res)
    insertCard.renderItems(res);
})
.catch(err => console.log(err))

// -------------------------------

api.getUserInfo()
.then(res => {
  userInfo.setUserInfo(res);
})
.catch(err => console.log(err))


const userInfo = new UserInfo(
  {
    avatarSelector: '.profile__avatar',
    nameSelector: '.profile__name',
    jobSelector: '.profile__job'
  }
);

const popupAddForm = new PopupWithForm(
  {
    submitForm: (formValues) => {
      api.addNewCard(formValues)
      .then((res) => insertCard.addItemPrepend(renderCard(res)))
      .catch(err => console.log(err))
      
    }
  },
  '.js-popup_form_add'
);
popupAddForm.setEventListeners('.form__close');



const popupEditForm = new PopupWithForm(
  {
    submitForm: (info) => {
      api.updateUserInfo(info)
      .then((res) => userInfo.setUserInfo(res))
      .catch(err => console.log(err))
    }
  },
  '.js-popup_form_edit'
);
popupEditForm.setEventListeners('.form__close');


const popupDeleteCard = new PopupConfirm({
  submitForm: (cardId, cardItem) => {
    api.deleteCard(cardId)
  .then(() => {
    cardItem.remove()
  })
  .catch(err => console.log(err))
  }
},
'.js-popup_delete'
);
popupDeleteCard.setEventListeners('.form__close')


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

// profileAdd.addEventListener('click', () => {
//   popupDeleteCard.openPopup()
// })
