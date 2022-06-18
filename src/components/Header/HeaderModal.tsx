import React from "react";
import {Link} from "react-router-dom";

import {Popup} from "../";

interface HeaderModalProps {
    color?: boolean;
}

const HeaderModal: React.FC<HeaderModalProps> = ({color}) => {
    const [activeHeaderModal, setActiveHeaderModal] =
        React.useState<boolean>(false);
    const [activeHeaderModalAnimation, setActiveHeaderModalAnimation] =
        React.useState<boolean>(false);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggleHeaderModal);
        document.addEventListener("touchstart", toggleHeaderModal);

        return () => {
            document.removeEventListener("mousedown", toggleHeaderModal);
            document.removeEventListener("touchstart", toggleHeaderModal);
        };
    }, [PopupRef]);

    const openHeaderModal = () => {
        setActiveHeaderModal(true);
    };

    const closeHeaderModal = () => {
        setActiveHeaderModalAnimation(true);

        setTimeout(() => {
            setActiveHeaderModalAnimation(false);
            setActiveHeaderModal(false);
        }, 180);
    };

    const toggleHeaderModal = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            closeHeaderModal();
        }
    };

    return (
        <>
            <div
                className={`header-block-menu-btn ${color ? "color" : ""} ${
                    activeHeaderModal ? "active" : ""
                }`}
                onClick={openHeaderModal}
            >
                <div className="header-block-menu-btn-line"></div>
            </div>

            <Popup
                active={activeHeaderModal}
                activeAnimation={activeHeaderModalAnimation}
                addClassWrapper="header-block-menu-modal-wrapper"
                refPopup={PopupRef}
            >
                <nav className="header-block-menu-modal">
                    <div className="header-block-menu-modal-block">
                        <p className="header-block-menu-modal-block__title">
                            О нас
                        </p>

                        <Link
                            to="/"
                            className="header-block-menu-modal-block__link"
                        >
                            О компании
                        </Link>
                        <Link
                            to="/"
                            className="header-block-menu-modal-block__link"
                        >
                            Вакансии
                        </Link>
                    </div>

                    <div className="header-block-menu-modal-block">
                        <p className="header-block-menu-modal-block__title">
                            Клиентам
                        </p>

                        <Link
                            to="/"
                            className="header-block-menu-modal-block__link"
                        >
                            База знаний
                        </Link>
                        <Link
                            to="/"
                            className="header-block-menu-modal-block__link"
                        >
                            Служба поддержки
                        </Link>
                        <Link
                            to="/"
                            className="header-block-menu-modal-block__link"
                        >
                            Программа лояльности
                        </Link>
                    </div>

                    <div className="header-block-menu-modal-block">
                        <p className="header-block-menu-modal-block__title">
                            Партнерам
                        </p>

                        <Link
                            to="/"
                            className="header-block-menu-modal-block__link"
                        >
                            Объектам размещения
                        </Link>
                        <Link
                            to="/"
                            className="header-block-menu-modal-block__link"
                        >
                            Разместить свой объект
                        </Link>
                        <Link
                            to="/"
                            className="header-block-menu-modal-block__link"
                        >
                            Центр помощи партнерам
                        </Link>
                    </div>

                    <p className="header-block-menu-modal-block-bottom__title">
                        <Link to="#register" onClick={closeHeaderModal}>
                            Зарегистрироваться
                        </Link>{" "}
                        или{" "}
                        <Link to="#login" onClick={closeHeaderModal}>
                            Войти
                        </Link>
                    </p>
                </nav>
            </Popup>
        </>
    );
};

export default HeaderModal;
