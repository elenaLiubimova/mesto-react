import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";
import Card from "./Card";

function Main(props) {
  // Переменные состояния информации профиля
  // const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState("#");
  // // Переменная состояния информации о карточках
  // const [cards, setCards] = useState([]);

  // "Пробрасываем" обработчик открытия полноразмерной карточки
  const handleCardClick = props.onCardClick;

  const {currentUser, cards} = useContext(CurrentUserContext);
  console.log(cards);

  // Функция эффекта для данных профиля и карточки
  // useEffect(() => {
  //   Promise.all([api.getProfileInfo(), api.getInitialCards()])
  //     .then(([userData, cardsData]) => {
  //       setUserName(userData.name);
  //       setUserDescription(userData.about);
  //       setUserAvatar(userData.avatar);

  //       setCards(cardsData);
  //     })
  //     .catch((error) => console.log(`Ошибка: ${error}`));
  // }, [
  //   props.onEditProfile,
  //   props.onAddPlace,
  //   props.onEditAvatar,
  //   props.onCardClick,
  // ]);

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
          <img className="profile__photo" src={currentUser.avatar} alt="Фото профиля" />
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
          {/* {cards.map((card, i) => (
            <Card card={card} onCardClick={handleCardClick} key={card._id} />
          ))} */}
        </ul>
      </section>
    </main>
  );
}

export default Main;
