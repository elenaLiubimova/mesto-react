function Card(props) {
  // Функция открытия полноразмерного фото
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card" key={props.card._id}>
      <button
        className="delete-button"
        type="button"
        aria-label="Кнопка удаления фото"
      ></button>
      <img
        className="card__image"
        src={props.card.link}
        alt="Альтернативный текст фото"
        onClick={handleClick}
      />
      <div className="card__title-and-like">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button
            className="like-button like-button_inactive"
            type="button"
            aria-label="Кнопка 'Нравится'"
          ></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
