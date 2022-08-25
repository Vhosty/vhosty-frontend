import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {useParams} from "react-router-dom";

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
} from "../components/";

import {fetchObjectPageItemById} from "../redux/actions/object_page";

import {useTypedSelector} from "../hooks/useTypedSelector";

const ObjectPage: React.FC = () => {
    const {id} = useParams();

    const {itemById, isLoaded} = useTypedSelector(
        ({object_page}) => object_page
    );

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchObjectPageItemById(id ? id : "") as any);
    }, [id]);

    return (
        <>
            {isLoaded ? (
                <>
                    <Helmet>
                        <title>Bookover | {itemById.name}</title>
                    </Helmet>

                    <ObjectPageCover {...itemById} />

                    <ObjectPageNavigation />

                    <section className="object-page">
                        <div className="container">
                            <div className="object-page-wrapper">
                                <ObjectPageSliderImages />

                                <ObjectPageAbout />

                                <PrimeSectionBlock />

                                <ObjectPageRoom />

                                <ObjectPageMaps />

                                <ObjectPageFeedbacks />

                                <ObjectPageServices />

                                <ObjectPageTerms />

                                <ObjectPageFaq />
                            </div>
                        </div>
                    </section>
                </>
            ) : null}
        </>
    );
};

export default ObjectPage;
