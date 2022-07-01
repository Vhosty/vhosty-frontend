import React from "react";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

import {
    HeaderTransparent,
    CabinetMenu,
    CabinetSetting,
    CabinetHistory,
    CabinetFavorites,
    CabinetLogout,
} from "../components/";

import CabinetBg from "../assets/images/cabinet-bg.jpg";

const Cabinet: React.FC = () => {
    const {section} = useParams();

    const [title, setTitle] = React.useState<string>("");
    const [block, setBlock] = React.useState<React.ReactNode>(
        <CabinetSetting />
    );

    const [stateLogout, setStateLogout] = React.useState<boolean>(false);
    const [closeAnimationLogout, setCloseAnimationLogout] =
        React.useState<boolean>(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (section === "setting") {
            setTitle("Управление аккаунтом");
            setBlock(<CabinetSetting />);
        }

        if (section === "history") {
            setTitle("Мои бронирования");
            setBlock(<CabinetHistory />);
        }

        if (section === "favorites") {
            setTitle("Избранное");
            setBlock(<CabinetFavorites />);
        }
    }, [section]);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggleReglog);
        document.addEventListener("touchstart", toggleReglog);

        return () => {
            document.removeEventListener("mousedown", toggleReglog);
            document.removeEventListener("touchstart", toggleReglog);
        };
    }, [PopupRef]);

    const closeFunc = () => {
        setCloseAnimationLogout(true);

        setTimeout(() => {
            setCloseAnimationLogout(false);
            setStateLogout(false);
        }, 180);
    };

    const openFunc = () => {
        setStateLogout(true);
    };

    const toggleReglog = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            closeFunc();
        }
	};
	
	console.log(PopupRef);

    return (
        <>
            <Helmet>
                <title>Vhosty | {title}</title>
            </Helmet>

            <section className="cabinet">
                {stateLogout ? (
                    <CabinetLogout
                        closeAnimationLogout={closeAnimationLogout}
                        refPopup={PopupRef}
                    />
                ) : null}

                <div className="container">
                    <div className="cabinet-wrapper">
                        <HeaderTransparent bgImage={CabinetBg} />

                        <div className="cabinet-content">
                            <CabinetMenu openLogout={openFunc} />

                            {block}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cabinet;
