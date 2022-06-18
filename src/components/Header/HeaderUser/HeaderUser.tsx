import React from "react";
import {Link} from "react-router-dom";

import {HeaderUserNotifications} from "../../";

const HeaderUser: React.FC = () => {
    return (
        <Link to="#login" className="header-block-user">
            <HeaderUserNotifications />

            <button className="header-block-user__btn">
                Личный кабинет
            </button>
        </Link>
    );
};

export default HeaderUser;
