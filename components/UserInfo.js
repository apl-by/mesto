export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    this._profileValues = {};
    this._profileValues['nickname'] = this._name.textContent;
    this._profileValues['job'] = this._job.textContent;
    return this._profileValues
  }

  setUserInfo({ nickname, job }) {
    this._name.textContent = nickname;
    this._job.textContent = job;
  }

}