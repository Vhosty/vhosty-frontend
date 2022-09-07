import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {useParams, useSearchParams} from "react-router-dom";

import {
    ObjectPageCover,
    ObjectPageNavigation,
    ObjectPageSliderImages,
    ObjectPageAbout,
    PrimeSectionBlock,
    ObjectPageRoom,
    ObjectPageMaps,
    ObjectPageFeedbacks,
    ObjectPageServices,
    ObjectPageTerms,
    ObjectPageFaq,
    ImageBox,
} from "../components/";

import {setObjectsIsOpenImageBox} from "../redux/actions/objects/objects";

import {
    fetchObjectPageItemById,
    fetchObjectPageItemByIdRooms,
    fetchObjectPageItemByIdServices,
    fetchObjectPageItemByIdTerms,
} from "../redux/actions/object_page";

import {useTypedSelector} from "../hooks/useTypedSelector";

const ObjectPage: React.FC = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const [query] = useSearchParams();

    const {
        itemById,
        isLoaded,
        itemByIdRooms,
        isLoadedRooms,
        itemByIdServices,
        isLoadedServices,
        itemByIdTerms,
        isLoadedTerms,
    } = useTypedSelector(({object_page}) => object_page);

    const {isOpenImageBox, currentIndexImageBox} = useTypedSelector(
        ({objects}) => objects
    );

    React.useEffect(() => {
        const date: any = {
            checkin_date: query.get("from"),
            checkout_date: query.get("to"),
        };

        dispatch(fetchObjectPageItemById(id ? id : "") as any);
        dispatch(fetchObjectPageItemByIdRooms(id ? id : "", date) as any);
        dispatch(fetchObjectPageItemByIdServices(id ? id : "") as any);
        dispatch(fetchObjectPageItemByIdTerms(id ? id : "") as any);
    }, [id]);

    const openObjectsImageBox = (status: boolean) => {
        dispatch(setObjectsIsOpenImageBox(status) as any);
    };

    return (
        <>
            {isLoaded && isLoadedRooms && isLoadedServices && isLoadedTerms ? (
                <>
                    <Helmet>
                        <title>Bookover | {itemById.name}</title>
                    </Helmet>

                    <ObjectPageCover {...itemById} />

                    <ObjectPageNavigation />

                    <ImageBox
                        state={isOpenImageBox}
                        setState={openObjectsImageBox}
                        images={itemById.images}
                        initIndex={currentIndexImageBox}
                    />

                    <section className="object-page">
                        <div className="container">
                            <div className="object-page-wrapper">
                                <ObjectPageSliderImages {...itemById} />

                                <ObjectPageAbout {...itemById} />

                                {/* <PrimeSectionBlock /> */}

                                <ObjectPageRoom rooms={itemByIdRooms} />

                                {/* <ObjectPageMaps /> */}

                                {/* <ObjectPageFeedbacks /> */}

                                <ObjectPageServices
                                    services={itemByIdServices}
                                />

                                <ObjectPageTerms {...itemByIdTerms} />

                                {/* <ObjectPageFaq /> */}
                            </div>
                        </div>
                    </section>
                </>
            ) : null}
        </>
    );
};

export default ObjectPage;
