import React from "react";
import Header from "../Ui/Header";

const Works = (props) => {
    return(
        <div className="wrapper">
            <main className="main">
                <Header
                    title = 'Здесь представлены все наши работы'
                    headerBg = '../assets/img/headers/header-works.jpg'
                />
                <div className="main__title">
                    <h1 className="main__name">Работы</h1>
                </div>
                <div className="posts">
                </div>
            </main>
        </div>
    )
}

export default Works