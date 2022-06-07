import React from "react";
import {Link} from "react-router-dom";

import {HomeHeaderPassLink, HomeHeaderSearch, HomeHeaderUser} from "../../";

import LogoWhite from "../../../assets/images/logo-white.svg";

const HomeHeader: React.FC = () => {
    return (
        <header className="home-main-header">
            <div className="home-main-header-block">
                <div className="home-main-header-block-menu-btn">
                    <svg
                        width="45"
                        height="38"
                        viewBox="0 0 45 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="45" height="4" rx="2" fill="white" />
                        <rect
                            y="17"
                            width="45"
                            height="4"
                            rx="2"
                            fill="white"
                        />
                        <rect
                            y="34"
                            width="45"
                            height="4"
                            rx="2"
                            fill="#76DD87"
                        />
                    </svg>
                </div>

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
