import React from "react";
import {useDispatch} from "react-redux";

import {
    Loader,
    ObjectsCatalogFilters,
    ObjectsCatalogBlock,
    ObjectsCatalogPagination,
    ObjectsCatalogNotFound,
    ImageBox,
} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ObjectsCatalog: React.FC = () => {
    const [isOpenImageBox, setIsOpenImageBox] = React.useState<boolean>(false);
    const [currentIndexBlockImageBox, setCurrentIndexBlockImageBox] =
        React.useState<number>(0);

    const {firstIsLoaded, isLoaded, items} = useTypedSelector(
        ({objects}) => objects
    );
    const {date} = useTypedSelector(
        ({objects_filters_global}) => objects_filters_global
    );

    return (
        <div className="objects-catalog">
            {/* <ObjectsCatalogFilters /> */}

            <ImageBox
                state={isOpenImageBox}
                setState={setIsOpenImageBox}
                images={items[currentIndexBlockImageBox]?.images}
            />

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
                                    date_query={`from=${date.from}&to=${date.to}`}
                                    openObjectsImageBox={() => {
                                        setCurrentIndexBlockImageBox(index);
                                        setIsOpenImageBox(true);
                                    }}
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
