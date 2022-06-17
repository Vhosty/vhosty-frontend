import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {checkDeclension} from "../../../functions/checkDeclension";

import {Popup, FiltersObjectGuestRoomSelect} from "../../";

const FiltersObjectGuestRoom: React.FC = () => {
    const {guestRoom} = useTypedSelector(
        ({filters}) => filters
    );

    const [activeSelect, setActiveSelect] = React.useState<boolean>(false);
    const [activeSelectAnimation, setActiveSelectAnimation] =
        React.useState<boolean>(false);

    const [totalGuestRoom, setTotalGuestRoom] = React.useState(0);
    const [totalGuestRoomKids, setTotalGuestRoomKids] = React.useState(0);

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

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggleSelect);
        document.addEventListener("touchstart", toggleSelect);

        return () => {
            document.removeEventListener("mousedown", toggleSelect);
            document.removeEventListener("touchstart", toggleSelect);
        };
    }, [PopupRef]);

    const openSelect = () => {
        setActiveSelect(true);
    };

    const closeSelect = () => {
        setActiveSelectAnimation(true);

        setTimeout(() => {
            setActiveSelectAnimation(false);
            setActiveSelect(false);
        }, 180);
    };

    const toggleSelect = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            closeSelect();
        }
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
                active={activeSelect}
                activeAnimation={activeSelectAnimation}
                addClassWrapper="filters-object-form-guest-room-select-wrapper"
                refPopup={PopupRef}
            >
                <FiltersObjectGuestRoomSelect />
            </Popup>
        </div>
    );
};

export default FiltersObjectGuestRoom;
