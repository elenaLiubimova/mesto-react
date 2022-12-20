function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? `popup popup_opened popup_type_${props.name}` : `popup popup_type_${props.name}`}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <form className="edit-form" name={props.name} noValidate>
          <h2 className="edit-form__title">{props.title}</h2>
          {props.children}
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
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;