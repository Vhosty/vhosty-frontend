import React from "react";
import OwlCarousel from "react-owl-carousel";
import {animateScroll as scroll} from "react-scroll";

import Service1 from "../../assets/images/service1.png";
import Service2 from "../../assets/images/service2.png";
import Service3 from "../../assets/images/service3.png";

const HomeServices: React.FC = () => {
    const setting = {
        items: 2,
        dots: false,
        margin: 100,
        id: "home-services-slider",
        autoWidth: true,
    };

    return (
        <section className="home-services">
            <div className="container">
                <div className="home-services-wrapper">
                    <OwlCarousel {...setting}>
                        <div className="home-services-item">
                            <div className="home-services-item-text">
                                <h2 className="home-services-item-text__title">
                                    Сделайте нас лучше!
                                </h2>
                                <p className="home-services-item-text__description">
                                    Нам важна обратная связь, и о проблемах, с
                                    которыми вы могли бы столкнуться, нам
                                    необходимо знать, чтобы стать для вас лучше.
                                    Пожалуйста, напишите нам на почту:&nbsp;
                                    <span>
                                        {process.env.REACT_APP_EMAIL_SUPPORT}
                                    </span>
                                </p>
                            </div>

                            <a
                                href={`mailto:${process.env.REACT_APP_EMAIL_SUPPORT}`}
                                className="btn home-services-item__btn"
                            >
                                Написать
                            </a>

                            <img
                                src={Service1}
                                alt=""
                                className="home-services-item__image"
                            />
                        </div>
                        <div className="home-services-item color">
                            <div className="home-services-item-text">
                                <h2 className="home-services-item-text__title">
                                    Полет нормальный!
                                </h2>
                                <p className="home-services-item-text__description">
                                    Наш сервис был создан для удобного
                                    бронирования по всей России. Сделайте первые
                                    шаги, как Гагарин, в новом Bookover -
                                    найдите бронирование по нужным критериям.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    scroll.scrollTo(0, {duration: 400})
                                }
                                className="btn-light home-services-item__btn"
                            >
                                Найти
                            </button>

                            <img
                                src={Service2}
                                alt=""
                                className="home-services-item__image"
                            />
                        </div>
                        <div className="home-services-item">
                            <div className="home-services-item-text">
                                <h2 className="home-services-item-text__title">
                                    Хочешь к нам?
                                </h2>
                                <p className="home-services-item-text__description">
                                    Мы в поиске новых лиц! Мы с радостью
                                    рассмотрим твое резюме и свяжемся с тобой.
                                    Отправь свое резюме на почту:&nbsp;
                                    <span>
                                        {process.env.REACT_APP_EMAIL_HR}
                                    </span>
                                </p>
                            </div>

                            <a
                                href={`mailto:${process.env.REACT_APP_EMAIL_HR}`}
                                className="btn home-services-item__btn"
                            >
                                Отправить
                            </a>

                            <img
                                src={Service3}
                                alt=""
                                className="home-services-item__image"
                            />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
