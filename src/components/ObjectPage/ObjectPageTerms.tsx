import React from "react";

import {TitleIcon, ObjectPageBlockTextWrapper} from "../";

const ObjectPageTerms: React.FC = () => {
    return (
        <div
            className="object-page-section object-page-section-terms"
            id="object-page-terms"
        >
            <div className="object-page-section-padding">
                <h2 className="object-page-section__title marginBottom">
                    Условия размещения
                </h2>
                <div className="object-page-section-terms-from-to">
                    <div className="object-page-section-terms-from-to-block-wrapper">
                        <TitleIcon title="Заселение">
                            <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM13.29 14.71L9 10.41V5H11V9.59L14.71 13.3L13.29 14.71Z"
                                    fill="#00A0A0"
                                />
                            </svg>
                        </TitleIcon>

                        <div className="object-page-section-terms-from-to-block">
                            <p className="object-page-section-terms-from-to-block__subtitle">
                                После 14:00
                            </p>
                            <div className="object-page-section-terms-from-to-block-line-wrapper">
                                <div className="object-page-section-terms-from-to-block-line">
                                    <div
                                        className="object-page-section-terms-from-to-block-line-active"
                                        style={{width: "50%", float: "right"}}
                                    ></div>
                                </div>
                                <p
                                    className="object-page-section-terms-from-to-block-line__count"
                                    style={{marginLeft: "45%"}}
                                >
                                    14:00
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="object-page-section-terms-from-to-block-wrapper">
                        <TitleIcon title="Выезд">
                            <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM13.29 14.71L9 10.41V5H11V9.59L14.71 13.3L13.29 14.71Z"
                                    fill="#00A0A0"
                                />
                            </svg>
                        </TitleIcon>

                        <div className="object-page-section-terms-from-to-block">
                            <p className="object-page-section-terms-from-to-block__subtitle">
                                До 14:00
                            </p>
                            <div className="object-page-section-terms-from-to-block-line-wrapper">
                                <div className="object-page-section-terms-from-to-block-line">
                                    <div
                                        className="object-page-section-terms-from-to-block-line-active"
                                        style={{width: "50%"}}
                                    ></div>
                                </div>
                                <p
                                    className="object-page-section-terms-from-to-block-line__count"
                                    style={{marginLeft: "45%"}}
                                >
                                    14:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="object-page-section-terms-from-to-change-time">
                    <TitleIcon title="Возможность другого времени заезда/выезда">
                        <svg
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 15C10 16.03 10.26 17 10.71 17.83C10.16 17.94 9.59 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 3.55683e-08 9 0C11.12 0 13.07 0.74 14.62 2L16.03 3.39C16.2229 3.63945 16.3423 3.80346 16.03 3.39C17.3059 4.98137 18.0008 6.96032 18 9V9.35C17.36 9.13 16.7 9 16 9C12.69 9 10 11.69 10 15ZM10 3H8V10H10V3ZM17 14V11H15V14H12V16H15V19H17V16H20V14H17Z"
                                fill="#00A0A0"
                            />
                        </svg>
                    </TitleIcon>
                    <div className="object-page-section-terms-from-to-change-time-block">
                        <p className="object-page-section-terms-from-to-change-time-block__description">
                            <span>Есть ли возможность:</span>Да
                        </p>
                        <p className="object-page-section-terms-from-to-change-time-block__description">
                            <span>Есть ли возможность:</span>Да
                        </p>
                    </div>
                </div>
                <div className="object-page-section-terms-text">
                    <ObjectPageBlockTextWrapper>
                        <h2 className="object-page-section-terms-text__title">
                            Дополнительная информация
                        </h2>
                        <p className="object-page-section__description">
                            Отель Grand Cosmopolitan расположен в Дубае, в 7,7
                            км от пляжа Джумейра. К услугам гостей 3 ресторана,
                            бесплатная частная парковка, открытые бассейны и
                            фитнес-центр. В отеле можно забронировать семейные
                            номера. Обустроена детская игровая площадка. Стойка
                            регистрации открыта круглосуточно, работает пункт
                            обмена валют. Осуществляется доставка еды и напитков
                            в номер.
                        </p>
                        <p className="object-page-section__description">
                            Номера с французскими окнами оснащены кондиционером,
                            телевизором с плоским экраном и технологиями IPTV,
                            Smart TV, chromecast и спутниковыми каналами. В
                            числе удобств чайник, гладильные принадлежности,
                            беспроводное зарядное устройство для мобильных
                            телефонов и сейф. Во всех номерах установлен шкаф
                            для одежды и рабочий стол. В собственной ванной
                            комнате можно воспользоваться феном.
                        </p>
                        <p className="object-page-section__description">
                            Отель Grand Cosmopolitan расположен в Дубае, в 7,7
                            км от пляжа Джумейра. К услугам гостей 3 ресторана,
                            бесплатная частная парковка, открытые бассейны и
                            фитнес-центр. В отеле можно забронировать семейные
                            номера. Обустроена детская игровая площадка. Стойка
                            регистрации открыта круглосуточно, работает пункт
                            обмена валют. Осуществляется доставка еды и напитков
                            в номер.
                        </p>
                        <p className="object-page-section__description">
                            Номера с французскими окнами оснащены кондиционером,
                            телевизором с плоским экраном и технологиями IPTV,
                            Smart TV, chromecast и спутниковыми каналами. В
                            числе удобств чайник, гладильные принадлежности,
                            беспроводное зарядное устройство для мобильных
                            телефонов и сейф. Во всех номерах установлен шкаф
                            для одежды и рабочий стол. В собственной ванной
                            комнате можно воспользоваться феном.
                        </p>
                    </ObjectPageBlockTextWrapper>
                </div>

                <div className="object-page-section-terms-payment">
                    <div className="object-page-section-terms-payment-block">
                        <TitleIcon title="Оплата в отеле">
                            <svg
                                viewBox="0 0 22 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.714844 2.6423C0.714844 2.01715 0.963185 1.4176 1.40523 0.975547C1.84729 0.533497 2.44683 0.285156 3.07199 0.285156H18.9291C19.5543 0.285156 20.1538 0.533497 20.5959 0.975547C21.0379 1.4176 21.2863 2.01715 21.2863 2.6423V4.57087H0.714844V2.6423ZM0.714844 5.85659H21.2863V12.4994C21.2863 13.1246 21.0379 13.7241 20.5959 14.1662C20.1538 14.6082 19.5543 14.8566 18.9291 14.8566H3.07199C2.44683 14.8566 1.84729 14.6082 1.40523 14.1662C0.963185 13.7241 0.714844 13.1246 0.714844 12.4994V5.85659ZM14.8577 10.0566C14.6531 10.0566 14.4569 10.1379 14.3122 10.2825C14.1675 10.4272 14.0863 10.6234 14.0863 10.828C14.0863 11.0326 14.1675 11.2288 14.3122 11.3735C14.4569 11.5182 14.6531 11.5994 14.8577 11.5994H17.4291C17.6337 11.5994 17.8299 11.5182 17.9746 11.3735C18.1193 11.2288 18.2006 11.0326 18.2006 10.828C18.2006 10.6234 18.1193 10.4272 17.9746 10.2825C17.8299 10.1379 17.6337 10.0566 17.4291 10.0566H14.8577Z"
                                    fill="#00A0A0"
                                />
                            </svg>
                        </TitleIcon>

                        <p className="object-page-section-terms-payment-block__description">
                            Безналичный и наличный расчет в валюте страны отеля
                        </p>
                    </div>

                    <div className="object-page-section-terms-payment-block">
                        <TitleIcon title="Оплата на сайте">
                            <svg
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 3.79167C0 2.78605 0.399478 1.82163 1.11055 1.11055C1.82163 0.399478 2.78605 0 3.79167 0H17.2083C18.2139 0 19.1784 0.399478 19.8894 1.11055C20.6005 1.82163 21 2.78605 21 3.79167V17.2083C21 18.2139 20.6005 19.1784 19.8894 19.8894C19.1784 20.6005 18.2139 21 17.2083 21H3.79167C2.78605 21 1.82163 20.6005 1.11055 19.8894C0.399478 19.1784 0 18.2139 0 17.2083V3.79167ZM4.375 4.375C4.14294 4.375 3.92038 4.46719 3.75628 4.63128C3.59219 4.79538 3.5 5.01794 3.5 5.25C3.5 5.48206 3.59219 5.70462 3.75628 5.86872C3.92038 6.03281 4.14294 6.125 4.375 6.125H16.625C16.8571 6.125 17.0796 6.03281 17.2437 5.86872C17.4078 5.70462 17.5 5.48206 17.5 5.25C17.5 5.01794 17.4078 4.79538 17.2437 4.63128C17.0796 4.46719 16.8571 4.375 16.625 4.375H4.375Z"
                                    fill="#00A0A0"
                                />
                            </svg>
                        </TitleIcon>

                        <p className="object-page-section-terms-payment-block__description">
                            Доступна оплата банковской картой при бронировании
                            на сайте. Можно оплатить бронирование с помощью
                            промокода, если он у вас есть.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ObjectPageTerms;
