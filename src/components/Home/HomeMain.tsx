import React from "react";
import Typed from "react-typed";

import {HeaderTransparent, ObjectsFiltersGlobal} from "../";

import MainBg from "../../assets/images/main-bg.jpg";

const HomeMain: React.FC = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home-main-wrapper">
                    <HeaderTransparent bgImage={MainBg} />

                    <div className="home-main-text">
                        <h1 className="home-main-text__title">
                            Несколько кликов до{" "}
                            <Typed strings={["отдыха мечты"]} typeSpeed={200} />
                        </h1>

                        <p className="description home-main-text__description">
                            Бронирование жилья и отелей, которые впечатляют.
                        </p>
                    </div>

                    <div className="home-main-form">
                        <ObjectsFiltersGlobal />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMain;
