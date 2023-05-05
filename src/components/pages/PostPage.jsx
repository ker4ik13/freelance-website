import React, { useEffect, useState, } from "react";
import { useParams, Link } from "react-router-dom";
import PostsInfo from '../data/Posts.json'
import PostHeader from "../Ui/Blog Posts/PostHeader";
import ArrowIcon from "../icons/arrow.svg"
import PostContent from "../Ui/Blog Posts/PostContent";
import PostFooter from "../Ui/Blog Posts/PostFooter";
import ArrowButton from "../Ui/Buttons/ArrowButton";


const PostPage = (props) => {

    const {postLink} = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        setPost(PostsInfo[postLink], [postLink])
    })


    return(
        <main className="main">

            {post &&
            <div className="post__wrapper">

                <PostHeader
                post = {post}
                headerBg = '../assets/img/posts/bitcoin-post.jpg'/>

                <PostContent
                post = {post}/>

                <PostFooter
                postLink = {postLink}
                post = {post}/>

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