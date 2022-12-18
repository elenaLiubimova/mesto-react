function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <form className="edit-form" name={props.name} noValidate>
          <h2 className="edit-form__title">{props.title}</h2>
          {/* {props.children} */}
          {/* <label className="edit-form__field">
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
          </label> */}
          <button
            className="save-button"
            type="submit"
            aria-label="Кнопка сохранения данных"
          >
            Сохранить
          </button>
        </form>
        <button
          className="close-button"
          type="button"
          aria-label="Кнопка закрытия попапа"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;