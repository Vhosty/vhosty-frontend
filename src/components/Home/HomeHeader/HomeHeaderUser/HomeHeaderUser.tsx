import React from "react";
import {useDispatch} from "react-redux";

import {setReglogOpen} from "../../../../redux/actions/reglog";

import {HomeHeaderUserNotifications} from "../../../";

const HomeHeaderUser: React.FC = () => {
    const dispatch = useDispatch();

    const setReglogOpenOnClick = () => {
        dispatch(setReglogOpen());
    };

    return (
        <div
            className="home-main-header-block-user"
            onClick={setReglogOpenOnClick}
        >
            <HomeHeaderUserNotifications />

            <button className="home-main-header-block-user__btn">
                Личный кабинет
            </button>
        </div>
    );
};

export default HomeHeaderUser;
