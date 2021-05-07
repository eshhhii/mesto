export default class Card {
    constructor(name, link, cardSelector, handleCardClick) {
        this._title = name;
        this._link = link;
        this._handleCardClick = handleCardClick;
        this._card = cardSelector;
        this._element = this._getTemplate();
        this._imageCard = this._element.querySelector(".element__image"); 
        this._like = this._element.querySelector(".element__like"); 
    }

    _getTemplate() {
        const newCard = this._card.content.querySelector(".element").cloneNode(true);

        return newCard;
    }
    generateCard() {
        this.setEventListeners();
        this._element.querySelector(".element__title").textContent = this._title;
        this._imageCard.src = this._link;
        this._imageCard.alt = this._title;

        return this._element;
    }

    setEventListeners() {
        this._element.querySelector(".element__bin").addEventListener("click", () => {
            this._deleteCard();
        });
        this._like.addEventListener("click", () => {
            this._likeCard();
        });
        this._imageCard.addEventListener("click", () => {
            this._handleCardClick();
        });
    }

    _likeCard() {
        this._like.classList.toggle("element__like_active");
    }

    _deleteCard() {
        this._api._deleteCard(this._id)
        .then(()=>{
            this._element.remove();
        })
        .catch((err)=>{
            console.log(err);
        })
    }

}