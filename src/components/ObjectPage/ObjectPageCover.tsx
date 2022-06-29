import React from "react";
import {Link, animateScroll as scroll} from "react-scroll";

import {Stars, Location} from "../";

const ObjectPageCover: React.FC = () => {
    return (
        <>
            <div
                className="object-page-cover"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80')",
                }}
            >
                <div className="object-page-cover-plaecholder"></div>

                <div className="container">
                    <div className="object-page-cover-wrapper">
                        <div className="object-page-cover-block">
                            <div className="object-page-cover-text">
                                <div className="object-page-cover-text-info">
                                    <div className="object-page-cover-text-info-stars">
                                        <Stars count={5} />
                                    </div>
                                    <h2 className="object-page-cover-text-info__title">
                                        Auster Avani Palm View Dubai Hotel &
                                        Suites
                                    </h2>

                                    <Location
                                        title="Дубай Медиа-Сити, Дубай, st. general city employment, 1440"
                                        subtitle="10,9 км от центра"
                                    />
                                </div>

                                <div className="object-page-cover-text-feedbacks">
                                    <h3 className="object-page-cover-text-feedbacks__count">
                                        5,7
                                    </h3>
                                    <p className="object-page-cover-text-feedbacks__title">
                                        нормально
                                    </p>
                                    <p className="object-page-cover-text-feedbacks__subtitle">
                                        3 485 отзывов
                                    </p>
                                </div>
                            </div>
                            <div className="object-page-cover-btn">
                                <div className="object-page-cover-btn-navigate">
                                    <Link
                                        to="object-page-services"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        className="btn-light small object-page-cover-btn-block__btn"
                                    >
                                        Удобства
                                    </Link>

                                    <Link
                                        to="object-page-maps"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        className="btn-light small object-page-cover-btn-block__btn"
                                    >
                                        Местность
                                    </Link>

                                    <Link
                                        to="object-page-feedbacks"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        className="btn-light small object-page-cover-btn-block__btn"
                                    >
                                        Отзывы
                                    </Link>

                                    <Link
                                        to="object-page-terms"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        className="btn-light small object-page-cover-btn-block__btn"
                                    >
                                        Условия
                                    </Link>
                                </div>
                                <div className="object-page-cover-btn-accent">
                                    <Link
                                        to="object-page-room"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        className="btn small object-page-cover-btn-block__btn"
                                    >
                                        Доступные номера
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="object-page-cover-block">
                            <div className="object-page-cover-dots">
                                {Array(7)
                                    .fill(0)
                                    .map((_, index) => (
                                        <div
                                            className={`object-page-cover-dots-item ${
                                                index === 1 ? "active" : ""
                                            }`}
                                            key={`object-page-cover-dots-item-${index}`}
                                        ></div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ObjectPageCover;
