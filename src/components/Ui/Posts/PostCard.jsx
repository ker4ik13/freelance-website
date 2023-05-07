import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {

    const [post = props.post, setPost] = useState([]);

    useEffect(() => {
        setPost(props.post)
    })


    return(
        <Link to={`./${post.postId}`} className="post" id={post.postId}>
            <img src={props.post.postImage} className="post__img"/>
            <div className="post__preview">
                <h2 className="post__title">{props.post.postTitle}</h2>
                <p className="post__description">{props.post.postText}</p>
                <time className="post__date" dateTime={props.post.postDateTime}>{props.post.postDate}</time>
            </div>
        </Link>
    )
}

export default PostCard;