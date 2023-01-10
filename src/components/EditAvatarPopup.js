import React, { useState, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const [avatar, setAvatar] = useState('');
  const inputRef = useRef();

  function handleAvatarInput() {
    setAvatar(inputRef.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar(avatar);
  }
  
  return (
    <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={props.isOpen}
          onClose={props.onClose}
          buttonText="Сохранить"
          onSubmit={(e) => handleSubmit(e)}
          children={
            <label className="edit-form__field">
              <input
                className="edit-form__item"
                ref={inputRef}
                value={avatar}
                onChange={handleAvatarInput}
                id="avatar-input"
                type="url"
                name="avatar"
                placeholder="Ссылка на аватар"
                required
              />
              <span className="edit-form__item-error avatar-input-error"></span>
            </label>
          }
        />
  );
}

export default EditAvatarPopup;