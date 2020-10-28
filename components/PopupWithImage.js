import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  openPopup(link, name) {
    super.openPopup();
    this._popup.querySelector('.zoom__img').alt = name;
    this._popup.querySelector('.zoom__img').src = link;
    this._popup.querySelector('.zoom__text').textContent = name;
  }
}