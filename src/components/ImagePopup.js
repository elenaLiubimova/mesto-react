function ImagePopup(props) {
  return (
    <div className="popup popup_type_photo">
      <div className="popup__container popup__container_type_photo">
        <figure className="full-photo-container">
          <img className="full-photo" src="#" alt="Альтернативный текст фото" />
          <figcaption className="full-photo-container__caption"></figcaption>
        </figure>
        <button
          className="close-button"
          type="button"
          aria-label="Кнопка закрытия окна полноразмерного фото"
        ></button>
      </div>
    </div>
  );
}
