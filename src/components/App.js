import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  // Переменная состояния попапа установки аватара
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  // Переменная состояния попапа редактирования профиля
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  // Переменная состояния попапа добавления карточки
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  // Переменная состояния карточек
  const [selectedCard, setSelectedCard] = React.useState();

  // Обработчик кнопки редактирования аватара
  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  // Обработчик кнопки редактирования профиля
  function handleEditProfileClick() {
    setProfilePopupOpen(!isEditProfilePopupOpen);
  }

  // Обработчик кнопки добавления карточки
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  // Обработчик открытия полноразмерной карточки
  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  // Обработчик закрытия всех попапов
  function closeAllPopups() {
    setSelectedCard(null);
    setAvatarPopupOpen();
    setProfilePopupOpen();
    setAddPlacePopupOpen();
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <label className="edit-form__field">
            <input
              className="edit-form__item"
              id="avatar-input"
              type="url"
              name="avatar"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="edit-form__item-error avatar-input-error"></span>
          </label>
        }
      />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="edit-form__field">
              <input
                className="edit-form__item"
                id="name-input"
                type="text"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="edit-form__item-error name-input-error"></span>
            </label>
            <label className="edit-form__field">
              <input
                className="edit-form__item"
                id="job-input"
                type="text"
                name="job"
                placeholder="Профессия"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="edit-form__item-error job-input-error"></span>
            </label>
          </>
        }
      />
      <PopupWithForm
        name="add-photo"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="edit-form__field">
              <input
                className="edit-form__item"
                id="place-input"
                type="text"
                name="name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="edit-form__item-error place-input-error"></span>
            </label>
            <label className="edit-form__field">
              <input
                className="edit-form__item"
                id="photo-input"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="edit-form__item-error photo-input-error"></span>
            </label>
          </>
        }
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
