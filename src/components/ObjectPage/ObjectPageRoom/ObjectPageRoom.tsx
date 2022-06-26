import React from "react";

import {ObjectPageRoomFilters, ObjectPageRoomBlock} from "../../";

const ObjectPageRoom: React.FC = () => {
    return (
        <div
            className="object-page-section object-page-section-room"
            id="object-page-room"
        >
            <div className="object-page-section-padding">
                <h2 className="object-page-section__title marginBottom">
                    Выбор доступного номера
                </h2>

                <ObjectPageRoomFilters />

                <div className="object-page-section-room-block-wrapper-wrappper">
                    <ObjectPageRoomBlock />
                    <ObjectPageRoomBlock />
                </div>
            </div>
        </div>
    );
};

export default ObjectPageRoom;
