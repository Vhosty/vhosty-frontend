import React from "react";

import {Stars} from "../";

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
                                    <div className="object-page-cover-text-info-location">
                                        <p className="object-page-cover-text-info-location__title">
                                            Дубай Медиа-Сити, Дубай, st. general
                                            city employment, 1440
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.500083 6.11539C0.498016 6.24208 0.534506 6.36641 0.604715 6.47189C0.674923 6.57737 0.775535 6.65902 0.893208 6.70602L6.89383 9.10664L9.29446 15.1079C9.34083 15.224 9.42094 15.3235 9.52445 15.3935C9.62795 15.4636 9.75009 15.5011 9.87508 15.501H9.88508C10.0117 15.499 10.1347 15.4586 10.2378 15.3852C10.3409 15.3118 10.4193 15.2087 10.4626 15.0898L15.4626 1.33977C15.5035 1.22791 15.5116 1.10668 15.486 0.990366C15.4603 0.87405 15.4019 0.767489 15.3178 0.683231C15.2336 0.598973 15.127 0.540528 15.0108 0.514779C14.8945 0.489029 14.7732 0.497048 14.6613 0.537891L0.911333 5.53789C0.792312 5.58129 0.689269 5.65979 0.615835 5.76302C0.542402 5.86625 0.502038 5.98935 0.500083 6.11602V6.11539Z"
                                                    fill="#116E67"
                                                />
                                            </svg>
                                        </p>
                                        <p className="object-page-cover-text-info-location__subtitle">
                                            10,9 км от центра
                                        </p>
                                    </div>
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
                                    <button className="btn-light small object-page-cover-btn-block__btn">
                                        Удобства
                                    </button>

                                    <button className="btn-light small object-page-cover-btn-block__btn">
                                        Местность
                                    </button>

                                    <button className="btn-light small object-page-cover-btn-block__btn">
                                        Отзывы
                                    </button>

                                    <button className="btn-light small object-page-cover-btn-block__btn">
                                        Условия
                                    </button>
                                </div>
                                <div className="object-page-cover-btn-accent">
                                    <button className="btn small object-page-cover-btn-block__btn">
                                        Доступные номера
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="object-page-cover-block">
                            <div className="object-page-cover-dots">
                                {Array(7)
                                    .fill(0)
                                    .map((_, index) => (
                                        <div
                                            className={`object-page-cover-dots-item ${index === 1 ? "active" : ""}`}
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
