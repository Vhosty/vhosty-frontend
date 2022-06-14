import React from "react";
import {Link} from "react-router-dom";

import {
    HeaderModal,
    HomeHeaderPassLink,
    HomeHeaderSearch,
    HomeHeaderUser,
} from "../../";

import LogoWhite from "../../../assets/images/logo-white.svg";

const HomeHeader: React.FC = () => {
    return (
        <header className="home-main-header">
            <div className="home-main-header-block">
                <HeaderModal />

                <Link to="/" className="home-main-header-block-logo">
                    <img
                        src={LogoWhite}
                        alt="Vhosty"
                        className="home-main-header-block-logo__image"
                    />
                </Link>
            </div>

            <HomeHeaderSearch />

            <HomeHeaderPassLink />

            <HomeHeaderUser />
        </header>
    );
};

export default HomeHeader;
