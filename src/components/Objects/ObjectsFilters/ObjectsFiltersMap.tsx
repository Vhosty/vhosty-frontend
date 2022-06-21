import React from "react";

import MapImage from "../../../assets/images/filters-small-map.png";

const ObjectsFiltersMap: React.FC = () => {
    return (
        <div
            className="objects-filters-map"
            style={{backgroundImage: `url('${MapImage}')`}}
        >
            <div className="objects-filters-map-btn">
                <button className="btn-white small objects-filters-map-btn__btn">
                    Список
                </button>

                <button className="btn small objects-filters-map-btn__btn">
                    Карта
                </button>
            </div>
        </div>
    );
};

export default ObjectsFiltersMap;
