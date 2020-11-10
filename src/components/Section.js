export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(data) {
    this._items = data;
    this._items.forEach(cardData => {
      this._renderer(cardData);
    });
  }

  addItemAppend(cardElement) {
    this._container.append(cardElement);
  }

  addItemPrepend(cardElement) {
    this._container.prepend(cardElement);
  }
}