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
export const profilEditAvatar = profile.querySelector('.profile__avatar-btn');

export const popupEditForm = document.querySelector('.js-popup_form_edit');
export const editForm = popupEditForm.querySelector('.form');
export const firstInputEdit = popupEditForm.querySelector('input[name="name"]');
export const secondInputEdit = popupEditForm.querySelector('input[name="about"]');

export const popupAddForm = document.querySelector('.js-popup_form_add');
export const addForm = popupAddForm.querySelector('.form');

export const popupAvatarForm = document.querySelector('.js-popup_form_avatar');
export const editAvatarForm = popupAvatarForm.querySelector('.form');



