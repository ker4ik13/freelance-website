import React, { useEffect, useState, } from "react";
import { useParams, Link } from "react-router-dom";
import worksPosts from '../data/works.json'
import PostHeader from "../Ui/Posts/PostHeader";
import ArrowIcon from "../icons/arrow.svg"
import PostContent from "../Ui/Posts/PostContent";
import PostFooter from "../Ui/Posts/PostFooter";
import ArrowButton from "../Ui/Buttons/ArrowButton";


const PostPage = (props) => {

    const {postLink} = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        setPost(worksPosts[postLink], [postLink])
    })


    return(
        <main className="main">

            {post &&
            <div className="post__wrapper">

                <PostHeader
                post = {post}
                headerBg = {post.postImage}
                page='works'/>

                <PostContent
                post = {post}/>

                <PostFooter
                postLink = {postLink}
                post = {post}
                page='works'/>

            </div>   
            }

            {!post &&
            <div className="post__error">
                <Link to='../blog'>
                    <ArrowButton className='header__back-button' image = {ArrowIcon}/>
                </Link>
                <h2 className="post__error__title">Пост не найден :(</h2>
            </div>
            }
        </main>
    )
}

export default PostPage;