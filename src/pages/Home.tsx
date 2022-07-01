import React from "react";
import {Helmet} from "react-helmet";

import {
    HomeMain,
    HomeServices,
    HomeSecurity,
    HomeCorporate,
    HomeEmail,
} from "../components";

const Home: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Vhosty | Главная</title>
            </Helmet>

            <HomeMain />

            <HomeServices />

            <HomeSecurity />

            <HomeCorporate />

            <HomeEmail />
        </>
    );
};

export default Home;
