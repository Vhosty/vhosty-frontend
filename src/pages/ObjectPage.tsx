import React from "react";

import { ObjectPageCover} from "../components/";

const ObjectPage: React.FC = () => {
    return (
        <>
            <ObjectPageCover />

            <section className="object-page">
                <div className="container">
                    <div className="object-page-wrapper"></div>
                </div>
            </section>
        </>
    );
};

export default ObjectPage;
