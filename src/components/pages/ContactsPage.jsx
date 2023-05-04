import React from "react";
import Header from "../Ui/Header";

const Contants = (props) => {
    return(
        <div className="wrapper">
            <main className="main">
                <Header
                    title = 'Наши контакты'
                    headerBg = './assets/img/headers/header-contacts.jpg'
                />
                <div className="main__title">
                    <h1 className="main__name">Контакты</h1>
                </div>
                <div className="posts">
                </div>
            </main>
        </div>
    )
}

export default Contants