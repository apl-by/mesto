
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.classList.add('form__input-error_visible');
  errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_visible');
  errorElement.textContent = '';
}

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement)
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((elt) => {
    return !elt.validity.valid
  })
}

const toggleButtonState = (inputList, buttonElement) => {
if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('form__submit_disabled');
} else {
  buttonElement.classList.remove('form__submit_disabled');
}
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
  if (formElement.name === 'addForm') {
    toggleButtonState(inputList, buttonElement);
  }
  inputList.forEach((elt) => {
    elt.addEventListener('input', () => {
      isValid(formElement, elt);
      toggleButtonState(inputList, buttonElement);
    });
  })
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((elt) => {
    elt.addEventListener('submit', (evt) => evt.preventDefault());
    setEventListeners(elt);
  });
}

enableValidation()