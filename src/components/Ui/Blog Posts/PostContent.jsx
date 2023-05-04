import React, { useEffect, useState } from "react";

const PostContent = (props) => {

    const [post, setPost] = useState([])

    useEffect(() => {
        setPost(props.post)
    })


    return(
        <main className="post_content">
            <p className="post__content__text">{post.postDescription}</p>
            <p className="post__content__text">{post.postDescription}</p>
            <p className="post__content__text">{post.postDescription}</p>
            <p className="post__content__text">{post.postDescription}</p>
            <p className="post__content__text">{post.postDescription}</p>
            <p className="post__content__text">{post.postDescription}</p>
        </main>
    )
}

export default PostContent