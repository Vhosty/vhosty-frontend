import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import {HeaderTransparent} from "../components";

import DevelopingBg from "../assets/images/notfound-bg.jpg";
import DevelopingImage from "../assets/images/developing.png";

const Developing: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Bookover | 404</title>
            </Helmet>

            <section className="developing">
                <div className="container">
                    <div className="developing-wrapper">
                        <HeaderTransparent bgImage={DevelopingBg} />

                        <div className="developing-content">
                            <img
                                src={DevelopingImage}
                                alt=""
                                className="developing-content__image"
                            />

                            <div className="developing-content-text">
                                <h3 className="developing-content-text__title">
                                    СТРАНИЦА <span>В РАЗРАБОТКЕ</span>
                                </h3>
                                <p className="developing-content-text__description">
                                    Данная страница находится в разработке. Мы
                                    активно работаем над расширением функционала
                                    сайта на стадии беты. Благодарим за
                                    понимание!
                                </p>

                                <Link
                                    to="/"
                                    className="btn developing-content-text__btn"
                                >
                                    Вернуться на главную
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Developing;
