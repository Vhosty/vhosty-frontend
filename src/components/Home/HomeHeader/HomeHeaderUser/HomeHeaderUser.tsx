import React from "react";

import {HomeHeaderUserNotifications} from "../../../";

const HomeHeaderUser: React.FC = () => {
    return (
        <div className="home-main-header-block-user">
            <HomeHeaderUserNotifications />

            <button className="home-main-header-block-user__btn">
                Личный кабинет
            </button>
        </div>
    );
};

export default HomeHeaderUser;
