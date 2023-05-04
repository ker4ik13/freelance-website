import React from "react";
import Header from "../Ui/Header";

const Main = (props) => {
    return(
        <div className="wrapper">
            <main className="main">
                <Header
                    title = 'Главная страница'
                    headerBg = ''
                />
                <div className="main__title">
                    <h1 className="main__name">Главная</h1>
                </div>
                <div className="posts">
                </div>
            </main>
        </div>
    )
}

export default Main