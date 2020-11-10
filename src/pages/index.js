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
import Api from '../components/Api.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: 'b2a2a541-6bef-4eb9-91cd-396f84ba323f',
    'Content-Type': 'application/json'
  }
}); 

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


// const insertCard = new Section(
//   {
//     items: initialCards,
//     renderer: (cardData) => {
//       insertCard.addItemAppend(renderCard(cardData));
//     }
//   },
//   '.cards__list'
// );
// insertCard.renderItems();



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
