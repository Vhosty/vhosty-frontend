import React from "react";

const Home: React.FC = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home-wrapper">
                    <div className="home-text">
                        <h1 className="home-text__title">
                            Несколько кликов до <span>отдыха мечты</span>
                        </h1>

                        <p className="home-text__description">
                            Бронирование жилья и отелей, которые впечатляют.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
