import React from "react";
import { NavLink } from "react-router-dom";
import ToggleTheme from "./Buttons/ToggleTheme";

const Nav = (props) => {


    const changeTheme = (event) => {
         document.body.classList.toggle('dark-theme');
         if(document.body.classList.contains('dark-theme')){
             event.target.src='./assets/img/nav/sun.svg';
         } else if(event.target.src = './assets/img/nav/sun.svg'){
            event.target.src='./assets/img/nav/moon.svg';
         }
    }
    
    const burgerMenu = (event) => {
        const navBurger = document.querySelector('.nav__burger');
        const nav = document.querySelector('.nav');
        navBurger.classList.toggle('active');
        nav.classList.toggle('burger');
        document.querySelectorAll('.nav__link').forEach(item => {
            item.addEventListener('click', (event) => {
                navBurger.classList.remove('active');
                nav.classList.remove('burger')
            })
        })
    }

    return(
        <nav className="nav">
        <NavLink to="./" className='logo'>Logo</NavLink>
        <ul className="nav__links">
            <li><NavLink className='nav__link' to="/">Главная</NavLink></li>
            <li><NavLink className='nav__link' to="/blog">Наш блог</NavLink></li>
            <li><NavLink className='nav__link' to="/works">Работы</NavLink></li>
            <li><NavLink className='nav__link' to="/contacts">Контакты</NavLink></li>
        </ul>
        <ToggleTheme image = './assets/img/nav/moon.svg' function={changeTheme}/>
        <div className="nav__burger" onClick={burgerMenu}>
            <span className="nav__toggle__burger"></span>
            <span className="nav__toggle__burger"></span>
            <span className="nav__toggle__burger"></span>
        </div>
    </nav>
    )
}


export default Nav;