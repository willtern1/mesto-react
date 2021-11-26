import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('') //хуки стейтов переменных названия и ссылки попаапа карточки
  //Функция изменения значений в setName по вводу с инпута
  function handleChangeName(e) {
    setName(e.target.value);
  }

  //Функция изменения значений в setLink по вводу с инпута
  function handleChangeLink(e) {
    setLink(e.target.value);
  }

// Сабмит новой карточки
  function handleAddPlaceSubmit(e) {
    e.preventDefault();

    props.onUpdateCard({
      name: name,
      link: link,
    });
  }

  React.useEffect(() => {
    if (props.isOpen) {
      setName('')
      setLink('')
    }
  },[props.isOpen])

  return (
    <PopupWithForm
      onSubmit={handleAddPlaceSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'add-place'}
      buttonText={'Создать'}
      title={'Новое место'}
    >
      <label htmlFor="card-name"/><input onChange={handleChangeName} className="popup__input popup__input_element_title"
                                         type="text"
                                         value={name || ""} placeholder="Название" id="card-name" name="name"
                                         minLength="2" maxLength="30" required/>
      <span id="card-name-error" className="popup__error"/>
      <label htmlFor="link"/><input onChange={handleChangeLink} className=" popup__input popup__input_element_link"
                                    type="url"
                                    value={link || ""} placeholder="Ссылка на картинку" id="link" name="link"
                                    required/>
      <span id="link-error" className="popup__error"/>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
