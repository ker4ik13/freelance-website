import React, { useEffect, useState, } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from '../data/posts.json'
import PostHeader from "../Ui/Posts/PostHeader";
import ArrowIcon from "../icons/arrow.svg"
import PostContent from "../Ui/Posts/PostContent";
import PostFooter from "../Ui/Posts/PostFooter";
import ArrowButton from "../Ui/Buttons/ArrowButton";


const PostPage = (props) => {

    const {postLink} = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        setPost(blogPosts[postLink], [postLink])
    })


    return(
        <main className="main">

            {post &&
            <div className="post__wrapper">

                <PostHeader
                post = {post}
                headerBg = {`../${post.postImage}`}
                page='blog'/>

                <PostContent
                post = {post}/>

                <PostFooter
                postLink = {postLink}
                post = {post}
                page='blog'/>

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