import PopupWithForm from "./PopupWithForm";
import React from "react";


function EditAvatarPopup(props) {
  const avatarRef = React.useRef(''); //реф хук для прямого доступа к инпуту в дом
//сабмит  атватара
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'add-avatar'}
      buttonText={'Сохранить'}
      title={' Обновить аватар'}
    >
      <label htmlFor="avatar-link"/><input ref={avatarRef} className=" popup__input popup__input_avatar_link" type="url"
                                           defaultValue="" placeholder="Ссылка на аватар" id="avatar-link"
                                           name="avatar" required/>
      <span id="avatar-link-error" className="popup__error"/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
