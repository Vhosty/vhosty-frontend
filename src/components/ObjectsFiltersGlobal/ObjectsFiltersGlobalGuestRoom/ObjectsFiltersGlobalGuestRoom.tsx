import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {checkDeclension} from "../../../functions/checkDeclension";

import {Popup, ObjectsFiltersGlobalGuestRoomSelect} from "../../";

const ObjectsFiltersGlobalGuestRoom: React.FC = () => {
    const {guestRoom} = useTypedSelector(
        ({objects_filters_global}) => objects_filters_global
    );

    const [activeSelect, setActiveSelect] = React.useState<boolean>(false);

    const [totalGuestRoom, setTotalGuestRoom] = React.useState<number>(0);
    const [totalGuestRoomKids, setTotalGuestRoomKids] =
        React.useState<number>(0);

    React.useEffect(() => {
        let totalGuestRoomTemp = 0;
        let totalGuestRoomKidsTemp = 0;

        guestRoom.map((item) => {
            totalGuestRoomTemp += item.adultsCount;
            totalGuestRoomKidsTemp += item.kids.length;
        });

        setTotalGuestRoom(totalGuestRoomTemp);
        setTotalGuestRoomKids(totalGuestRoomKidsTemp);
    }, [
        guestRoom.length,
        guestRoom.map((item) => item.adultsCount),
        guestRoom.map((item) => item.kids.length),
	]);
	
    const openSelect = () => {
        setActiveSelect(true);
    };

    return (
        <div className="filters-object-form-guest-room-wrapper">
            <div
                className="filters-object-form-guest-room"
                onClick={openSelect}
            >
                <span className="filters-object-form-guest-room__title">
                    {
                        checkDeclension(guestRoom.length, [
                            "номер",
                            "номера",
                            "номеров",
                        ]).title
                    }
                    ,{" "}
                    {
                        checkDeclension(totalGuestRoom, [
                            "гость",
                            "гостя",
                            "гостей",
                        ]).title
                    }
                    {totalGuestRoomKids
                        ? `, ${
                              checkDeclension(totalGuestRoomKids, [
                                  "ребенок",
                                  "ребенка",
                                  "детей",
                              ]).title
                          }`
                        : null}
                </span>

                <div
                    className={`filters-object-form-guest-room-icon ${
                        activeSelect ? "rotate" : ""
                    }`}
                >
                    <svg
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L6.58579 6.58579C7.36684 7.36684 8.63316 7.36683 9.41421 6.58579L15 1"
                            stroke="#116E67"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            <Popup
                wrapperActive={activeSelect}
                setWrapperActive={setActiveSelect}
                addClassWrapper="filters-object-form-guest-room-select-wrapper"
            >
                <ObjectsFiltersGlobalGuestRoomSelect />
            </Popup>
        </div>
    );
};

export default ObjectsFiltersGlobalGuestRoom;
