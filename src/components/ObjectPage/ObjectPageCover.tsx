import React from "react";
import {Link, animateScroll as scroll} from "react-scroll";

import {Stars, Location} from "../";

const ObjectPageCover: React.FC<any> = ({background_images, name, stars}) => {
    return (
        <>
            <div
                className="object-page-cover"
                style={{
                    backgroundImage: `url('${background_images[0].url}')`,
                }}
            >
                <div className="object-page-cover-plaecholder"></div>

                <div className="object-page-cover-wrapper">
                    <div className="object-page-cover-block">
                        <div className="object-page-cover-text">
                            <div className="object-page-cover-text-info">
                                <div className="object-page-cover-text-info-stars">
                                    <Stars count={stars} />
                                </div>
                                <h2 className="object-page-cover-text-info__title">
                                    {name}
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
                                    to="object-page-slider-images"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                    className="btn-light small object-page-cover-btn-navigate__btn"
                                >
                                    Фотографии
                                </Link>

                                <Link
                                    to="object-page-about"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                    className="btn-light small object-page-cover-btn-navigate__btn"
                                >
                                    Об отеле
								</Link>
								
                                <Link
                                    to="object-page-services"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                    className="btn-light small object-page-cover-btn-navigate__btn"
                                >
                                    Удобства
								</Link>
								
                                <Link
                                    to="object-page-terms"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                    className="btn-light small object-page-cover-btn-navigate__btn"
                                >
                                    Условия
                                </Link>
                            </div>
                            <div className="object-page-cover-btn-accent">
                                <Link
                                    to="object-page-room"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                    className="btn small object-page-cover-btn-navigate__btn"
                                >
                                    Доступные номера
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="object-page-cover-block">
                            <div className="object-page-cover-dots">
                                {background_images.map((_: any, index: number) => (
                                    <div
                                        className={`object-page-cover-dots-item ${
                                            index === 1 ? "active" : ""
                                        }`}
                                        key={`object-page-cover-dots-item-${index}`}
                                    ></div>
                                ))}
                            </div>
                        </div> */}
                </div>
            </div>
        </>
    );
};

export default ObjectPageCover;
