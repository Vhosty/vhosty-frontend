import React from "react";

import {Select} from "../../../";

const ObjectsCatalogFiltersSort: React.FC = () => {
    const sortTypes = [
        {
            key: "cheaper",
            title: "Сначала дешевые",
        },

        {
            key: "expensive",
            title: "Сначала дорогие",
        },

        {
            key: "popular",
            title: "По популярности",
        },

        {
            key: "distance",
            title: "По расстоянию",
        },

        {
            key: "rating",
            title: "По рейтингу",
        },
    ];

    return (
        <div className="objects-catalog-filters-sort">
            <Select choices={sortTypes} />
        </div>
    );
};

export default ObjectsCatalogFiltersSort;
