import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleNameInput(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionInput(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    api.getProfileInfo().then((currentUser) => {
      setName(currentUser.name);
      setDescription(currentUser.about);
    })
    .catch((error) => console.log(`Ошибка: ${error}`));

  }, [currentUser]);
  
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={(e) => handleSubmit(e)}
      children={
        <>
          <label className="edit-form__field">
            <input
              className="edit-form__item"
              id="name-input"
              value={name}
              onChange={handleNameInput}
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
              value={description}
              onChange={handleDescriptionInput}
              placeholder="Профессия"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="edit-form__item-error job-input-error"></span>
          </label>
        </>
      }
    />
  );
};

export default EditProfilePopup;
