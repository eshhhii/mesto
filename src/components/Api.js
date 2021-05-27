export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getAllData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
    });
  }

  editUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
    });
  }

  editUserAvatar(url) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
    });
  }

  addCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
    });
  }

  likeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
    });
  }
}