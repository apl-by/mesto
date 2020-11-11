import Popup from './Popup.js';

export default class PopupConfirm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
  }

  openPopup(cardId, cardItem) {
    super.openPopup();
    this._cardId = cardId;
    this._cardItem = cardItem;
  }

  setEventListeners(closeSelector) {
    super.setEventListeners(closeSelector);
    this._popup.querySelector('.form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._cardId, this._cardItem);
      this.closePopup();
    });
  }
}