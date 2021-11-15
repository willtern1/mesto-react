import React from "react";

function Card(props) {

  //jsx карточек
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <button className="element__trash-button" type="button" aria-label="element__trash-button"/>
      <img className="element__image" src={props.link} alt={props.name} onClick={handleClick}/>
      <div className="element__description">
        <h2 className="element__text">{props.name}</h2>
        <button aria-label="element__button" type="button" className="element__button"/>
        <p className="element__button-likes-counter">{props.likes}</p>
      </div>
    </article>
  )
}

export default Card
