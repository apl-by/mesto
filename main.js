/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Api
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(options) {
    _classCallCheck(this, Api);

    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _createClass(Api, [{
    key: "_handleResponse",
    value: function _handleResponse(res) {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        headers: this._headers
      }).then(this._handleResponse);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        headers: this._headers
      }).then(this._handleResponse);
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(info) {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(info)
      }).then(this._handleResponse);
    }
  }, {
    key: "addNewCard",
    value: function addNewCard(info) {
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(info)
      }).then(this._handleResponse);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId), {
        method: 'DELETE',
        headers: this._headers,
        body: JSON.stringify()
      }).then(this._handleResponse);
    }
  }, {
    key: "putLike",
    value: function putLike(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(cardId), {
        method: 'PUT',
        headers: this._headers,
        body: JSON.stringify()
      }).then(this._handleResponse);
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(cardId), {
        method: 'DELETE',
        headers: this._headers,
        body: JSON.stringify()
      }).then(this._handleResponse);
    }
  }, {
    key: "editAvatar",
    value: function editAvatar(link) {
      return fetch("".concat(this._baseUrl, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: link
        })
      }).then(this._handleResponse);
    }
  }]);

  return Api;
}();



/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Card
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, myId, cardSelector, _ref2) {
    var name = _ref.name,
        link = _ref.link,
        owner = _ref.owner,
        _id = _ref._id,
        likes = _ref.likes;
    var zoomImage = _ref2.zoomImage,
        openConfirmation = _ref2.openConfirmation,
        putLike = _ref2.putLike,
        deleteLike = _ref2.deleteLike;

    _classCallCheck(this, Card);

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

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.querySelector('.card__button').addEventListener('click', function () {
        if (_this._element.querySelector('.card__button').classList.contains('card__button_active')) {
          _this._deleteLike(_this._cardId, _this._displayLike.bind(_this));
        } else {
          _this._putLike(_this._cardId, _this._displayLike.bind(_this));
        }
      });

      this._element.querySelector('.card__recycle').addEventListener('click', function () {
        return _this._openConfirmation(_this._cardId, _this._element);
      });

      this._element.querySelector('.card__img').addEventListener('click', function () {
        return _this._zoomImage(_this._link, _this._name);
      });
    }
  }, {
    key: "_displayLike",
    value: function _displayLike(res) {
      this._element.querySelector('.card__button').classList.toggle('card__button_active');

      this._element.querySelector('.card__like-counter').textContent = res.likes.length;
    }
  }, {
    key: "_setLikes",
    value: function _setLikes() {
      var _this2 = this;

      this._element.querySelector('.card__like-counter').textContent = this._likes.length;

      if (this._likes.some(function (item) {
        return item._id === _this2._myId;
      })) {
        this._element.querySelector('.card__button').classList.add('card__button_active');
      }
    }
  }, {
    key: "_setDeleteBtn",
    value: function _setDeleteBtn() {
      if (this._owner !== this._myId) {
        this._element.querySelector('.card__recycle').remove();
      }
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();

      this._setEventListeners();

      this._element.querySelector('.card__img').alt = this._name;
      this._element.querySelector('.card__img').src = this._link;
      this._element.querySelector('.card__title').textContent = this._name;

      this._setDeleteBtn();

      this._setLikes();

      return this._element;
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FormValidator
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(data, formElement) {
    _classCallCheck(this, FormValidator);

    this._formElement = formElement;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(formElement, inputElement, errorMessage) {
      var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.add(this._inputErrorClass);
      errorElement.classList.add(this._errorClass);
      errorElement.textContent = errorMessage;
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(formElement, inputElement) {
      var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "_isValid",
    value: function _isValid(formElement, inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(formElement, inputElement);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput(inputList) {
      return inputList.some(function (input) {
        return !input.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
      } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.removeAttribute('disabled', true);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(formElement) {
      var _this = this;

      var inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
      var buttonElement = formElement.querySelector(this._submitButtonSelector);
      inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this._isValid(formElement, inputElement);

          _this._toggleButtonState(inputList, buttonElement);
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener('submit', function (evt) {
        return evt.preventDefault();
      });

      this._setEventListeners(this._formElement);
    }
  }]);

  return FormValidator;
}();



/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Popup
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "openPopup",
    value: function openPopup() {
      this._popup.classList.add('popup_opened');

      document.addEventListener('keyup', this._handleEscClose);
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this._popup.classList.remove('popup_opened');

      document.removeEventListener('keyup', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.closePopup();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners(closeSelector) {
      var _this = this;

      this._popup.querySelector(closeSelector).addEventListener('click', function () {
        return _this.closePopup();
      });

      this._popup.addEventListener('click', function (evt) {
        if (evt.target === evt.currentTarget) _this.closePopup();
      });
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupConfirm.js":
/*!****************************************!*\
  !*** ./src/components/PopupConfirm.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PopupConfirm
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupConfirm, _Popup);

  var _super = _createSuper(PopupConfirm);

  function PopupConfirm(_ref, popupSelector) {
    var _this;

    var submitForm = _ref.submitForm;

    _classCallCheck(this, PopupConfirm);

    _this = _super.call(this, popupSelector);
    _this._submitForm = submitForm;
    return _this;
  }

  _createClass(PopupConfirm, [{
    key: "openPopup",
    value: function openPopup(cardId, cardItem) {
      _get(_getPrototypeOf(PopupConfirm.prototype), "openPopup", this).call(this);

      this._cardId = cardId;
      this._cardItem = cardItem;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners(closeSelector) {
      var _this2 = this;

      _get(_getPrototypeOf(PopupConfirm.prototype), "setEventListeners", this).call(this, closeSelector);

      this._popup.querySelector('.form').addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this2._submitForm(_this2._cardId, _this2._cardItem);

        _this2.closePopup();
      });
    }
  }]);

  return PopupConfirm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PopupWithForm
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref, popupSelector) {
    var _this;

    var submitForm = _ref.submitForm;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._submitForm = submitForm;
    _this._btnSelector = _this._popup.querySelector('.form__submit');
    _this._defaultBtnValue = _this._btnSelector.textContent;
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      var inputList = this._popup.querySelectorAll('.form__input');

      this._formValues = {};
      inputList.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });
      return this._formValues;
    }
  }, {
    key: "setBtnValue",
    value: function setBtnValue(value) {
      value ? this._btnSelector.textContent = value : this._btnSelector.textContent = this._defaultBtnValue;
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "closePopup", this).call(this);

      this._popup.querySelector('.form').reset();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners(closeSelector) {
      var _this3 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this, closeSelector);

      this._popup.querySelector('.form').addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this3._submitForm(_this3._getInputValues(), _this3.closePopup.bind(_this3));
      });
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PopupWithImage
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage() {
    _classCallCheck(this, PopupWithImage);

    return _super.apply(this, arguments);
  }

  _createClass(PopupWithImage, [{
    key: "openPopup",
    value: function openPopup(link, name) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "openPopup", this).call(this);

      this._popup.querySelector('.zoom__img').alt = name;
      this._popup.querySelector('.zoom__img').src = link;
      this._popup.querySelector('.zoom__text').textContent = name;
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Section
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(data) {
      var _this = this;

      this._items = data;

      this._items.forEach(function (cardData) {
        _this._renderer(cardData);
      });
    }
  }, {
    key: "addItemAppend",
    value: function addItemAppend(cardElement) {
      this._container.append(cardElement);
    }
  }, {
    key: "addItemPrepend",
    value: function addItemPrepend(cardElement) {
      this._container.prepend(cardElement);
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ UserInfo
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var avatarSelector = _ref.avatarSelector,
        nameSelector = _ref.nameSelector,
        jobSelector = _ref.jobSelector;

    _classCallCheck(this, UserInfo);

    this._avatar = document.querySelector(avatarSelector);
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      this._profileValues = {};
      this._profileValues['name'] = this._name.textContent;
      this._profileValues['about'] = this._job.textContent;
      return this._profileValues;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var avatar = _ref2.avatar,
          name = _ref2.name,
          about = _ref2.about;
      this._name.textContent = name;
      this._job.textContent = about;
      this._avatar.src = avatar;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_PopupConfirm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupConfirm.js */ "./src/components/PopupConfirm.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var myId;
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.default({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: 'b2a2a541-6bef-4eb9-91cd-396f84ba323f',
    'Content-Type': 'application/json'
  }
});
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_10__.default('.js-popup_zoomed');
popupWithImage.setEventListeners('.zoom__close');

var zoomImage = function zoomImage(link, name) {
  popupWithImage.openPopup(link, name);
};

var openConfirmation = function openConfirmation(cardId, cardItem) {
  popupDeleteCard.openPopup(cardId, cardItem);
};

var putLike = function putLike(cardId, displayLike) {
  api.putLike(cardId).then(function (res) {
    displayLike(res);
  })["catch"](function (err) {
    return console.log(err);
  });
};

var deleteLike = function deleteLike(cardId, displayLike) {
  api.deleteLike(cardId).then(function (res) {
    displayLike(res);
  })["catch"](function (err) {
    return console.log(err);
  });
};

var renderCard = function renderCard(cardData) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_9__.default(cardData, myId, '.js-card-template', {
    zoomImage: zoomImage,
    openConfirmation: openConfirmation,
    putLike: putLike,
    deleteLike: deleteLike
  });
  var cardElement = card.generateCard();
  return cardElement;
};

var insertCard = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.default({
  renderer: function renderer(cardData) {
    insertCard.addItemAppend(renderCard(cardData));
  }
}, '.cards__list');
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__.default({
  avatarSelector: '.profile__avatar',
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
});
Promise.all([api.getInitialCards(), api.getUserInfo()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      initialCards = _ref2[0],
      userParam = _ref2[1];

  myId = userParam._id;
  insertCard.renderItems(initialCards);
  userInfo.setUserInfo(userParam);
})["catch"](function (err) {
  return console.log(err);
});
var popupAddForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.default({
  submitForm: function submitForm(formValues, closePopup) {
    popupAddForm.setBtnValue('Сохранение...');
    api.addNewCard(formValues).then(function (res) {
      insertCard.addItemPrepend(renderCard(res));
      closePopup();
    })["catch"](function (err) {
      return console.log(err);
    })["finally"](function () {
      return popupAddForm.setBtnValue();
    });
  }
}, '.js-popup_form_add');
popupAddForm.setEventListeners('.form__close');
var popupEditForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.default({
  submitForm: function submitForm(info, closePopup) {
    popupEditForm.setBtnValue('Сохранение...');
    api.updateUserInfo(info).then(function (res) {
      userInfo.setUserInfo(res);
      closePopup();
    })["catch"](function (err) {
      return console.log(err);
    })["finally"](function () {
      return popupEditForm.setBtnValue();
    });
  }
}, '.js-popup_form_edit');
popupEditForm.setEventListeners('.form__close');
var popupEditAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.default({
  submitForm: function submitForm(info, closePopup) {
    popupEditAvatar.setBtnValue('Сохранение...');
    api.editAvatar(info.link).then(function (res) {
      userInfo.setUserInfo(res);
      closePopup();
    })["catch"](function (err) {
      return console.log(err);
    })["finally"](function () {
      return popupEditAvatar.setBtnValue();
    });
  }
}, '.js-popup_form_avatar');
popupEditAvatar.setEventListeners('.form__close');
var popupDeleteCard = new _components_PopupConfirm_js__WEBPACK_IMPORTED_MODULE_8__.default({
  submitForm: function submitForm(cardId, cardItem) {
    api.deleteCard(cardId).then(function () {
      cardItem.remove();
    })["catch"](function (err) {
      return console.log(err);
    });
  }
}, '.js-popup_delete');
popupDeleteCard.setEventListeners('.form__close');
var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validationSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editForm);
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validationSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addForm);
var avatarFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validationSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editAvatarForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.profileEdit.addEventListener('click', function () {
  (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.setInputValues)(userInfo.getUserInfo());
  popupEditForm.openPopup();
  (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.setDefaultState)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editForm);
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.profileAdd.addEventListener('click', function () {
  popupAddForm.openPopup();
  (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.setDefaultState)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addForm);
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.profilEditAvatar.addEventListener('click', function () {
  popupEditAvatar.openPopup();
  (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.setDefaultState)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editAvatarForm);
});

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! namespace exports */
/*! export addForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export editAvatarForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export editForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export firstInputEdit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export popupAddForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export popupAvatarForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export popupEditForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export profilEditAvatar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export profile [provided] [no usage info] [missing usage info prevents renaming] */
/*! export profileAdd [provided] [no usage info] [missing usage info prevents renaming] */
/*! export profileEdit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export secondInputEdit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export validationSelectors [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validationSelectors": () => /* binding */ validationSelectors,
/* harmony export */   "profile": () => /* binding */ profile,
/* harmony export */   "profileEdit": () => /* binding */ profileEdit,
/* harmony export */   "profileAdd": () => /* binding */ profileAdd,
/* harmony export */   "profilEditAvatar": () => /* binding */ profilEditAvatar,
/* harmony export */   "popupEditForm": () => /* binding */ popupEditForm,
/* harmony export */   "editForm": () => /* binding */ editForm,
/* harmony export */   "firstInputEdit": () => /* binding */ firstInputEdit,
/* harmony export */   "secondInputEdit": () => /* binding */ secondInputEdit,
/* harmony export */   "popupAddForm": () => /* binding */ popupAddForm,
/* harmony export */   "addForm": () => /* binding */ addForm,
/* harmony export */   "popupAvatarForm": () => /* binding */ popupAvatarForm,
/* harmony export */   "editAvatarForm": () => /* binding */ editAvatarForm
/* harmony export */ });
var validationSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};
var profile = document.querySelector('.profile');
var profileEdit = profile.querySelector('.profile__edit-button');
var profileAdd = profile.querySelector('.profile__add-button');
var profilEditAvatar = profile.querySelector('.profile__avatar-btn');
var popupEditForm = document.querySelector('.js-popup_form_edit');
var editForm = popupEditForm.querySelector('.form');
var firstInputEdit = popupEditForm.querySelector('input[name="name"]');
var secondInputEdit = popupEditForm.querySelector('input[name="about"]');
var popupAddForm = document.querySelector('.js-popup_form_add');
var addForm = popupAddForm.querySelector('.form');
var popupAvatarForm = document.querySelector('.js-popup_form_avatar');
var editAvatarForm = popupAvatarForm.querySelector('.form');

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! namespace exports */
/*! export setDefaultState [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setInputValues [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setInputValues": () => /* binding */ setInputValues,
/* harmony export */   "setDefaultState": () => /* binding */ setDefaultState
/* harmony export */ });
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");

