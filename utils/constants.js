export const initialCards = [
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

export const validationSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

export const profile = document.querySelector('.profile');
export const profileEdit = profile.querySelector('.profile__edit-button');
export const profileAdd = profile.querySelector('.profile__add-button');
export const profileName = profile.querySelector('.profile__name');
export const profileJob = profile.querySelector('.profile__job');

export const popupEditForm = document.querySelector('.js-popup_form_edit');
export const editForm = popupEditForm.querySelector('.form');
export const firstInputEdit = popupEditForm.querySelector('input[name="nickname"]');
export const secondInputEdit = popupEditForm.querySelector('input[name="job"]');
export const editFormClose = popupEditForm.querySelector('.form__close');

export const popupAddForm = document.querySelector('.js-popup_form_add');
export const addForm = popupAddForm.querySelector('.form');
export const firstInputAdd = popupAddForm.querySelector('input[name="place"]');
export const secondInputAdd = popupAddForm.querySelector('input[name="link"]');
export const addFormClose = popupAddForm.querySelector('.form__close');

export const popupZoom = document.querySelector('.js-popup_zoomed');
export const zoomImage = popupZoom.querySelector('.zoom__img');
export const zoomText = popupZoom.querySelector('.zoom__text');
export const zoomClose = popupZoom.querySelector('.zoom__close');

