import React from "react";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

import {
    HeaderTransparent,
    CabinetMenu,
    CabinetSetting,
    CabinetHistory,
    CabinetFavorites,
} from "../components/";

import CabinetBg from "../assets/images/cabinet-bg.jpg";

const Cabinet: React.FC = () => {
    const {section} = useParams();

    const [title, setTitle] = React.useState<string>("");
    const [block, setBlock] = React.useState<React.ReactNode>(<></>);

    React.useEffect(() => {
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

    return (
        <>
            <Helmet>
                <title>Bookover | {title}</title>
            </Helmet>

            <section className="cabinet">
                <div className="container">
                    <div className="cabinet-wrapper">
                        <HeaderTransparent bgImage={CabinetBg} />

                        <div className="cabinet-content">
                            <CabinetMenu />

                            {block}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cabinet;
