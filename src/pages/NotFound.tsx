import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import {HeaderTransparent} from "../components";

import NotfoundBg from "../assets/images/notfound-bg.jpg";
import NotfoundImage from "../assets/images/notfound.png";

const NotFound: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Bookover | 404</title>
            </Helmet>

            <section className="notfound">
                <div className="container">
                    <div className="notfound-wrapper">
                        <HeaderTransparent bgImage={NotfoundBg} />

                        <div className="notfound-content">
                            <img
                                src={NotfoundImage}
                                alt=""
                                className="notfound-content__image"
                            />

                            <div className="notfound-content-text">
                                <h3 className="notfound-content-text__title">
                                    <span>404</span> NOT FOUND
                                </h3>
                                <p className="notfound-content-text__description">
                                    Страница не найдена или еще не создана. Наши
                                    специалисты уже в курсе проблемы, разрешение
                                    появится в скором времени.
                                </p>

                                <Link to="/" className="btn notfound-content-text__btn">Вернуться на главную</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;
