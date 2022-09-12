import React from "react";
import {Link} from "react-router-dom";

import {
    HeaderTransparentUserNotifications,
    HeaderUserModal,
    Popup,
} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const HeaderTransparentUser: React.FC = () => {
    const {isLoadedUser} = useTypedSelector(({user}) => user);

    const [activeHeaderModal, setActiveHeaderModal] =
        React.useState<boolean>(false);

    const openHeaderModal = () => {
        setActiveHeaderModal(true);
    };

    return (
        <>
            {isLoadedUser ? (
                <div className="header-transparent-block-user">
                    {/* <HeaderTransparentUserNotifications /> */}

                    <button
                        className="header-transparent-block-user__btn"
                        onClick={openHeaderModal}
                    >
                        Личный кабинет
                    </button>

                    <button
                        className="header-transparent-block-user__btn-mobile"
                        onClick={openHeaderModal}
                    ></button>

                    <Popup
                        wrapperActive={activeHeaderModal}
                        setWrapperActive={setActiveHeaderModal}
                        addClassWrapper="header-block-user-modal-wrapper"
                    >
                        <HeaderUserModal />
                    </Popup>
                </div>
            ) : (
                <Link
                    to={`${window.location.search}#login`}
                    className="header-transparent-block-user"
                >
                    {/* <HeaderTransparentUserNotifications /> */}

                    <button className="header-transparent-block-user__btn">
                        Личный кабинет
                    </button>

                    <button className="header-transparent-block-user__btn-mobile"></button>
                </Link>
            )}
        </>
    );
};

export default HeaderTransparentUser;
