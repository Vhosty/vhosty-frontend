import React from "react";

import {CabinetFavoritesBlock} from "../../";

const CabinetFavorites: React.FC = () => {
    return (
        <div className="cabinet-content-block cabinet-content-block-render cabinet-content-favorites">
            <h2 className="cabinet-content__title">Избранное</h2>
            <p className="cabinet-content__subtitle">
                Отмеченные Вами любимые объекты
            </p>

            <div className="cabinet-content-favorites-block-wrapper">
                <CabinetFavoritesBlock />
                <CabinetFavoritesBlock />
                <CabinetFavoritesBlock />
                <CabinetFavoritesBlock />
            </div>
        </div>
    );
};

export default CabinetFavorites;
