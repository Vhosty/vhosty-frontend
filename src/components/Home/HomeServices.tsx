import React from "react";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Service1 from "../../assets/images/service1.png";
import Service2 from "../../assets/images/service2.png";
import Service3 from "../../assets/images/service3.png";

const HomeServices: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = React.useRef<any>([]);
    const panelsContainer = React.useRef<any>();

    React.useLayoutEffect(() => {
        if (
            panels.current &&
            panelsContainer.current &&
            window.innerWidth > 800
        ) {
            const totalPanels = panels.current.length;
            const width: number = panelsContainer.current.offsetWidth;

            let scroll = gsap.to(panels.current, {
                xPercent: -100 * (totalPanels - 1),
                scrollTrigger: {
                    trigger: panelsContainer.current,
                    pin: true,
                    scrub: 1,
                    end: `+=${width}`,
                },
            });

            return () => {
                scroll.scrollTrigger?.kill();
            };
        }
    }, []);

    const createPanelsRefs = (panel: any, index: number) => {
        panels.current[index] = panel;
    };

    return (
        <section className="home-services" ref={panelsContainer}>
            <div className="container">
                <div className="home-services-wrapper">
                    <div
                        className="home-services-item"
                        ref={(e) => createPanelsRefs(e, 0)}
                    >
                        <div className="home-services-item-text">
                            <h2 className="home-services-item-text__title">
                                Получи <span>500 бонусов</span> при регистрации
                            </h2>
                            <p className="home-services-item-text__description">
                                Доступ к быстрым уведомлениям, системе
                                лояльности, информации по заказу в один клик
                            </p>
                        </div>

                        <button className="btn home-services-item__btn">
                            Зарегистрироваться
                        </button>

                        <img
                            src={Service1}
                            alt=""
                            className="home-services-item__image"
                        />
                    </div>
                    <div
                        className="home-services-item color"
                        ref={(e) => createPanelsRefs(e, 1)}
                    >
                        <div className="home-services-item-text">
                            <h2 className="home-services-item-text__title">
                                Дешевле некуда!
                            </h2>
                            <p className="home-services-item-text__description">
                                Лучшие предложения по самым популярным
                                направлениям. Не знаешь, куда поехать? Мы знаем,
                                куда поехать выгодно!
                            </p>
                        </div>

                        <button className="btn-light home-services-item__btn">
                            Посмотреть
                        </button>

                        <img
                            src={Service2}
                            alt=""
                            className="home-services-item__image"
                        />
                    </div>
                    <div
                        className="home-services-item"
                        ref={(e) => createPanelsRefs(e, 2)}
                    >
                        <div className="home-services-item-text">
                            <h2 className="home-services-item-text__title">
                                Писать отзывы <span>выгодно!</span>
                            </h2>
                            <p className="home-services-item-text__description">
                                Теперь польза от отзывов обоюдная: пишите отзывы
                                и получайте бонусы на ваш счет.
                            </p>
                        </div>

                        <img
                            src={Service3}
                            alt=""
                            className="home-services-item__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
