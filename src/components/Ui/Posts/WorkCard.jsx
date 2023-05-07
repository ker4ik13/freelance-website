import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const WorkCard = (props) => {

    const [post = props.post, setPost] = useState([]);

    useEffect(() => {
        setPost(props.post)
    })


    return(
        <Link to={`./${post.postId}`} className="blog__post" id={post.postId}>
            <img src={props.post.postImage} className="blog__post__img"/>
            <div className="blog__post__preview">
                <h2 className="post__title">{props.post.postTitle}</h2>
                <p className="post__description">{props.post.postDescription}</p>
            </div>
        </Link>
    )
}

export default WorkCard;