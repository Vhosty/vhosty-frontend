import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    ObjectsFiltersGlobal,
    ObjectsFilters,
    ObjectsCatalog,
    ImageBox,
} from "../components/";

import {setObjectsIsOpenImageBox} from "../redux/actions/objects/objects";

import ObjectsBg from "../assets/images/objects-bg.jpg";

const Objects: React.FC = () => {
    const dispatch = useDispatch();

    const {isOpenImageBox, items, currentIndexBlockImageBox, isLoaded} =
        useTypedSelector(({objects}) => objects);

    const openObjectsImageBox = (status: boolean) => {
        dispatch(setObjectsIsOpenImageBox(status) as any);
    };

    return (
        <>
            <Helmet>
                <title>Bookover | Найти отель</title>
            </Helmet>

            <section className="objects">
                <div
                    className="objects-bg"
                    style={{backgroundImage: `url('${ObjectsBg}')`}}
                ></div>

                <ImageBox
                    state={isOpenImageBox}
                    setState={openObjectsImageBox}
                    images={items[currentIndexBlockImageBox]?.images}
                />

                <div className="container">
                    <div className="objects-wrapper">
                        <ObjectsFiltersGlobal />

                        <div className="objects-catalog-wrapper">
                            <ObjectsFilters />

                            <ObjectsCatalog />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Objects;
