import React from "react";
import {Link} from "react-router-dom";

import {HomeHeaderUserNotifications} from "../../../";

const HomeHeaderUser: React.FC = () => {
    return (
        <Link to="#login" className="home-main-header-block-user">
            <HomeHeaderUserNotifications />

            <button className="home-main-header-block-user__btn">
                Личный кабинет
            </button>
        </Link>
    );
};

export default HomeHeaderUser;
