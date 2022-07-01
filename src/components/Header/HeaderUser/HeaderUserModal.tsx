import React from "react";
import {Link} from "react-router-dom";

const HeaderUserModal: React.FC = () => {
    return (
        <div className="header-block-user-modal">
            <Link to="/" className="header-block-user-modal-item">
                <p className="header-block-user-modal-item__title">
                    Управление аккаунтом
                </p>
            </Link>

            <Link to="/" className="header-block-user-modal-item">
                <p className="header-block-user-modal-item__title">
                    Мои бронирования
                </p>
            </Link>

            <Link to="/" className="header-block-user-modal-item">
                <p className="header-block-user-modal-item__title">Мои баллы</p>
                <p className="header-block-user-modal-item__subtitle">34 000</p>
            </Link>

            <Link to="/" className="header-block-user-modal-item">
                <p className="header-block-user-modal-item__title">Избранное</p>
            </Link>

            <Link to="/" className="header-block-user-modal-item">
                <p className="header-block-user-modal-item__title">
                    Выйти из аккаунта
                </p>
            </Link>
        </div>
    );
};

export default HeaderUserModal;
