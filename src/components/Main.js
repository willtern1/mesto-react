import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function  Main (props) {
  const  [userInfo, setUserInfo] = React.useState({})
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardsInfo()]).then(([profileInfo, cards]) => {
        setUserInfo(profileInfo)
        setCards(cards)
    }).catch((err) => {
      alert(`Ошибка загрузки данных :  ${err.status}`)
    })
  }, [])

      return (
        <main className="content">

          <section aria-label="profile" className="profile">
            <div className="profile__avatar-container" onClick={props.refreshAvatar}/>
            <img className="profile__image" src={userInfo.avatar} alt={userInfo.name}/>
            <div className="profile__info">
              <h1 className="profile__name">{userInfo.name}</h1>
              <p className="profile__job">{userInfo.about}</p>
              <button aria-label="profile__edit-button" type="button" className="profile__edit-button" onClick={props.editProfilePopup}>
              </button>
            </div>
            <button aria-label="profile__add-card-button" type="button" className="profile__add-card-button" onClick={props.addCardPopup}/>
          </section>

          <section aria-label="elements" className="elements">
            {cards.map((card) => (
              <Card
                onCardClick={props.onCardClick}
                card ={card}
                link={card.link}
                name={card.name}
                likes ={card.likes.length}
              />
            ))}
          </section>

        </main>
      )
}

export  default  Main;
