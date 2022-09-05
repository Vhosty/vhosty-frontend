import React from "react";
import {useDispatch} from "react-redux";

import {
    Loader,
    ObjectsCatalogFilters,
    ObjectsCatalogBlock,
    ObjectsCatalogPagination,
    ObjectsCatalogNotFound,
} from "../../";

import {
    setObjectsIsOpenImageBox,
    setObjectsCurrentIndexBlockImageBox,
} from "../../../redux/actions/objects/objects";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ObjectsCatalog: React.FC = () => {
    const dispatch = useDispatch();

    const {firstIsLoaded, isLoaded, items} = useTypedSelector(
        ({objects}) => objects
    );
    const {date} = useTypedSelector(
        ({objects_filters_global}) => objects_filters_global
    );

    const openObjectsImageBox = (index: number) => {
        dispatch(setObjectsCurrentIndexBlockImageBox(index) as any);
        dispatch(setObjectsIsOpenImageBox(true) as any);
    };

    return (
        <div className="objects-catalog">
            <ObjectsCatalogFilters />

            <div className="objects-catalog-block-wrapper">
                {firstIsLoaded ? (
                    items.length ? (
                        <>
                            {isLoaded ? null : (
                                <div className="objects-catalog-loader">
                                    <Loader />
                                </div>
                            )}

                            {items.map((object, index) => (
                                <ObjectsCatalogBlock
                                    {...object}
                                    blockIndex={`${object.id}-${index}`}
                                    openObjectsImageBox={() =>
                                        openObjectsImageBox(index)
                                    }
                                    date_query={`from=${date.from}&to=${date.to}`}
                                    key={`objects-catalog-block-${object.id}-${index}`}
                                />
                            ))}

                            <ObjectsCatalogPagination />
                        </>
                    ) : (
                        <ObjectsCatalogNotFound />
                    )
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default ObjectsCatalog;
