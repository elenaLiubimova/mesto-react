function Main(props) {
  // function handleEditAvatarClick() {
  //   const popupTypePhoto = document.querySelector(".popup_type_photo");
  //   popupTypePhoto.classList.add("popup_opened");
  // }

  // function handleEditProfileClick() {
  //   const popupTypeProfile = document.querySelector(".popup_type_profile");
  //   popupTypeProfile.classList.add("popup_opened");
  // }

  // function handleAddPlaceClick() {
  //   const popupTypeAddPhoto = document.querySelector(".popup_type_add-photo");
  //   popupTypeAddPhoto.classList.add("popup_opened");
  // }

  return (
    <main>
      <section className="profile container">
        <div className="profile__photo-container">
          <button
            className="edit-button edit-button_type_photo"
            type="button"
            aria-label="Кнопка редактирования аватара"
            onClick={handleEditAvatarClick}
          ></button>
          <img className="profile__photo" src="#" alt="Фото профиля" />
        </div>
        <div className="profile__info-and-edit">
          <h1 className="profile__title"></h1>
          <p className="profile__subtitle"></p>
          <button
            className="edit-button edit-button_type_profile"
            type="button"
            aria-label="Кнопка редактирования профиля"
            onClick={handleEditProfileClick}
          ></button>
        </div>
        <button
          className="add-button"
          type="button"
          aria-label="Кнопка добавления фотографий"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section
        className="photos container"
        aria-label="Карточки с фотографиями"
      >
        <ul className="photos__cards"></ul>
      </section>
    </main>
  );
}

export default Main;
