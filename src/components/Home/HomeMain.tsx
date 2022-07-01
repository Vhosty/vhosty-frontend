import React from "react";

import {HeaderTransparent, ObjectFiltersGlobal} from "../";

import MainBg from "../../assets/images/main-bg.jpg";

const HomeMain: React.FC = () => {
    const title = "отдыха мечты";

    const [writeTitle, setWriteTitle] = React.useState<string>("");

    React.useEffect(() => {
        const titleSplit = title.split("");

        let writeTitle = "";
        let letterIndex = 0;

        setInterval(() => {
            if (letterIndex !== titleSplit.length) {
                writeTitle += titleSplit[letterIndex];

                setWriteTitle(writeTitle);

                letterIndex++;
            } else {
                clearInterval();
            }
        }, 200);
    }, []);

    return (
        <section className="home">
            <div className="container">
                <div className="home-main-wrapper">
                    <HeaderTransparent bgImage={MainBg} />

                    <div className="home-main-text">
                        <h1 className="home-main-text__title">
                            Несколько кликов до <span>{writeTitle}</span>
                            <span id="blink">|</span>
                        </h1>

                        <p className="description home-main-text__description">
                            Бронирование жилья и отелей, которые впечатляют.
                        </p>
                    </div>

                    <div className="home-main-form">
                        <ObjectFiltersGlobal />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMain;
