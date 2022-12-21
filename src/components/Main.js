import React from "react";
import { Api } from "../utils/api";
import { api } from "../utils/api";
import Card from "./Card";

function Main(props) {
  // Переменные состояния информации профиля
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("#");
  // Переменная состояния информации о карточках
  const [cards, setCards] = React.useState([]);

  // "Пробрасываем" обработчик открытия полноразмерной карточки
  const handleCardClick = props.onCardClick;

  // Функция эффекта для информации профиля
  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, [userName, userDescription, userAvatar]);

  // Функция эффекта для карточек
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, [cards]);

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
          <img className="profile__photo" src={userAvatar} alt="Фото профиля" />
        </div>
        <div className="profile__info-and-edit">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
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
            <Card card={card} onCardClick={handleCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
