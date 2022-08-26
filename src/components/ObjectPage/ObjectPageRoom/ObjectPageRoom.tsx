import React from "react";

import {useSearchParams} from "react-router-dom";

import {ObjectPageRoomFilters, ObjectPageRoomBlock} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ObjectPageRoom: React.FC<any> = ({rooms}) => {
    const {isLoadedUser} = useTypedSelector(({user}) => user);

    const [query] = useSearchParams();

    return (
        <div
            className="object-page-section object-page-section-room"
            id="object-page-room"
        >
            <div className="object-page-section-padding">
                <h2 className="object-page-section__title marginBottom">
                    Выбор доступного номера
                </h2>

                {/* <ObjectPageRoomFilters /> */}

                <div className="object-page-section-room-block-wrapper-wrappper">
                    {rooms.map((room: any, index: number) => (
                        <ObjectPageRoomBlock
                            {...room}
                            key={`object-page-section-room-block-${index}`}
                            isLogin={isLoadedUser}
                            date_query={`from=${query.get(
                                "from"
                            )}&to=${query.get("to")}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ObjectPageRoom;
