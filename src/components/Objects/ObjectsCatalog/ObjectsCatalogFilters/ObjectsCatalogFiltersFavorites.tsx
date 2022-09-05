import React from "react";
import {useDispatch} from "react-redux";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import {setObjectsIsFavorites} from "../../../../redux/actions/objects/objects";

const ObjectsCatalogFiltersFavorites: React.FC = () => {
    const dispatch = useDispatch();

    const {isFavorites} = useTypedSelector(({objects}) => objects);

    return (
        <div className="objects-catalog-filters-favorites">
            <button
                className={`objects-catalog-filters-favorites__btn ${
                    isFavorites ? "active" : ""
                }`}
                onClick={() => dispatch(setObjectsIsFavorites(!isFavorites))}
            >
                <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12.0012 21.3241C11.6306 21.3238 11.2688 21.2163 10.9627 21.0154C6.42786 18.0525 4.46394 16.0181 3.38159 14.751C1.07381 12.0447 -0.031621 9.26503 0.000687937 6.25554C0.0364586 2.80627 2.9108 0 6.40824 0C8.76218 0 10.4469 1.18048 11.4969 2.26656C11.5616 2.33243 11.6396 2.38491 11.7261 2.42077C11.8126 2.45663 11.9058 2.47512 12 2.47512C12.0942 2.47512 12.1874 2.45663 12.2739 2.42077C12.3604 2.38491 12.4384 2.33243 12.5031 2.26656C13.5543 1.18048 15.2378 0 17.5918 0C21.0892 0 23.9635 2.80627 23.9993 6.25554C24.0316 9.26503 22.925 12.0447 20.6184 14.751C19.5361 16.0214 17.5721 18.0525 13.0373 21.0154C12.7319 21.2158 12.3709 21.3234 12.0012 21.3241Z" />
                </svg>
            </button>
        </div>
    );
};

export default ObjectsCatalogFiltersFavorites;
