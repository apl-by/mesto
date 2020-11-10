import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
  }

  _getInputValues() {
    const inputList = this._popup.querySelectorAll('.form__input');
    this._formValues = {};
    inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  closePopup() {
    super.closePopup();
    this._popup.querySelector('.form').reset();
  }

  setEventListeners(closeSelector) {
    super.setEventListeners(closeSelector);
    this._popup.querySelector('.form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.closePopup();
    });
  }
} 