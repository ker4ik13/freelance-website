import React from "react";
import { NavLink } from "react-router-dom";
import ToggleTheme from "./Buttons/ToggleTheme";

// Icons
// import moonImage from '../icons/moon.svg';
// import sunImage from '../icons/sun.svg';
// import yellowSun from '../icons/yellow-sun.svg'


const Nav = (props) => {

    const changeTheme = (event) => {
         document.body.classList.toggle('dark-theme');
         if(document.body.classList.contains('dark-theme')){
             event.target.src='./assets/img/nav/sun.svg';
         } else if(event.target.src = './assets/img/nav/sun.svg'){
            event.target.src='./assets/img/nav/moon.svg';
         }
    }

    return(
        <nav className="nav">
        <NavLink to="/" className='logo'>Logo</NavLink>
        <ul className="nav__links">
            <li><NavLink className='nav__link' to="/">Главная</NavLink></li>
            <li><NavLink className='nav__link' to="/blog">Наш блог</NavLink></li>
            <li><NavLink className='nav__link' to="/works">Работы</NavLink></li>
            <li><NavLink className='nav__link' to="/contacts">Контакты</NavLink></li>
        </ul>
        <ToggleTheme image = './assets/img/nav/moon.svg' function={changeTheme}/>
    </nav>
    )
}


export default Nav;