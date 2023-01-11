import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main(props) {
  // "Пробрасываем" обработчики открытия полноразмерной карточки и лайка
  const handleCardClick = props.onCardClick;
  const handleCardLike = props.onCardLike;
  const handleCardDelete = props.onCardDelete;

  const { currentUser, cards } = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile container">
        <div className="profile__photo-container">
          <button
            className="edit-button edit-button_type_photo"
            type="button"
            aria-label="Кнопка редактирования аватара"
            onClick={props.onEditAvatar}
          ></button>
          <img
            className="profile__photo"
            src={currentUser.avatar}
            alt="Фото профиля"
          />
        </div>
        <div className="profile__info-and-edit">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
          <button
            className="edit-button edit-button_type_profile"
            type="button"
            aria-label="Кнопка редактирования профиля"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="add-button"
          type="button"
          aria-label="Кнопка добавления фотографий"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section
        className="photos container"
        aria-label="Карточки с фотографиями"
      >
        <ul className="photos__cards">
          {/* Отрисовка карточек с сервера */}
          {cards.map((card, i) => (
            <Card
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
