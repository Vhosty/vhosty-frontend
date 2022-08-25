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
    return (
        <>
            <Helmet>
                <title>Bookover | Главная</title>
            </Helmet>

            <HomeMain />

            <HomeServices />

            <HomeSecurity /> 

            <HomeCorporate />

            {/* <HomeEmail /> */}
        </>
    );
};

export default Home;
