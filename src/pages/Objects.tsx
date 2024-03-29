import React from "react";
import {Helmet} from "react-helmet";

import {
    ObjectsFiltersGlobal,
    ObjectsFilters,
    ObjectsCatalog,
} from "../components/";

import ObjectsBg from "../assets/images/objects-bg.jpg";

const Objects: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Bookover | Найти отель</title>
            </Helmet>

            <section className="objects">
                <div
                    className="objects-bg"
                    style={{backgroundImage: `url('${ObjectsBg}')`}}
                ></div>

                <div className="container">
                    <div className="objects-wrapper">
                        <ObjectsFiltersGlobal />

                        <div className="objects-catalog-wrapper">
                            {/* <ObjectsFilters /> */}

                            <ObjectsCatalog />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Objects;
