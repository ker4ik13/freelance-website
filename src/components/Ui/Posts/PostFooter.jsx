import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowButton from "../Buttons/ArrowButton";


const PostFooter = (props) => {

    const [postLink, setPostLink] = useState('');

    useEffect(() => {
        setPostLink(props.postLink)
    })


    return (
      <footer className="post__footer">
        {props.page === "blog" && (
          <div className="post__footer__wrapper">
            <Link
              className="post__footer__item"
              to={`/freelance-website/blog/${postLink + 1}`}>
              <ArrowButton
                image="../assets/img/arrow.svg"
                className="footer__back-button"/>
              <p className="post__footer__text">Предыдующая запись</p>
            </Link>

            <Link
              className="post__footer__item"
              to={`/freelance-website/blog/${+postLink - 1}`}>
              <p className="post__footer__text">Следующая запись</p>
              <ArrowButton
                image="../assets/img/arrow.svg"
                className="footer__prev-button"/>
            </Link>
          </div>
        )}{props.page === "works" && (
            <div className="post__footer__wrapper">
              <Link
                className="post__footer__item"
                to={`/freelance-website/works/${postLink + 1}`}>
                <ArrowButton
                  image="../assets/img/arrow.svg"
                  className="footer__back-button"/>
                <p className="post__footer__text">Предыдующая запись</p>
              </Link>
  
              <Link
                className="post__footer__item"
                to={`/freelance-website/works/${+postLink - 1}`}>
                <p className="post__footer__text">Следующая запись</p>
                <ArrowButton
                  image="../assets/img/arrow.svg"
                  className="footer__prev-button"/>
              </Link>
            </div>
          )}
      </footer>
    );
}

export default PostFooter