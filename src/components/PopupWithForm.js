function  PopupWithForm(props) { //jxs для форм с попапом
    return (
      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}` }>
        <div className="popup__container ">
          <button className="popup__close-icon " type="button" onClick={props.onClose}/>
          <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}-popup`}>
            <h2 className="popup__title ">{props.title}</h2>
            {props.children}
            <button className="popup__button " type="submit">{props.buttonText}</button>
          </form>
        </div>
      </div>
    )
}

export  default  PopupWithForm;
