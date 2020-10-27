export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose.bind(this));
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape'){
      this.closePopup()
    }
  }

  setEventListeners() {
    this._popup.querySelector('.form__close').addEventListener('click', () => this.closePopup());
    // this._popup.addEventListener('click', (evt) => {
    //   if(evt.target === evt.currentTarget)
    //   this.closePopup()
    // });
  }
}