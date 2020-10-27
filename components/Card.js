export default class Card {
  constructor(data, cardSelector, { handleCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._element.querySelector('.card__img').addEventListener('click', () => this._handleCardClick(this._link, this._name));
  }

  _putLike() {
    this._element.querySelector('.card__button').classList.toggle('card__button_active');
  }

  _removeCard() {
    this._element.remove()
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__title').textContent = this._name;
    return this._element;
  }
}