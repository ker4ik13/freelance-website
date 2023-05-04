import React from "react";

const Header = (props) => {
    return(
        <header className="header">
            <h2 className="header__title">{props.title}</h2>
            <img className="header__bg" src={props.headerBg}/>
        </header>
    )
}

export default Header