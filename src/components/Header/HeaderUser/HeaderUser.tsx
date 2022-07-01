import React from "react";
import {Link} from "react-router-dom";

import {HeaderUserNotifications, HeaderUserModal, Popup} from "../../";

const HeaderUser: React.FC = () => {
    const isLogin = true;

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
            {isLogin ? (
                <div className="header-block-user">
                    <HeaderUserNotifications />

                    <button
                        className="header-block-user__btn"
                        onClick={openHeaderModal}
                    >
                        Личный кабинет
                    </button>

                    <Popup
                        active={activeHeaderModal}
                        activeAnimation={activeHeaderModalAnimation}
                        addClassWrapper="header-block-user-modal-wrapper"
                        refPopup={PopupRef}
                    >
                        <HeaderUserModal />
                    </Popup>
                </div>
            ) : (
                <Link to="#login" className="header-block-user">
                    <HeaderUserNotifications />

                    <button className="header-block-user__btn">
                        Личный кабинет
                    </button>
                </Link>
            )}
        </>
    );
};

export default HeaderUser;
