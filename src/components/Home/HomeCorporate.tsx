import React from "react";

import {Link} from "react-router-dom";

import mockupCorporate from "../../assets/images/mockup-corporate.png";
import bgImage1Corporate from "../../assets/images/bg-image1-corporate.png";

const HomeCorporate: React.FC = () => {
    return (
        <section className="home-corporate">
            <div className="container">
                <div className="home-corporate-wrapper">
                    <div className="home-corporate-bg-image">
                        <img
                            src={bgImage1Corporate}
                            alt=""
                            className="home-corporate-bg-image__image"
                        />
                    </div>

                    <div className="home-corporate-content">
                        <img
                            src={mockupCorporate}
                            alt=""
                            className="home-corporate-content__image"
                        />

                        <div className="home-corporate-content-text">
                            <h2 className="home-corporate-content-text__title">
                                Индивидуальный подход <br /> для{" "}
                                <span>корпоративных клиентов</span>
                            </h2>
                            <p className="home-corporate-content-text__description">
                                Принимая во внимание показатели успешности, курс
                                на социально-ориентированный национальный проект
                                позволяет оценить значение модели развития. В
                                целом, конечно, высокое качество позиционных
                                исследований выявляет срочную потребность
                                направлений прогрессивного развития.
                            </p>
                            <div className="home-corporate-content-text-btn">
                                <Link
                                    to="/"
                                    className="btn home-corporate-content-text-btn__btn"
                                >
                                    Для корпоративных клиентов
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="home-corporate-btn-media">
                        <Link
                            to="/"
                            className="btn home-corporate-btn-media__btn"
                        >
                            Для корпоративных клиентов
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCorporate;
