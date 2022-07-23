import React from "react";

import {
    Loader,
    ObjectsCatalogFilters,
    ObjectsCatalogBlock,
    ObjectsCatalogPagination,
} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ObjectsCatalog: React.FC = () => {
    const {isLoaded, items} = useTypedSelector(({objects}) => objects);

    return (
        <div className="objects-catalog">
            <ObjectsCatalogFilters />

            <div className="objects-catalog-block-wrapper">
                {isLoaded ? (
                    <>
                        {items.map((object, index) => (
                            <ObjectsCatalogBlock
                                {...object}
                                blockIndex={`${object.id}-${index}`}
                                key={`objects-catalog-block-${object.id}-${index}`}
                            />
                        ))}

                        <ObjectsCatalogPagination />
                    </>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default ObjectsCatalog;
