import React from "react";
import {Link} from "react-router-dom";

import {Popup} from "../";

import {useTypedSelector} from "../../hooks/useTypedSelector";

interface HeaderModalProps {
    color?: boolean;
}

const HeaderModal: React.FC<HeaderModalProps> = ({color}) => {
    const {isLoadedUser} = useTypedSelector(({user}) => user);

    const [activeHeaderModal, setActiveHeaderModal] =
        React.useState<boolean>(false);

    const openHeaderModal = () => {
        setActiveHeaderModal(true);
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
                wrapperActive={activeHeaderModal}
                setWrapperActive={setActiveHeaderModal}
                addClassWrapper="header-block-menu-modal-wrapper"
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

                    {isLoadedUser ? null : (
                        <p className="header-block-menu-modal-block-bottom__link">
                            <Link
                                to="#register"
                                onClick={() => setActiveHeaderModal(false)}
                            >
                                Зарегистрироваться
                            </Link>{" "}
                            или{" "}
                            <Link
                                to="#login"
                                onClick={() => setActiveHeaderModal(false)}
                            >
                                Войти
                            </Link>
                        </p>
                    )}
                </nav>
            </Popup>
        </>
    );
};

export default HeaderModal;
