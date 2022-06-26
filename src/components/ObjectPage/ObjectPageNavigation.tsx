import React from "react";
import {Link, animateScroll as scroll} from "react-scroll";

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
                <Link
                    to="object-page-services"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    className="btn-light small object-page-navigation-btn-block__btn"
                >
                    Удобства
                </Link>

                <Link
                    to="object-page-maps"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    className="btn-light small object-page-navigation-btn-block__btn"
                >
                    Местность
                </Link>

                <Link
                    to="object-page-feedbacks"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    className="btn-light small object-page-navigation-btn-block__btn"
                >
                    Отзывы
                </Link>

                <Link
                    to="object-page-terms"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    className="btn-light small object-page-navigation-btn-block__btn"
                >
                    Условия
                </Link>
            </div>
            <div className="object-page-navigation-btn-accent">
                <Link
                    to="object-page-room"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    className="btn small object-page-navigation-btn-block__btn"
                >
                    Доступные номера
                </Link>
            </div>
        </div>
    );
};

export default ObjectPageNavigation;
