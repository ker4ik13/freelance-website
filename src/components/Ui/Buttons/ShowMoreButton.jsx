import React from "react";

const ShowMoreButton = (props) => {
    return(
        <button className="posts__button"  onClick = {props.func} id={props.buttonId}>{props.buttonText}</button>
    )
}

export default ShowMoreButton