import React from "react";

const ToggleTheme = (props) => {
    return(
        <img className="nav__toggle-theme" id="js-toggle-theme" src={props.image} onClick={props.function}/>
    )
}

export default ToggleTheme