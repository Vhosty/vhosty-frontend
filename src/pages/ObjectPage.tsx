import React from "react";
import {Helmet} from "react-helmet";

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

const ObjectPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>
                    Vhosty | Auster Avani Palm View Dubai Hotel & Suites
                </title>
            </Helmet>

            <ObjectPageCover />

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
    );
};

export default ObjectPage;
