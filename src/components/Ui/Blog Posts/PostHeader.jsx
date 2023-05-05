import React from "react";
import { Link } from "react-router-dom";
// import clockIcon from '../../icons/clock.svg'
// import ArrowIcon from "../../icons/arrow.svg"
import ArrowButton from "../Buttons/ArrowButton";

const PostHeader = (props) => {
    return(
        <header className="header__post">
            <div className="header__nav">
                <div className="header__wrapper">
                    <Link to='/freelance-website/blog'><ArrowButton
                     image = '../../assets/img/arrow.svg'
                     className="header__back-button"/></Link>
                    {/* Исправить пропсы */}
                    <h1 className="header__post__title">{props.post.postTitle}</h1>
                </div>
                <div className="header__wrapper">
                
                    <img src='../../assets/img/clock.svg'
                    className="header__date-img"/>
                    <time className="header__date" dateTime={props.post.postDateTime}>{props.post.postDate}</time>
                </div>
            </div>
            <div className="header__image">
                <img className="header__bg header__unblur" src={props.headerBg}/>
            </div>
        </header>
    )
}

export default PostHeader;