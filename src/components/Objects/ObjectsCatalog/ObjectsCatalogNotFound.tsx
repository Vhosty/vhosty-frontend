import React from "react";
import {Link} from "react-router-dom";

import ObjectsNotFoundImage from "../../../assets/images/objects-not-found.png";

const ObjectsCatalogNotFound: React.FC = () => {
    return (
        <div className="objects-catalog-not-found">
            <div className="objects-catalog-not-found-text">
                <h2 className="objects-catalog-not-found-text__title">
                    Ничего не найдено по ключевым словам ;(
                </h2>
                <p className="objects-catalog-not-found-text__description">
                    Попробуйте изменить и повторить запрос.
                </p>

                <Link
                    to="/"
                    className="btn objects-catalog-not-found-text__btn"
                >
                    Повторить поиск
                </Link>
            </div>

            <img
                src={ObjectsNotFoundImage}
                alt=""
                className="objects-catalog-not-found__img"
            />
        </div>
    );
};

export default ObjectsCatalogNotFound;
