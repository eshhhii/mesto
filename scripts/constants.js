export const popup = document.querySelector(".popup");
export const popupEdit = document.querySelector(".popup_edit");
export const popupAdd = document.querySelector(".popup_add");
export const popupImage = document.querySelector(".popup_images");
export const showPopupEditProfileButton = document.querySelector(".profile__edit");
export const closePopupButton = document.querySelector(".popup__close");
export const showPopupAddButton = document.querySelector(".profile__add");
export const closePopupAddButton = popupAdd.querySelector(".popup__close");
export const closeImagePopupButton = popupImage.querySelector(".popup__close");
export const userName = document.querySelector(".profile__name");
export const userJob = document.querySelector(".profile__job");
export const nameInput = document.querySelector("#username");
export const jobInput = document.querySelector("#userjob");
export const container = document.querySelector(".elements__list");
export const popupForm = document.querySelector(".popup__form");
export const addCard = document.querySelector("#popupFormAdd");
export const inputName = addCard.querySelector("#placeName");
export const inputPlace = addCard.querySelector("#placeLink");
export const popupImageName = popupImage.querySelector(".popup__title");
export const popupImageCard = popupImage.querySelector(".popup__image");
export const templateElement = document.querySelector(".template");
export const addButton = addCard.querySelector(".popup__save");
export const formEditProfile = document.querySelector(".popup__container");
export const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};