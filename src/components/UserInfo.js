export default class UserInfo {
  constructor({ avatarSelector, nameSelector, jobSelector }) {
    this._avatar = document.querySelector(avatarSelector);
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    this._profileValues = {};
    this._profileValues['name'] = this._name.textContent;
    this._profileValues['about'] = this._job.textContent;
    return this._profileValues;
  }

  setUserInfo({ avatar, name, about }) {
    this._name.textContent = name;
    this._job.textContent = about;
    this._avatar.src = avatar
  }
}