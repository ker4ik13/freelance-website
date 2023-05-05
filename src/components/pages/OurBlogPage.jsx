import React, { useState, useEffect } from "react";
import PostItem from "../Ui/Blog Posts/PostCard";
import postsInfo from '../data/Posts.json'
import ShowMoreButton from "../Ui/Buttons/ShowMoreButton";
import Header from "../Ui/Header";

const Blog = (props) => {

     // В будущем импортировать посты через Fetch

     const [posts, setPosts] = useState([]);

     useEffect(() => {
        setPosts(postsInfo)
     })

     return(
        <main className="main">
            <Header
                title = 'Добро пожаловать в наш Блог'
                headerBg = './assets/img/headers/header-blog.jpg'
            />
            <div className="main__title">
                <h1 className="main__name">Недавние посты</h1>
                {posts.length>3 &&
                    <button className="main__check-all">Посмотреть все</button>
                }
            </div>
            <div className="posts">
                {posts.map((post) =>
                    <PostItem post = {post}  key = {post.postId}/>
                )}
                {posts.length > 3 && 
                    <ShowMoreButton
                    buttonId = 'showMore'
                    buttonText = 'Показать еще'
                    />
                }
            </div>
        </main>
     )
}

export default Blog