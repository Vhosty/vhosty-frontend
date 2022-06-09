import React from "react";

import {Popup, GuestRoomSelect} from "../../";

const GuestRoom: React.FC = () => {
    const [activeSelect, setActiveSelect] = React.useState<boolean>(false);
    const [activeSelectAnimation, setActiveSelectAnimation] =
        React.useState<boolean>(false);

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
        <div className="guest-room-wrapper">
            <div className="guest-room" onClick={openSelect}>
                <span className="guest-room__title">
                    1 номер, 2 гостя, 1 ребенок
                </span>

                <div
                    className={`guest-room-icon ${
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
                addClassWrapper="guest-room-select"
                refPopup={PopupRef}
            >
                <GuestRoomSelect />
            </Popup>
        </div>
    );
};

export default GuestRoom;
