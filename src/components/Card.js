export default class Card {
  constructor(
    { name, link, owner, _id },
    myId,
    cardSelector,
    { handleCardClick, openConfirmation, putLike, deleteLike }) {
    this._name = name;
    this._link = link;
    this._owner = owner._id;
    this._cardId = _id;
    this._myId = myId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._openConfirmation = openConfirmation;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
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
    this._element.querySelector('.card__button').addEventListener('click', () => {
      if (this._element.querySelector('.card__button').classList.contains('card__button_active')) {
        this._deleteLike(this._cardId, this._element)
      } else {
        this._putLike(this._cardId, this._element)
      }
    });
    this._element.querySelector('.card__recycle').addEventListener('click', () => this._openConfirmation(this._cardId, this._element));
    this._element.querySelector('.card__img').addEventListener('click', () => this._handleCardClick(this._link, this._name));
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__img').alt = this._name;
    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__title').textContent = this._name;

    if (this._owner !== this._myId) {
      this._element.querySelector('.card__recycle').remove()
    }
    return this._element;
  }
}