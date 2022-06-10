import React from "react";

import {Link} from 'react-router-dom';

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

                    <img
                        src={mockupCorporate}
                        alt=""
                        className="home-corporate__image"
                    />
                    <div className="home-corporate-text">
                        <h2 className="home-corporate-text__title">
                            Индивидуальный подход для{" "}
                            <span>корпоративных клиентов</span>
                        </h2>
                        <p className="home-corporate-text__description">
                            Принимая во внимание показатели успешности, курс на
                            социально-ориентированный национальный проект
                            позволяет оценить значение модели развития. В целом,
                            конечно, высокое качество позиционных исследований
                            выявляет срочную потребность направлений
                            прогрессивного развития.
                        </p>
                        <div className="home-corporate-text-btn">
                            <Link to="/1" className="btn home-corporate-text-btn__btn">
                                Для корпоративных клиентов
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCorporate;
