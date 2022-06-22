import React from "react";

const ObjectPageNavigation: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.pageYOffset >= 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    return (
        <div
            className={`object-page-navigation-btn ${
                isVisible ? "visible" : ""
            }`}
        >
            <div className="object-page-navigation-btn-navigate">
                <button className="btn-light small object-page-navigation-btn-block__btn">
                    Удобства
                </button>

                <button className="btn-light small object-page-navigation-btn-block__btn">
                    Местность
                </button>

                <button className="btn-light small object-page-navigation-btn-block__btn">
                    Отзывы
                </button>

                <button className="btn-light small object-page-navigation-btn-block__btn">
                    Условия
                </button>
            </div>
            <div className="object-page-navigation-btn-accent">
                <button className="btn small object-page-navigation-btn-block__btn">
                    Доступные номера
                </button>
            </div>
        </div>
    );
};

export default ObjectPageNavigation;
