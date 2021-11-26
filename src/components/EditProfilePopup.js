import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";


function EditProfilePopup(props) {
  const [name, setName] = React.useState(''); //Хуки стейтов
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
//хук для смены стандартных значений переменных(полей инпутов)
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [props.isOpen, currentUser])

  // Функция  перезаписи значений переменой setName от инпутов
  function handleChangeName(e) {
    setName(e.target.value);
  }

  // Функция  перезаписи значений переменой setDescription от инпутов
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

//Сабмит новых значений профиля
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'edit-profile'}
      buttonText={'Сохранить'}
      title={'Редактировать профиль'}
    >
      <label htmlFor="name"/><input className="popup__input popup__input_element_name" type="text"
                                    value={name || ""} placeholder="Введите имя" id="name" name="name"
                                    minLength="2" maxLength="40" onChange={handleChangeName}/>
      <span id="name-error" className="popup__error"/>
      <label htmlFor="about"/><input className=" popup__input popup__input_element_job" type="text"
                                     value={description || ""} placeholder="Введите профессию" id="about" name="about"
                                     minLength="2" maxLength="200" required
                                     onChange={handleChangeDescription}/>
      <span id="about-error" className="popup__error"/>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
