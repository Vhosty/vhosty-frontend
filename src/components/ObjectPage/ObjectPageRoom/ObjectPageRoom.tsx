import React from "react";

import {ObjectPageRoomFilters, ObjectPageRoomBlock} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ObjectPageRoom: React.FC = () => {
    const {isPending} = useTypedSelector(({login}) => login);
    const {itemById} = useTypedSelector(({object_page}) => object_page);

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
                    <ObjectPageRoomBlock isLogin={isPending} />
                </div>
            </div>
        </div>
    );
};

export default ObjectPageRoom;
