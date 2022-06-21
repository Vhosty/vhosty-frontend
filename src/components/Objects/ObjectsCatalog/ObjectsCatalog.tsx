import React from "react";

import {
    ObjectsCatalogFilters,
    ObjectsCatalogBlock,
    ObjectsCatalogPagination,
} from "../../";

const ObjectsCatalog: React.FC = () => {
    return (
        <div className="objects-catalog">
            <ObjectsCatalogFilters />

            <div className="objects-catalog-block-wrapper">
                <ObjectsCatalogBlock />
                <ObjectsCatalogBlock />
                <ObjectsCatalogBlock />
                <ObjectsCatalogBlock />
                <ObjectsCatalogBlock />
                <ObjectsCatalogBlock />
                <ObjectsCatalogBlock />
                <ObjectsCatalogBlock />
				<ObjectsCatalogBlock />
				
				<ObjectsCatalogPagination />
            </div>
        </div>
    );
};

export default ObjectsCatalog;
