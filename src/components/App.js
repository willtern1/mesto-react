import '../index.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup";
import React from "react";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState();



  function openProfilePopup() {
    setIsEditProfilePopupOpen(true)
  }

  function openCardAddPopup() {
    setIsAddPlacePopupOpen(true)
  }

  function openAvatarPopup() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(false)
  }

  return (
    <div className='App'>
      <button className="body__music-icon " type="button"/>
      <div className="page">
        <audio className="audio" src="../sound/The_Mole_320kbps.mp3" type="audio/mpeg" loop/>
        <Header/>
        <Main
          editProfilePopup={openProfilePopup}
          addCardPopup ={openCardAddPopup}
          refreshAvatar = {openAvatarPopup}
          onCardClick={handleCardClick}
        />
        <Footer/>
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name={'edit-profile'}
          buttonText={'Сохранить'}
          title={'Редактировать профиль'}
          children={(
            <>
              <label htmlFor="name"/><input className="popup__input popup__input_element_name" type="text"
                                            value="" placeholder="Введите имя" id="name" name="name"
                                            minLength="2" maxLength="40" required/>
              <span id="name-error" className="popup__error"/>
              <label htmlFor="about"/><input className=" popup__input popup__input_element_job" type="text"
                                             value="" placeholder="Введите профессию" id="about" name="about"
                                             minLength="2" maxLength="200" required/>
              <span id="about-error" className="popup__error"/>
            </>
          )
          }
        />

        <PopupWithForm
            isOpen = {isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name={'add-place'}
            buttonText={'Создать'}
            title={'Новое место'}
                children = {(
                  <>
                    <label htmlFor="card-name"/><input className="popup__input popup__input_element_title" type="text"
                                                       value="" placeholder="Название" id="card-name" name="name"
                                                       minLength="2" maxLength="30" required/>
                    <span id="card-name-error" className="popup__error"/>
                    <label htmlFor="link"/><input className=" popup__input popup__input_element_link" type="url"
                                                  value="" placeholder="Ссылка на картинку" id="link" name="link"
                                                  required/>
                    <span id="link-error" className="popup__error"/>
                  </>
                )}
        />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={'add-avatar'}
          buttonText={'Сохранить'}
          title={' Обновить аватар'}
                  children ={(
                      <>
                        <label htmlFor="avatar-link"/><input className=" popup__input popup__input_avatar_link" type="url"
                                                             value="" placeholder="Ссылка на аватар" id="avatar-link"
                                                             name="avatar" required/>
                        <span id="avatar-link-error" className="popup__error"/>
                      </>
                  )}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
