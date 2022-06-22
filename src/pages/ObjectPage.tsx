import React from "react";

import {ObjectPageCover, ObjectPageNavigation} from "../components/";

const ObjectPage: React.FC = () => {
    return (
        <>
            <ObjectPageCover />

            <ObjectPageNavigation />

            <section className="object-page">
                <div className="container">
                    <div className="object-page-wrapper"></div>
                </div>
            </section>
        </>
    );
};

export default ObjectPage;
