import React, { useState, useEffect } from "react";
import Header from "../Ui/Header";
import worksPosts from '../data/works.json'
import ShowMoreButton from "../Ui/Buttons/ShowMoreButton";
import WorkCard from "../Ui/Posts/WorkCard";

const Works = (props) => {

     // В будущем импортировать посты через Fetch

     const [posts, setPosts] = useState([]);
     const [postsView, setPostsView] = useState(3);

     useEffect(() => {
        setPosts(worksPosts)
     })

     const setCountPostsView = (event) => {
        event.preventDefault()
        if(postsView < posts.length){
            setPostsView(postsView + 3)
        } else if(postsView > posts.length){
            setPostsView(posts.length)
        } else {
            return;
        }
     }

     const viewAllPosts = (event) => {
        event.preventDefault()
        if(postsView < posts.length){
            setPostsView(posts.length)
        } else {
            return
        }
     }

     const viewSomePosts = (event) => {
        event.preventDefault()
        if(postsView >= posts.length){
            setPostsView(3)
        } else {
            return
        }
     }

    return(
        <main className="main">
        <Header
          title="Здесь представлены все наши работы"
          headerBg="./assets/img/headers/header-works.jpg"
        />
        <div className="main__title">

           {/* Вывод заголовка */}

           {postsView < posts.length &&
               <h1 className="main__name">Недавние работы ({postsView})</h1>
           }{postsView >= posts.length && 
               <h1 className="main__name">Все работы ({postsView})</h1>
           }

           {/* Вывод кнопки */}

          {postsView < posts.length  && 
               <button className="main__check-all" onClick={viewAllPosts}>Посмотреть все</button>
          }{postsView >= posts.length &&
               <button className="main__check-all" onClick={viewSomePosts}>Посмотреть недавние</button>
          }
        </div>
        <div className="posts">
          {posts
           // Выводим определенное кол-во постов    
            .slice(-postsView)
            .reverse()
            .map((post) => (
              <WorkCard post={post} key={post.postId} />
            ))}

          {postsView < posts.length  && (
            <ShowMoreButton 
            buttonId="showMore"
            buttonText="Показать еще"
            func={setCountPostsView}/>
          )}
        </div>
      </main>
    )
}

export default Works