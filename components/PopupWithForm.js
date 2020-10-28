import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
  }

  _getInputValues() {
    const inputList = Array.from(this._popup.querySelectorAll('.form__input'));
    this._formValues = {};
    inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners(closeSelector) {
    super.setEventListeners(closeSelector);
    this._popup.querySelector('.form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._getInputValues();
      this._submitForm(this._formValues)
      this.closePopup()
    });
    
  }
} 