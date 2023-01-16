import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { FormValidatorContext } from "../contexts/FormValidatorContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ onUpdateUser, isOpen, onClose }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameInput(evt) {
    setName(evt.target.value);
    console.log(evt.target.value.length);
    if (2 > evt.target.value.length || evt.target.value.length > 40) {
      setError(`Текст должен быть не короче 2 симв. и не длиннее 40 симв.`);
      console.log(error);
    }
  }

  function handleDescriptionInput(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    // <FormValidatorContext.Provider>
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={(evt) => handleSubmit(evt)}
    >
      <label className="edit-form__field">
        <input
          className="edit-form__item"
          id="name-input"
          value={name || ""}
          onChange={handleNameInput}
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="edit-form__item-error name-input-error">{error}</span>
      </label>
      <label className="edit-form__field">
        <input
          className="edit-form__item"
          id="job-input"
          type="text"
          name="job"
          value={description || ""}
          onChange={handleDescriptionInput}
          placeholder="Профессия"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="edit-form__item-error job-input-error">{error}</span>
      </label>
    </PopupWithForm>
    // </FormValidatorContext.Provider>
  );
};

export default EditProfilePopup;
