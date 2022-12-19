import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  // const [isPopupClosed, setPopupClose] = React.useState(false);
  // function closeAllPopups() {
  //   setPopupClose(!isPopupClosed);
  // }
  
  return (
    <div className="root">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />
      <PopupWithForm name="photo" title="Редактировать аватар" isOpen={isEditAvatarPopupOpen}/>
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} />
      <PopupWithForm name="add-photo" title="Новое место" isOpen={isAddPlacePopupOpen} />
      {/* <template id="card-template">
        <li className="card">
          <button
            className="delete-button"
            type="button"
            aria-label="Кнопка удаления фото"
          ></button>
          <img
            className="card__image"
            src="#"
            alt="Альтернативный текст фото"
          />
          <div className="card__title-and-like">
            <h2 className="card__title"></h2>
            <div className="card__like">
              <button
                className="like-button like-button_inactive"
                type="button"
                aria-label="Кнопка 'Нравится'"
              ></button>
              <p className="card__like-counter"></p>
            </div>
          </div>
        </li>
      </template> */}
    </div>
  );
}

export default App;
