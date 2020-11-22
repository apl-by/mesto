import './index.css'
import {
  validationSelectors,
  profileEdit,
  profileAdd,
  editForm,
  addForm,
  profilEditAvatar,
  editAvatarForm
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

let myId

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

const putLike = (cardId, displayLike) => {
  api.putLike(cardId)
    .then((res) => {
      displayLike(res);
    })
    .catch(err => console.log(err))
}

const deleteLike = (cardId, displayLike) => {
  api.deleteLike(cardId)
    .then((res) => {
      displayLike(res);
    })
    .catch(err => console.log(err))
}

const renderCard = (cardData) => {
  const card = new Card(cardData, myId, '.js-card-template', {
    zoomImage,
    openConfirmation,
    putLike,
    deleteLike
  });
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

const userInfo = new UserInfo(
  {
    avatarSelector: '.profile__avatar',
    nameSelector: '.profile__name',
    jobSelector: '.profile__job'
  }
);

Promise.all([
  api.getInitialCards(),
  api.getUserInfo()
])
  .then(([initialCards, userParam]) => {
    myId = userParam._id
    insertCard.renderItems(initialCards);
    userInfo.setUserInfo(userParam)
  })
  .catch(err => console.log(err));

const popupAddForm = new PopupWithForm(
  {
    submitForm: (formValues, closePopup) => {
      popupAddForm.setBtnValue('Сохранение...');
      api.addNewCard(formValues)
        .then((res) => {
          insertCard.addItemPrepend(renderCard(res))
          closePopup()
        })
        .catch(err => console.log(err))
        .finally(() => popupAddForm.setBtnValue())
    }
  },
  '.js-popup_form_add'
);
popupAddForm.setEventListeners('.form__close');


const popupEditForm = new PopupWithForm(
  {
    submitForm: (info, closePopup) => {
      popupEditForm.setBtnValue('Сохранение...');
      api.updateUserInfo(info)
        .then((res) => {
          userInfo.setUserInfo(res)
          closePopup()
        })
        .catch(err => console.log(err))
        .finally(() => popupEditForm.setBtnValue())
    }
  },
  '.js-popup_form_edit'
);
popupEditForm.setEventListeners('.form__close');


const popupEditAvatar = new PopupWithForm(
  {
    submitForm: (info, closePopup) => {
      popupEditAvatar.setBtnValue('Сохранение...');
      api.editAvatar(info.link)
        .then((res) => {
          userInfo.setUserInfo(res)
          closePopup()
        })
        .catch(err => console.log(err))
        .finally(() => popupEditAvatar.setBtnValue())
    }
  },
  '.js-popup_form_avatar'
);
popupEditAvatar.setEventListeners('.form__close');


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
const avatarFormValidator = new FormValidator(validationSelectors, editAvatarForm);


editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

profileEdit.addEventListener('click', () => {
  setInputValues(userInfo.getUserInfo());
  popupEditForm.openPopup();
  setDefaultState(editForm);
});

profileAdd.addEventListener('click', () => {
  popupAddForm.openPopup();
  setDefaultState(addForm);
});

profilEditAvatar.addEventListener('click', () => {
  popupEditAvatar.openPopup();
  setDefaultState(editAvatarForm);
})
