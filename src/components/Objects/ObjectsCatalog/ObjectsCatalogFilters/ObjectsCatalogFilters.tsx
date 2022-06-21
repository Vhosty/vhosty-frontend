import React from "react";

import {
    ObjectsCatalogFiltersFavorites,
    ObjectsCatalogFiltersSearch,
    ObjectsCatalogFiltersSort,
} from "../../../";

const ObjectsCatalogFilters: React.FC = () => {
    return (
        <div className="objects-catalog-filters">
            <ObjectsCatalogFiltersFavorites />

			<ObjectsCatalogFiltersSearch />
			
			<ObjectsCatalogFiltersSort />
        </div>
    );
};

export default ObjectsCatalogFilters;
