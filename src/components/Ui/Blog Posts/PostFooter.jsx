import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import ArrowIcon from "../../icons/arrow.svg"
import ArrowButton from "../Buttons/ArrowButton";


const PostFooter = (props) => {

    const [post, setPost] = useState([])
    const [postLink, setPostLink] = useState('');

    useEffect(() => {
        setPost(props.post)
        setPostLink(props.postLink)
    })


    return(
        <footer className="post__footer">
            <Link className="post__footer__item" to={`/freelance-website/blog/${(postLink)-1}`}>
                <ArrowButton
                image = '../../assets/img/arrow.svg'
                className='footer__back-button'/>
                <p className="post__footer__text">Предыдующая запись</p>
            </Link>
            
            <Link className="post__footer__item" to={`/freelance-website/blog/${+(postLink)+1}`}>
                <p className="post__footer__text">Следующая запись</p>
                <ArrowButton
                image = '../../assets/img/arrow.svg'
                className='footer__prev-button'/>
            </Link>

        </footer>
    )
}

export default PostFooter