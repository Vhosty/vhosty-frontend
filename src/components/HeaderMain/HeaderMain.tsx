import React from "react";
import {Link} from "react-router-dom";

import LogoWhite from "../../assets/images/logo-white.svg";

const HeaderMain: React.FC = () => {
    return (
        <header className="header main">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-block">
                        <div className="header-block-menu-btn">
                            <svg
                                width="45"
                                height="38"
                                viewBox="0 0 45 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="45"
                                    height="4"
                                    rx="2"
                                    fill="white"
                                />
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

                        <Link to="/" className="header-block-logo">
                            <img
                                src={LogoWhite}
                                alt="Vhosty"
                                className="header-block-logo__image"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMain;
