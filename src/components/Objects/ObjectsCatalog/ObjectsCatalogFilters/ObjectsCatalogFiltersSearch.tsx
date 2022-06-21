import React from "react";

const ObjectsCatalogFiltersSearch: React.FC = () => {
    return (
        <div className="objects-catalog-filters-search">
            <input
                type="text"
                className="objects-catalog-filters-search__input"
                placeholder="Поиск по названию отеля"
            />
        </div>
    );
};

export default ObjectsCatalogFiltersSearch;
