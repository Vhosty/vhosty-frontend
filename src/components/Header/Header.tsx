import React from "react";
import {Link} from "react-router-dom";

import {HeaderModal, HeaderPassLink, HeaderUser} from "../";

import LogoColor from "../../assets/images/logo-color.svg";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-block">
                        <HeaderModal color />

                        <Link to="/" className="header-block-logo">
                            <img
                                src={LogoColor}
                                alt="Vhosty"
                                className="header-block-logo__image"
                            />
                        </Link>
                    </div>

                    <div className="header-block">
						<HeaderPassLink />
						
						<HeaderUser />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