var setInputValues = function setInputValues(profileValues) {
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.firstInputEdit.value = profileValues.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.secondInputEdit.value = profileValues.about;
}; // возвращает дефолтное состояние полям ввода после валидации при повторном открытии формы

var setDefaultState = function setDefaultState(formElement) {
  var inputList = Array.from(formElement.querySelectorAll('.form__input'));
  var buttonElement = formElement.querySelector('.form__submit');
  inputList.forEach(function (inputElement) {
    var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_visible');
    errorElement.textContent = '';
  });

  if (formElement === document.forms.editForm) {
    buttonElement.classList.remove('form__submit_disabled');
    buttonElement.removeAttribute('disabled', 'disabled');
  } else if (formElement === document.forms.addForm || document.forms.avatarForm) {
    buttonElement.classList.add('form__submit_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
  }
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/pages/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJBcGkiLCJvcHRpb25zIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2hlYWRlcnMiLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsImZldGNoIiwidGhlbiIsIl9oYW5kbGVSZXNwb25zZSIsImluZm8iLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhcmRJZCIsImxpbmsiLCJhdmF0YXIiLCJDYXJkIiwibXlJZCIsImNhcmRTZWxlY3RvciIsIm5hbWUiLCJvd25lciIsIl9pZCIsImxpa2VzIiwiem9vbUltYWdlIiwib3BlbkNvbmZpcm1hdGlvbiIsInB1dExpa2UiLCJkZWxldGVMaWtlIiwiX25hbWUiLCJfbGluayIsIl9vd25lciIsIl9jYXJkSWQiLCJfbGlrZXMiLCJfbXlJZCIsIl9jYXJkU2VsZWN0b3IiLCJfem9vbUltYWdlIiwiX29wZW5Db25maXJtYXRpb24iLCJfcHV0TGlrZSIsIl9kZWxldGVMaWtlIiwiY2FyZEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfZGlzcGxheUxpa2UiLCJiaW5kIiwidG9nZ2xlIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJzb21lIiwiaXRlbSIsImFkZCIsInJlbW92ZSIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImFsdCIsInNyYyIsIl9zZXREZWxldGVCdG4iLCJfc2V0TGlrZXMiLCJGb3JtVmFsaWRhdG9yIiwiZGF0YSIsImZvcm1FbGVtZW50IiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJpbnB1dExpc3QiLCJpbnB1dCIsImJ1dHRvbkVsZW1lbnQiLCJfaGFzSW52YWxpZElucHV0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfaXNWYWxpZCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsImNsb3NlUG9wdXAiLCJjbG9zZVNlbGVjdG9yIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIlBvcHVwQ29uZmlybSIsInN1Ym1pdEZvcm0iLCJfc3VibWl0Rm9ybSIsImNhcmRJdGVtIiwiX2NhcmRJdGVtIiwiUG9wdXBXaXRoRm9ybSIsIl9idG5TZWxlY3RvciIsIl9kZWZhdWx0QnRuVmFsdWUiLCJfZm9ybVZhbHVlcyIsInZhbHVlIiwicmVzZXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJQb3B1cFdpdGhJbWFnZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIl9pdGVtcyIsImNhcmREYXRhIiwiYXBwZW5kIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwiYXZhdGFyU2VsZWN0b3IiLCJuYW1lU2VsZWN0b3IiLCJqb2JTZWxlY3RvciIsIl9hdmF0YXIiLCJfam9iIiwiX3Byb2ZpbGVWYWx1ZXMiLCJhYm91dCIsImFwaSIsImF1dGhvcml6YXRpb24iLCJwb3B1cFdpdGhJbWFnZSIsInNldEV2ZW50TGlzdGVuZXJzIiwib3BlblBvcHVwIiwicG9wdXBEZWxldGVDYXJkIiwiZGlzcGxheUxpa2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyQ2FyZCIsImNhcmQiLCJnZW5lcmF0ZUNhcmQiLCJpbnNlcnRDYXJkIiwiYWRkSXRlbUFwcGVuZCIsInVzZXJJbmZvIiwiYWxsIiwiZ2V0SW5pdGlhbENhcmRzIiwiZ2V0VXNlckluZm8iLCJpbml0aWFsQ2FyZHMiLCJ1c2VyUGFyYW0iLCJyZW5kZXJJdGVtcyIsInNldFVzZXJJbmZvIiwicG9wdXBBZGRGb3JtIiwiZm9ybVZhbHVlcyIsInNldEJ0blZhbHVlIiwiYWRkTmV3Q2FyZCIsImFkZEl0ZW1QcmVwZW5kIiwicG9wdXBFZGl0Rm9ybSIsInVwZGF0ZVVzZXJJbmZvIiwicG9wdXBFZGl0QXZhdGFyIiwiZWRpdEF2YXRhciIsImRlbGV0ZUNhcmQiLCJlZGl0Rm9ybVZhbGlkYXRvciIsInZhbGlkYXRpb25TZWxlY3RvcnMiLCJlZGl0Rm9ybSIsImFkZEZvcm1WYWxpZGF0b3IiLCJhZGRGb3JtIiwiYXZhdGFyRm9ybVZhbGlkYXRvciIsImVkaXRBdmF0YXJGb3JtIiwiZW5hYmxlVmFsaWRhdGlvbiIsInByb2ZpbGVFZGl0Iiwic2V0SW5wdXRWYWx1ZXMiLCJzZXREZWZhdWx0U3RhdGUiLCJwcm9maWxlQWRkIiwicHJvZmlsRWRpdEF2YXRhciIsImZvcm1TZWxlY3RvciIsInByb2ZpbGUiLCJmaXJzdElucHV0RWRpdCIsInNlY29uZElucHV0RWRpdCIsInBvcHVwQXZhdGFyRm9ybSIsInByb2ZpbGVWYWx1ZXMiLCJmb3JtcyIsImF2YXRhckZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsRztBQUNuQixlQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtDLFFBQUwsR0FBZ0JELE9BQU8sQ0FBQ0UsT0FBeEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCSCxPQUFPLENBQUNJLE9BQXhCO0FBQ0Q7Ozs7b0NB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O0FBTUEsTUFBSWMsV0FBVyxLQUFLekIsUUFBUSxDQUFDd0osS0FBVCxDQUFlakIsUUFBbkMsRUFBNkM7QUFDM0N2RixpQkFBYSxDQUFDMUMsU0FBZCxDQUF3QlUsTUFBeEIsQ0FBK0IsdUJBQS9CO0FBQ0FnQyxpQkFBYSxDQUFDRyxlQUFkLENBQThCLFVBQTlCLEVBQTBDLFVBQTFDO0FBQ0QsR0FIRCxNQUdPLElBQUkxQixXQUFXLEtBQUt6QixRQUFRLENBQUN3SixLQUFULENBQWVmLE9BQS9CLElBQTBDekksUUFBUSxDQUFDd0osS0FBVCxDQUFlQyxVQUE3RCxFQUF5RTtBQUM5RXpHLGlCQUFhLENBQUMxQyxTQUFkLENBQXdCUyxHQUF4QixDQUE0Qix1QkFBNUI7QUFDQWlDLGlCQUFhLENBQUNFLFlBQWQsQ0FBMkIsVUFBM0IsRUFBdUMsVUFBdkM7QUFDRDtBQUNGLENBaEJNLEM7Ozs7Ozs7Ozs7Ozs7O0FDWFA7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybDtcclxuICAgIHRoaXMuX2hlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlUmVzcG9uc2UocmVzKSB7XHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcclxuICB9XHJcblxyXG4gIGdldEluaXRpYWxDYXJkcygpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4odGhpcy5faGFuZGxlUmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgIH0pXHJcbiAgICAudGhlbih0aGlzLl9oYW5kbGVSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVVc2VySW5mbyhpbmZvKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5mbylcclxuICAgIH0pXHJcbiAgICAudGhlbih0aGlzLl9oYW5kbGVSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWRkTmV3Q2FyZChpbmZvKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbmZvKVxyXG4gICAgfSlcclxuICAgIC50aGVuKHRoaXMuX2hhbmRsZVJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhcmQoY2FyZElkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSgpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4odGhpcy5faGFuZGxlUmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgcHV0TGlrZShjYXJkSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KClcclxuICAgIH0pXHJcbiAgICAudGhlbih0aGlzLl9oYW5kbGVSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVMaWtlKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoKVxyXG4gICAgfSlcclxuICAgIC50aGVuKHRoaXMuX2hhbmRsZVJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIGVkaXRBdmF0YXIobGluaykge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGF2YXRhcjogbGluayB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHRoaXMuX2hhbmRsZVJlc3BvbnNlKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHsgbmFtZSwgbGluaywgb3duZXIsIF9pZCwgbGlrZXMgfSxcclxuICAgIG15SWQsXHJcbiAgICBjYXJkU2VsZWN0b3IsXHJcbiAgICB7IHpvb21JbWFnZSwgb3BlbkNvbmZpcm1hdGlvbiwgcHV0TGlrZSwgZGVsZXRlTGlrZSB9KSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBsaW5rO1xyXG4gICAgdGhpcy5fb3duZXIgPSBvd25lci5faWQ7XHJcbiAgICB0aGlzLl9jYXJkSWQgPSBfaWQ7XHJcbiAgICB0aGlzLl9saWtlcyA9IGxpa2VzO1xyXG4gICAgdGhpcy5fbXlJZCA9IG15SWQ7XHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICB0aGlzLl96b29tSW1hZ2UgPSB6b29tSW1hZ2U7XHJcbiAgICB0aGlzLl9vcGVuQ29uZmlybWF0aW9uID0gb3BlbkNvbmZpcm1hdGlvbjtcclxuICAgIHRoaXMuX3B1dExpa2UgPSBwdXRMaWtlO1xyXG4gICAgdGhpcy5fZGVsZXRlTGlrZSA9IGRlbGV0ZUxpa2U7XHJcbiAgfVxyXG5cclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2J1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnY2FyZF9fYnV0dG9uX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlTGlrZSh0aGlzLl9jYXJkSWQsIHRoaXMuX2Rpc3BsYXlMaWtlLmJpbmQodGhpcykpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fcHV0TGlrZSh0aGlzLl9jYXJkSWQsIHRoaXMuX2Rpc3BsYXlMaWtlLmJpbmQodGhpcykpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fcmVjeWNsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb3BlbkNvbmZpcm1hdGlvbih0aGlzLl9jYXJkSWQsIHRoaXMuX2VsZW1lbnQpKTtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fem9vbUltYWdlKHRoaXMuX2xpbmssIHRoaXMuX25hbWUpKTtcclxuICB9XHJcblxyXG4gIF9kaXNwbGF5TGlrZShyZXMpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2J1dHRvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRfX2J1dHRvbl9hY3RpdmUnKTtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UtY291bnRlcicpLnRleHRDb250ZW50ID0gcmVzLmxpa2VzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIF9zZXRMaWtlcygpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UtY291bnRlcicpLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZXMubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMuX2xpa2VzLnNvbWUoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0uX2lkID09PSB0aGlzLl9teUlkXHJcbiAgICB9KSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdjYXJkX19idXR0b25fYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0RGVsZXRlQnRuKCkge1xyXG4gICAgaWYgKHRoaXMuX293bmVyICE9PSB0aGlzLl9teUlkKSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3JlY3ljbGUnKS5yZW1vdmUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1nJykuYWx0ID0gdGhpcy5fbmFtZTtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltZycpLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190aXRsZScpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuXHJcbiAgICB0aGlzLl9zZXREZWxldGVCdG4oKTtcclxuICAgIHRoaXMuX3NldExpa2VzKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBkYXRhLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IGRhdGEuc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gZGF0YS5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gZGF0YS5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gZGF0YS5lcnJvckNsYXNzO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgX2lzVmFsaWQoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpIHtcclxuICAgIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dC52YWxpZGl0eS52YWxpZFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIGJ1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICBidXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCkge1xyXG4gICAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcclxuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICAgIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2lzVmFsaWQoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IGV2dC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMuX2Zvcm1FbGVtZW50KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb3BlblBvcHVwKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuXHJcbiAgfVxyXG5cclxuICBjbG9zZVBvcHVwKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKGNsb3NlU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoY2xvc2VTZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsb3NlUG9wdXAoKSk7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBDb25maXJtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgc3VibWl0Rm9ybSB9LCBwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3N1Ym1pdEZvcm0gPSBzdWJtaXRGb3JtO1xyXG4gIH1cclxuXHJcbiAgb3BlblBvcHVwKGNhcmRJZCwgY2FyZEl0ZW0pIHtcclxuICAgIHN1cGVyLm9wZW5Qb3B1cCgpO1xyXG4gICAgdGhpcy5fY2FyZElkID0gY2FyZElkO1xyXG4gICAgdGhpcy5fY2FyZEl0ZW0gPSBjYXJkSXRlbTtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKGNsb3NlU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKGNsb3NlU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLmZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRGb3JtKHRoaXMuX2NhcmRJZCwgdGhpcy5fY2FyZEl0ZW0pO1xyXG4gICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBzdWJtaXRGb3JtIH0sIHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fc3VibWl0Rm9ybSA9IHN1Ym1pdEZvcm07XHJcbiAgICB0aGlzLl9idG5TZWxlY3RvciA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQnKTtcclxuICAgIHRoaXMuX2RlZmF1bHRCdG5WYWx1ZSA9IHRoaXMuX2J0blNlbGVjdG9yLnRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgY29uc3QgaW5wdXRMaXN0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0Jyk7XHJcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XHJcbiAgICBpbnB1dExpc3QuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRCdG5WYWx1ZSh2YWx1ZSkge1xyXG4gICAgKHZhbHVlKSA/IHRoaXMuX2J0blNlbGVjdG9yLnRleHRDb250ZW50ID0gdmFsdWUgOlxyXG4gICAgIHRoaXMuX2J0blNlbGVjdG9yLnRleHRDb250ZW50ID0gdGhpcy5fZGVmYXVsdEJ0blZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpIHtcclxuICAgIHN1cGVyLmNsb3NlUG9wdXAoKTtcclxuICAgIHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJykucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKGNsb3NlU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKGNsb3NlU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLmZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRGb3JtKHRoaXMuX2dldElucHV0VmFsdWVzKCksIHRoaXMuY2xvc2VQb3B1cC5iaW5kKHRoaXMpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSAiLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBvcGVuUG9wdXAobGluaywgbmFtZSkge1xyXG4gICAgc3VwZXIub3BlblBvcHVwKCk7XHJcbiAgICB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcuem9vbV9faW1nJykuYWx0ID0gbmFtZTtcclxuICAgIHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy56b29tX19pbWcnKS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnpvb21fX3RleHQnKS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3Ioe3JlbmRlcmVyfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckl0ZW1zKGRhdGEpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gZGF0YTtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goY2FyZERhdGEgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihjYXJkRGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW1BcHBlbmQoY2FyZEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQoY2FyZEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbVByZXBlbmQoY2FyZEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBhdmF0YXJTZWxlY3RvciwgbmFtZVNlbGVjdG9yLCBqb2JTZWxlY3RvciB9KSB7XHJcbiAgICB0aGlzLl9hdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGF2YXRhclNlbGVjdG9yKTtcclxuICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9qb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYlNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgdGhpcy5fcHJvZmlsZVZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5fcHJvZmlsZVZhbHVlc1snbmFtZSddID0gdGhpcy5fbmFtZS50ZXh0Q29udGVudDtcclxuICAgIHRoaXMuX3Byb2ZpbGVWYWx1ZXNbJ2Fib3V0J10gPSB0aGlzLl9qb2IudGV4dENvbnRlbnQ7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvZmlsZVZhbHVlcztcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKHsgYXZhdGFyLCBuYW1lLCBhYm91dCB9KSB7XHJcbiAgICB0aGlzLl9uYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuX2pvYi50ZXh0Q29udGVudCA9IGFib3V0O1xyXG4gICAgdGhpcy5fYXZhdGFyLnNyYyA9IGF2YXRhclxyXG4gIH1cclxufSIsImltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7XHJcbiAgdmFsaWRhdGlvblNlbGVjdG9ycyxcclxuICBwcm9maWxlRWRpdCxcclxuICBwcm9maWxlQWRkLFxyXG4gIGVkaXRGb3JtLFxyXG4gIGFkZEZvcm0sXHJcbiAgcHJvZmlsRWRpdEF2YXRhcixcclxuICBlZGl0QXZhdGFyRm9ybVxyXG59IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7XHJcbiAgc2V0RGVmYXVsdFN0YXRlLFxyXG4gIHNldElucHV0VmFsdWVzXHJcbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vY29tcG9uZW50cy9BcGkuanMnO1xyXG5pbXBvcnQgUG9wdXBDb25maXJtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBDb25maXJtLmpzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5cclxubGV0IG15SWRcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xyXG4gIGJhc2VVcmw6ICdodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTE3JyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBhdXRob3JpemF0aW9uOiAnYjJhMmE1NDEtNmJlZi00ZWI5LTkxY2QtMzk2Zjg0YmEzMjNmJyxcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5qcy1wb3B1cF96b29tZWQnKVxyXG5wb3B1cFdpdGhJbWFnZS5zZXRFdmVudExpc3RlbmVycygnLnpvb21fX2Nsb3NlJyk7XHJcblxyXG5jb25zdCB6b29tSW1hZ2UgPSAobGluaywgbmFtZSkgPT4ge1xyXG4gIHBvcHVwV2l0aEltYWdlLm9wZW5Qb3B1cChsaW5rLCBuYW1lKTtcclxufVxyXG5cclxuY29uc3Qgb3BlbkNvbmZpcm1hdGlvbiA9IChjYXJkSWQsIGNhcmRJdGVtKSA9PiB7XHJcbiAgcG9wdXBEZWxldGVDYXJkLm9wZW5Qb3B1cChjYXJkSWQsIGNhcmRJdGVtKVxyXG59XHJcblxyXG5jb25zdCBwdXRMaWtlID0gKGNhcmRJZCwgZGlzcGxheUxpa2UpID0+IHtcclxuICBhcGkucHV0TGlrZShjYXJkSWQpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlMaWtlKHJlcyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVMaWtlID0gKGNhcmRJZCwgZGlzcGxheUxpa2UpID0+IHtcclxuICBhcGkuZGVsZXRlTGlrZShjYXJkSWQpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlMaWtlKHJlcyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJDYXJkID0gKGNhcmREYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLCBteUlkLCAnLmpzLWNhcmQtdGVtcGxhdGUnLCB7XHJcbiAgICB6b29tSW1hZ2UsXHJcbiAgICBvcGVuQ29uZmlybWF0aW9uLFxyXG4gICAgcHV0TGlrZSxcclxuICAgIGRlbGV0ZUxpa2VcclxuICB9KTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBpbnNlcnRDYXJkID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgcmVuZGVyZXI6IChjYXJkRGF0YSkgPT4ge1xyXG4gICAgICBpbnNlcnRDYXJkLmFkZEl0ZW1BcHBlbmQocmVuZGVyQ2FyZChjYXJkRGF0YSkpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgJy5jYXJkc19fbGlzdCdcclxuKTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKFxyXG4gIHtcclxuICAgIGF2YXRhclNlbGVjdG9yOiAnLnByb2ZpbGVfX2F2YXRhcicsXHJcbiAgICBuYW1lU2VsZWN0b3I6ICcucHJvZmlsZV9fbmFtZScsXHJcbiAgICBqb2JTZWxlY3RvcjogJy5wcm9maWxlX19qb2InXHJcbiAgfVxyXG4pO1xyXG5cclxuUHJvbWlzZS5hbGwoW1xyXG4gIGFwaS5nZXRJbml0aWFsQ2FyZHMoKSxcclxuICBhcGkuZ2V0VXNlckluZm8oKVxyXG5dKVxyXG4gIC50aGVuKChbaW5pdGlhbENhcmRzLCB1c2VyUGFyYW1dKSA9PiB7XHJcbiAgICBteUlkID0gdXNlclBhcmFtLl9pZFxyXG4gICAgaW5zZXJ0Q2FyZC5yZW5kZXJJdGVtcyhpbml0aWFsQ2FyZHMpO1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8odXNlclBhcmFtKVxyXG4gIH0pXHJcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcbmNvbnN0IHBvcHVwQWRkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIHtcclxuICAgIHN1Ym1pdEZvcm06IChmb3JtVmFsdWVzLCBjbG9zZVBvcHVwKSA9PiB7XHJcbiAgICAgIHBvcHVwQWRkRm9ybS5zZXRCdG5WYWx1ZSgn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nKTtcclxuICAgICAgYXBpLmFkZE5ld0NhcmQoZm9ybVZhbHVlcylcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpbnNlcnRDYXJkLmFkZEl0ZW1QcmVwZW5kKHJlbmRlckNhcmQocmVzKSlcclxuICAgICAgICAgIGNsb3NlUG9wdXAoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHBvcHVwQWRkRm9ybS5zZXRCdG5WYWx1ZSgpKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgJy5qcy1wb3B1cF9mb3JtX2FkZCdcclxuKTtcclxucG9wdXBBZGRGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCcuZm9ybV9fY2xvc2UnKTtcclxuXHJcblxyXG5jb25zdCBwb3B1cEVkaXRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAge1xyXG4gICAgc3VibWl0Rm9ybTogKGluZm8sIGNsb3NlUG9wdXApID0+IHtcclxuICAgICAgcG9wdXBFZGl0Rm9ybS5zZXRCdG5WYWx1ZSgn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nKTtcclxuICAgICAgYXBpLnVwZGF0ZVVzZXJJbmZvKGluZm8pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzKVxyXG4gICAgICAgICAgY2xvc2VQb3B1cCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gcG9wdXBFZGl0Rm9ybS5zZXRCdG5WYWx1ZSgpKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgJy5qcy1wb3B1cF9mb3JtX2VkaXQnXHJcbik7XHJcbnBvcHVwRWRpdEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoJy5mb3JtX19jbG9zZScpO1xyXG5cclxuXHJcbmNvbnN0IHBvcHVwRWRpdEF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIHtcclxuICAgIHN1Ym1pdEZvcm06IChpbmZvLCBjbG9zZVBvcHVwKSA9PiB7XHJcbiAgICAgIHBvcHVwRWRpdEF2YXRhci5zZXRCdG5WYWx1ZSgn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nKTtcclxuICAgICAgYXBpLmVkaXRBdmF0YXIoaW5mby5saW5rKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcylcclxuICAgICAgICAgIGNsb3NlUG9wdXAoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHBvcHVwRWRpdEF2YXRhci5zZXRCdG5WYWx1ZSgpKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgJy5qcy1wb3B1cF9mb3JtX2F2YXRhcidcclxuKTtcclxucG9wdXBFZGl0QXZhdGFyLnNldEV2ZW50TGlzdGVuZXJzKCcuZm9ybV9fY2xvc2UnKTtcclxuXHJcblxyXG5jb25zdCBwb3B1cERlbGV0ZUNhcmQgPSBuZXcgUG9wdXBDb25maXJtKHtcclxuICBzdWJtaXRGb3JtOiAoY2FyZElkLCBjYXJkSXRlbSkgPT4ge1xyXG4gICAgYXBpLmRlbGV0ZUNhcmQoY2FyZElkKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY2FyZEl0ZW0ucmVtb3ZlKClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIH1cclxufSxcclxuICAnLmpzLXBvcHVwX2RlbGV0ZSdcclxuKTtcclxucG9wdXBEZWxldGVDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCcuZm9ybV9fY2xvc2UnKVxyXG5cclxuXHJcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvblNlbGVjdG9ycywgZWRpdEZvcm0pO1xyXG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvblNlbGVjdG9ycywgYWRkRm9ybSk7XHJcbmNvbnN0IGF2YXRhckZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2VsZWN0b3JzLCBlZGl0QXZhdGFyRm9ybSk7XHJcblxyXG5cclxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuYXZhdGFyRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5wcm9maWxlRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzZXRJbnB1dFZhbHVlcyh1c2VySW5mby5nZXRVc2VySW5mbygpKTtcclxuICBwb3B1cEVkaXRGb3JtLm9wZW5Qb3B1cCgpO1xyXG4gIHNldERlZmF1bHRTdGF0ZShlZGl0Rm9ybSk7XHJcbn0pO1xyXG5cclxucHJvZmlsZUFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cEFkZEZvcm0ub3BlblBvcHVwKCk7XHJcbiAgc2V0RGVmYXVsdFN0YXRlKGFkZEZvcm0pO1xyXG59KTtcclxuXHJcbnByb2ZpbEVkaXRBdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBFZGl0QXZhdGFyLm9wZW5Qb3B1cCgpO1xyXG4gIHNldERlZmF1bHRTdGF0ZShlZGl0QXZhdGFyRm9ybSk7XHJcbn0pXHJcbiIsImV4cG9ydCBjb25zdCB2YWxpZGF0aW9uU2VsZWN0b3JzID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogJy5mb3JtJyxcclxuICBpbnB1dFNlbGVjdG9yOiAnLmZvcm1fX2lucHV0JyxcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5mb3JtX19zdWJtaXQnLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdmb3JtX19zdWJtaXRfZGlzYWJsZWQnLFxyXG4gIGlucHV0RXJyb3JDbGFzczogJ2Zvcm1fX2lucHV0X3R5cGVfZXJyb3InLFxyXG4gIGVycm9yQ2xhc3M6ICdmb3JtX19pbnB1dC1lcnJvcl92aXNpYmxlJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlJyk7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlRWRpdCA9IHByb2ZpbGUucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQtYnV0dG9uJyk7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlQWRkID0gcHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkLWJ1dHRvbicpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsRWRpdEF2YXRhciA9IHByb2ZpbGUucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhci1idG4nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3B1cEVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBvcHVwX2Zvcm1fZWRpdCcpO1xyXG5leHBvcnQgY29uc3QgZWRpdEZvcm0gPSBwb3B1cEVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbmV4cG9ydCBjb25zdCBmaXJzdElucHV0RWRpdCA9IHBvcHVwRWRpdEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKTtcclxuZXhwb3J0IGNvbnN0IHNlY29uZElucHV0RWRpdCA9IHBvcHVwRWRpdEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFib3V0XCJdJyk7XHJcblxyXG5leHBvcnQgY29uc3QgcG9wdXBBZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBvcHVwX2Zvcm1fYWRkJyk7XHJcbmV4cG9ydCBjb25zdCBhZGRGb3JtID0gcG9wdXBBZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcblxyXG5leHBvcnQgY29uc3QgcG9wdXBBdmF0YXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBvcHVwX2Zvcm1fYXZhdGFyJyk7XHJcbmV4cG9ydCBjb25zdCBlZGl0QXZhdGFyRm9ybSA9IHBvcHVwQXZhdGFyRm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1xyXG4gIGZpcnN0SW5wdXRFZGl0LFxyXG4gIHNlY29uZElucHV0RWRpdCxcclxufSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldElucHV0VmFsdWVzID0gKHByb2ZpbGVWYWx1ZXMpID0+IHtcclxuICBmaXJzdElucHV0RWRpdC52YWx1ZSA9IHByb2ZpbGVWYWx1ZXMubmFtZTtcclxuICBzZWNvbmRJbnB1dEVkaXQudmFsdWUgPSBwcm9maWxlVmFsdWVzLmFib3V0O1xyXG59XHJcblxyXG4vLyDQstC+0LfQstGA0LDRidCw0LXRgiDQtNC10YTQvtC70YLQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC/0L7Qu9GP0Lwg0LLQstC+0LTQsCDQv9C+0YHQu9C1INCy0LDQu9C40LTQsNGG0LjQuCDQv9GA0Lgg0L/QvtCy0YLQvtGA0L3QvtC8INC+0YLQutGA0YvRgtC40Lgg0YTQvtGA0LzRi1xyXG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdFN0YXRlID0gKGZvcm1FbGVtZW50KSA9PiB7XHJcbiAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9faW5wdXQnKSk7XHJcbiAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQnKTtcclxuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9faW5wdXRfdHlwZV9lcnJvcicpO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm1fX2lucHV0LWVycm9yX3Zpc2libGUnKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH0pO1xyXG4gIGlmIChmb3JtRWxlbWVudCA9PT0gZG9jdW1lbnQuZm9ybXMuZWRpdEZvcm0pIHtcclxuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3VibWl0X2Rpc2FibGVkJyk7XHJcbiAgICBidXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICB9IGVsc2UgaWYgKGZvcm1FbGVtZW50ID09PSBkb2N1bWVudC5mb3Jtcy5hZGRGb3JtIHx8IGRvY3VtZW50LmZvcm1zLmF2YXRhckZvcm0pIHtcclxuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9ybV9fc3VibWl0X2Rpc2FibGVkJyk7XHJcbiAgICBidXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=