import React from "react";

import {HomeEmailForm} from "../../";

import HomeEmailBg from "../../../assets/images/home-email.jpg";

const HomeEmail: React.FC = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <section
            className="home-email"
            style={{backgroundImage: `url('${HomeEmailBg}')`}}
        >
            <div className="container">
                <div className="home-email-wrapper">
                    <HomeEmailForm onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    );
};

export default HomeEmail;
