import React from "react";

import {Popup, CalendarSelect} from "../../";

const Calendar: React.FC = () => {
    const [activeCalendar, setActiveCalendar] = React.useState<boolean>(false);
    const [activeCalendarAnimation, setActiveCalendarAnimation] =
        React.useState<boolean>(false);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggleCalendar);
        document.addEventListener("touchstart", toggleCalendar);

        return () => {
            document.removeEventListener("mousedown", toggleCalendar);
            document.removeEventListener("touchstart", toggleCalendar);
        };
    }, [PopupRef]);

    const openCalendar = () => {
        setActiveCalendar(true);
    };

    const closeCalendar = () => {
        setActiveCalendarAnimation(true);

        setTimeout(() => {
            setActiveCalendarAnimation(false);
            setActiveCalendar(false);
        }, 180);
    };

    const toggleCalendar = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            closeCalendar();
        }
    };

    return (
        <div className="calendar-wrapper">
            <div className="calendar" onClick={openCalendar}>
                <div className="calendar-period">
                    <span className="calendar-period__from">23 авг. (Вс)</span>
                    <div className="calendar-period__line"></div>
                    <span className="calendar-period__to">14 сент. (Пт)</span>
                </div>

                <span className="calendar__count">29 суток</span>

                <div
                    className={`calendar-icon ${
                        activeCalendar ? "rotate" : ""
                    }`}
                >
                    <svg
                        width="21"
                        height="11"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L8.325 8.71053C9.50775 9.95553 11.4922 9.95553 12.675 8.71053L20 1"
                            stroke="#253021"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            <Popup
                active={activeCalendar}
                activeAnimation={activeCalendarAnimation}
                addClassWrapper="calendar-select"
                refPopup={PopupRef}
            >
                <CalendarSelect />
            </Popup>
        </div>
    );
};

export default Calendar;
