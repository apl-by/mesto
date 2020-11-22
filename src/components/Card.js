export default class Card {
  constructor(
    { name, link, owner, _id, likes },
    myId,
    cardSelector,
    { zoomImage, openConfirmation, putLike, deleteLike }) {
    this._name = name;
    this._link = link;
    this._owner = owner._id;
    this._cardId = _id;
    this._likes = likes;
    this._myId = myId;
    this._cardSelector = cardSelector;
    this._zoomImage = zoomImage;
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
        this._deleteLike(this._cardId, this._displayLike.bind(this))
      } else {
        this._putLike(this._cardId, this._displayLike.bind(this))
      }
    });
    this._element.querySelector('.card__recycle').addEventListener('click', () => this._openConfirmation(this._cardId, this._element));
    this._element.querySelector('.card__img').addEventListener('click', () => this._zoomImage(this._link, this._name));
  }

  _displayLike(res) {
    this._element.querySelector('.card__button').classList.toggle('card__button_active');
    this._element.querySelector('.card__like-counter').textContent = res.likes.length;
  }

  _setLikes() {
    this._element.querySelector('.card__like-counter').textContent = this._likes.length;
    if (this._likes.some((item) => {
      return item._id === this._myId
    })) {
      this._element.querySelector('.card__button').classList.add('card__button_active');
    }
  }

  _setDeleteBtn() {
    if (this._owner !== this._myId) {
      this._element.querySelector('.card__recycle').remove()
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__img').alt = this._name;
    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__title').textContent = this._name;

    this._setDeleteBtn();
    this._setLikes();
    return this._element;
  }
}