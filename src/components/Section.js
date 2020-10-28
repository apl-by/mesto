export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
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