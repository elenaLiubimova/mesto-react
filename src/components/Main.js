import React from "react";
import { api } from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("#");
  const [cards, setCards] = React.useState([]);
  console.log(cards)

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));

    api
      .getInitialCards()
      .then((cardsData) => {
        // setCards([...cards, cardsData]);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  });

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
        {/* {cards.map((card, i) => (
          <ul className="photos__cards" key={i}>
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
                <h2 className="card__title">{card.name}</h2>
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
          </ul>
        ))} */}
      </section>
    </main>
  );
}

export default Main;
