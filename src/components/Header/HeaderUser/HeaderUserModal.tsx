import React from "react";
import {NavLink, Link} from "react-router-dom";

const HeaderUserModal: React.FC = () => {
    return (
        <div className="header-block-user-modal">
            <NavLink
                to="/cabinet/setting"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">
                    Управление аккаунтом
                </p>
            </NavLink>

            <NavLink
                to="/cabinet/history"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">
                    Мои бронирования
                </p>
            </NavLink>

            {/* <NavLink
                to="/"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">Мои баллы</p>
                <p className="header-block-user-modal-item__subtitle">34 000</p>
            </NavLink> */}

            <NavLink
                to="/cabinet/favorites"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">Избранное</p>
            </NavLink>

            <Link to="#logout" className="header-block-user-modal-item">
                <p className="header-block-user-modal-item__title">
                    Выйти из аккаунта
                </p>
            </Link>
        </div>
    );
};

export default HeaderUserModal;
