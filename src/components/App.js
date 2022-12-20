import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups(e) {
    e.target.closest(".popup").classList.remove("popup_opened");
  }

  function handleCardClick(card) {
    setSelectedCard(selectedCard);
  }

  return (
    <div className="root">
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
    </div>
  );
}

export default App;
