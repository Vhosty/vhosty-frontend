import React from "react";
import {useDispatch} from "react-redux";

import {setLoginOpen} from "../../../../redux/actions/login";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {HomeHeaderUserNotifications} from "../../../";

const HomeHeaderUser: React.FC = () => {
    const dispatch = useDispatch();

    const {open} = useTypedSelector(({login}) => login);

    const setLoginOpenOnClick = () => {
        dispatch(setLoginOpen(!open));
    };

    return (
        <div
            className="home-main-header-block-user"
            onClick={setLoginOpenOnClick}
        >
            <HomeHeaderUserNotifications />

            <button className="home-main-header-block-user__btn">
                Личный кабинет
            </button>
        </div>
    );
};

export default HomeHeaderUser;
