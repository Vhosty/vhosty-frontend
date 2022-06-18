import React from "react";

import {FiltersObject} from "../components/";

import ObjectsBg from "../assets/images/objects-bg.jpg";

const Objects: React.FC = () => {
    return (
        <section
            className="objects"
            style={{backgroundImage: `url('${ObjectsBg}')`}}
        >
            <div className="container">
                <div className="objects-wrapper">
                    <FiltersObject />

                </div>
            </div>
        </section>
    );
};

export default Objects;
