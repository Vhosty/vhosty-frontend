import React from "react";

import VisaLogo from "../../assets/images/visa-logo.png";
import MastercardLogo from "../../assets/images/mastercard-logo.png";
import ThawteLogo from "../../assets/images/thawte-logo.png";
import MirLogo from "../../assets/images/mir-logo.png";

import TrustpilotLogo from "../../assets/images/trustpilot-logo.png";
import YellLogo from "../../assets/images/yell-logo.png";
import OtzovikLogo from "../../assets/images/otzovik-logo.png";

const HomeSecurity: React.FC = () => {
    return (
        <section className="home-security">
            <div className="container">
                <div className="home-security-wrapper">
                    <h2 className="home-security__title">
                        Мы выбираем <span>безопасность</span> и{" "}
                        <span>доверие.</span>
                    </h2>
                    <div className="home-security-items-wrapper">
                        <div className="home-security-item">
                            <div className="home-security-item-icon">
                                <svg
                                    width="80"
                                    height="77"
                                    viewBox="0 0 80 77"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10L0 50C0 52.6522 1.05357 55.1957 2.92893 57.0711C4.8043 58.9464 7.34784 60 10 60H22.5C23.2762 60 24.0418 60.1807 24.7361 60.5279C25.4303 60.875 26.0343 61.379 26.5 62L36 74.665C36.4657 75.286 37.0697 75.79 37.7639 76.1371C38.4582 76.4843 39.2238 76.665 40 76.665C40.7762 76.665 41.5418 76.4843 42.2361 76.1371C42.9303 75.79 43.5343 75.286 44 74.665L53.5 62C53.9657 61.379 54.5697 60.875 55.2639 60.5279C55.9582 60.1807 56.7238 60 57.5 60H70C72.6522 60 75.1957 58.9464 77.0711 57.0711C78.9464 55.1957 80 52.6522 80 50V10C80 7.34784 78.9464 4.8043 77.0711 2.92893C75.1957 1.05357 72.6522 0 70 0L10 0ZM40 19.965C48.32 11.41 69.125 26.38 40 45.625C10.875 26.375 31.68 11.41 40 19.965Z"
                                        fill="#253021"
                                    />
                                </svg>
                            </div>

                            <div className="home-security-item-text">
                                <h3 className="home-security-item-text__title">
                                    Чат-поддержка
                                </h3>
                                <p className="home-security-item-text__description">
                                    Умный виртуальный помощник или оператор
                                    поможет вам с поездкой и размещением.
                                </p>
                            </div>
                        </div>

                        <div className="home-security-item">
                            <div className="home-security-item-icon">
                                <svg
                                    width="88"
                                    height="79"
                                    viewBox="0 0 88 79"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.8808 26.1386H35.6808V17.4257H13.8808V26.1386ZM13.8808 43.5644H35.6808V34.8515H13.8808V43.5644ZM13.8808 60.9901H35.6808V52.2772H13.8808V60.9901ZM55.5188 52.2772L77.1008 30.7129L70.8878 24.505L55.5188 39.9703L49.3058 33.7624L43.2018 39.9703L55.5188 52.2772ZM9.52078 78.4158C7.12278 78.4158 5.07067 77.5634 3.36446 75.8586C1.65534 74.1509 0.800781 72.099 0.800781 69.703V8.71287C0.800781 6.31683 1.65534 4.26495 3.36446 2.55723C5.07067 0.852409 7.12278 0 9.52078 0H79.2808C81.6788 0 83.7323 0.852409 85.4415 2.55723C87.1477 4.26495 88.0008 6.31683 88.0008 8.71287V69.703C88.0008 72.099 87.1477 74.1509 85.4415 75.8586C83.7323 77.5634 81.6788 78.4158 79.2808 78.4158H9.52078ZM9.52078 69.703H79.2808V8.71287H9.52078V69.703ZM9.52078 69.703V8.71287H79.2808V69.703H9.52078Z"
                                        fill="#253021"
                                    />
                                </svg>
                            </div>

                            <div className="home-security-item-text">
                                <h3 className="home-security-item-text__title">
                                    Проверенные объекты
                                </h3>
                                <p className="home-security-item-text__description">
                                    Многие владельцы объектов верифицируются,
                                    чтобы гости не беспокоились о бумагах.
                                </p>
                            </div>
                        </div>

                        <div className="home-security-item">
                            <div className="home-security-item-icon">
                                <svg
                                    width="78"
                                    height="78"
                                    viewBox="0 0 78 78"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M73.125 0C75.8215 0 78 2.18309 78 4.875C78 7.56691 75.8215 9.75 73.125 9.75V68.25C75.8215 68.25 78 70.4285 78 73.125C78 75.8215 75.8215 78 73.125 78H46.3125V68.25H31.6875V78H4.875C2.18309 78 0 75.8215 0 73.125C0 70.4285 2.18309 68.25 4.875 68.25V9.75C2.18309 9.75 0 7.56691 0 4.875C0 2.18309 2.18309 0 4.875 0H73.125ZM17.0625 14.625C15.7219 14.625 14.625 15.7219 14.625 17.0625V21.9375C14.625 23.2781 15.7219 24.375 17.0625 24.375H21.9375C23.2781 24.375 24.375 23.2781 24.375 21.9375V17.0625C24.375 15.7219 23.2781 14.625 21.9375 14.625H17.0625ZM34.125 21.9375C34.125 23.2781 35.2219 24.375 36.5625 24.375H41.4375C42.7781 24.375 43.875 23.2781 43.875 21.9375V17.0625C43.875 15.7219 42.7781 14.625 41.4375 14.625H36.5625C35.2219 14.625 34.125 15.7219 34.125 17.0625V21.9375ZM56.0625 14.625C54.7219 14.625 53.625 15.7219 53.625 17.0625V21.9375C53.625 23.2781 54.7219 24.375 56.0625 24.375H60.9375C62.2781 24.375 63.375 23.2781 63.375 21.9375V17.0625C63.375 15.7219 62.2781 14.625 60.9375 14.625H56.0625ZM14.625 36.5625C14.625 37.9031 15.7219 39 17.0625 39H21.9375C23.2781 39 24.375 37.9031 24.375 36.5625V31.6875C24.375 30.3469 23.2781 29.25 21.9375 29.25H17.0625C15.7219 29.25 14.625 30.3469 14.625 31.6875V36.5625ZM36.5625 29.25C35.2219 29.25 34.125 30.3469 34.125 31.6875V36.5625C34.125 37.9031 35.2219 39 36.5625 39H41.4375C42.7781 39 43.875 37.9031 43.875 36.5625V31.6875C43.875 30.3469 42.7781 29.25 41.4375 29.25H36.5625ZM53.625 36.5625C53.625 37.9031 54.7219 39 56.0625 39H60.9375C62.2781 39 63.375 37.9031 63.375 36.5625V31.6875C63.375 30.3469 62.2781 29.25 60.9375 29.25H56.0625C54.7219 29.25 53.625 30.3469 53.625 31.6875V36.5625ZM39 43.875C32.175 43.875 26.4316 48.552 24.6949 54.8742C24.3293 56.8395 26.0051 58.5 28.0312 58.5H49.9688C51.9949 58.5 53.6707 56.8395 53.168 54.8742C51.5684 48.552 45.825 43.875 39 43.875Z"
                                        fill="#253021"
                                    />
                                </svg>
                            </div>

                            <div className="home-security-item-text">
                                <h3 className="home-security-item-text__title">
                                    Большой каталог
                                </h3>
                                <p className="home-security-item-text__description">
                                    Большой каталог в нашей базе собраны объекты
                                    самых разных типов. От отелей до частных
                                    домов.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="home-security-bottom-block">
                        <div className="home-security-bottom-block-payments">
                            <p className="home-security-bottom-block-payments__description">
                                Наши партнёры по проведению платежей гарантируют
                                безопасность ваших данных своей мировой
                                репутацией:
                            </p>

                            <div className="home-security-bottom-block-payments-logos">
                                <div
                                    className="home-security-bottom-block-payments-logos-item"
                                    style={{
                                        backgroundImage: `url('${VisaLogo}')`,
                                    }}
                                ></div>
                                <div
                                    className="home-security-bottom-block-payments-logos-item"
                                    style={{
                                        backgroundImage: `url('${MastercardLogo}')`,
                                    }}
                                ></div>
                                <div
                                    className="home-security-bottom-block-payments-logos-item"
                                    style={{
                                        backgroundImage: `url('${ThawteLogo}')`,
                                    }}
                                ></div>
                                <div
                                    className="home-security-bottom-block-payments-logos-item"
                                    style={{
                                        backgroundImage: `url('${MirLogo}')`,
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div className="home-security-bottom-block-feedbacks">
                            <p className="home-security-bottom-block-feedbacks__description">
                                Отзывы о нашем сервисе VHOSTY на
                                сервисах-отзовиках:
                            </p>

                            <div className="home-security-bottom-block-feedbacks-logos">
                                <div
                                    className="home-security-bottom-block-feedbacks-logos-item"
                                    style={{
                                        backgroundImage: `url('${TrustpilotLogo}')`,
                                    }}
                                ></div>
                                <div
                                    className="home-security-bottom-block-feedbacks-logos-item"
                                    style={{
                                        backgroundImage: `url('${YellLogo}')`,
                                    }}
                                ></div>
                                <div
                                    className="home-security-bottom-block-feedbacks-logos-item"
                                    style={{
                                        backgroundImage: `url('${OtzovikLogo}')`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSecurity;
