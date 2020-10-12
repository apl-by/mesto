export default class Card {
  constructor(data, cardSelector, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.card__button').addEventListener('click', () => this._putLike());
    this._element.querySelector('.card__recycle').addEventListener('click', () => this._removeCard());
    this._element.querySelector('.card__img').addEventListener('click', () => this._zoomCard());
  }

  _putLike() {
    this._element.querySelector('.card__button').classList.toggle('card__button_active');
  }

  _removeCard() {
    this._element.remove()
    this._element = null;
  }

  _zoomCard() {
    const popupZoom = document.querySelector('.js-popup_zoomed');
    this._openPopup(popupZoom);
    popupZoom.querySelector('.zoom__img').src = this._link;
    popupZoom.querySelector('.zoom__img').alt = this._name;
    popupZoom.querySelector('.zoom__text').textContent = this._name;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__title').textContent = this._name;
    return this._element;
  }
}