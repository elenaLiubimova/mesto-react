import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  
  function handleEditAvatarClick() {
    const popupTypePhoto = document.querySelector(".popup_type_photo");
    popupTypePhoto.classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    const popupTypeProfile = document.querySelector(".popup_type_profile");
    popupTypeProfile.classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    const popupTypeAddPhoto = document.querySelector(".popup_type_add-photo");
    popupTypeAddPhoto.classList.add("popup_opened");
  }
  
  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name="photo" title="Редактировать аватар" />;
      <PopupWithForm name="profile" title="Редактировать аватар" />;
      <PopupWithForm name="add-photo" title="Редактировать аватар" />;
      <template id="card-template">
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
      </template>
    </div>
  );
}

export default App;
