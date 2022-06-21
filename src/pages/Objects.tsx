import React from "react";

import {
    ObjectFiltersGlobal,
    ObjectsFilters,
    ObjectsCatalog,
} from "../components/";

import ObjectsBg from "../assets/images/objects-bg.jpg";

const Objects: React.FC = () => {
    return (
        <section className="objects">
            <div
                className="objects-bg"
                style={{backgroundImage: `url('${ObjectsBg}')`}}
            ></div>

            <div className="container">
                <div className="objects-wrapper">
                    <ObjectFiltersGlobal />

                    <div className="objects-catalog-wrapper">
						<ObjectsFilters />
						
						<ObjectsCatalog />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Objects;
