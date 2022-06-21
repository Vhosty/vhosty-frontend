import React from "react";

import {
    ObjectsFiltersMap,
    ObjectsFiltersPrice,
    ObjectsFiltersDistance,
    ObjectsFiltersLocation,
    ObjectsFiltersTerms,
    ObjectsFiltersTypes,
    ObjectsFiltersStars,
    ObjectsFiltersFeedbacks,
    ObjectsFiltersServicesObject,
    ObjectsFiltersServicesRoom,
    ObjectsFiltersFoods,
    ObjectsFiltersHotels,
    ObjectsFiltersThemes,
} from "../../";

const ObjectsFilters: React.FC = () => {
    return (
        <div className="objects-filters-wrapper">
            <ObjectsFiltersMap />

            <div className="objects-filters">
                <ObjectsFiltersPrice />

                <ObjectsFiltersDistance />

                <ObjectsFiltersLocation />

                <ObjectsFiltersTerms />

                <ObjectsFiltersTypes />

                <ObjectsFiltersStars />

                <ObjectsFiltersFeedbacks />

                <ObjectsFiltersServicesObject />

                <ObjectsFiltersServicesRoom />

                <ObjectsFiltersFoods />

                <ObjectsFiltersHotels />

                <ObjectsFiltersThemes />
            </div>
        </div>
    );
};

export default ObjectsFilters;
