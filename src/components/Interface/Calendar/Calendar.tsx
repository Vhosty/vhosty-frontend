import React from "react";
import moment, {Moment} from "moment";

import {checkDeclension} from "../../../functions/checkDeclension";

import {Popup, CalendarSelect} from "../../";

export interface CalendarFrom {
    date: Moment;
    active: boolean;
    selected: boolean;
}

export interface CalendarTo {
    date: Moment;
}

const Calendar: React.FC = () => {
    const [activeCalendar, setActiveCalendar] = React.useState<boolean>(false);
    const [activeCalendarAnimation, setActiveCalendarAnimation] =
        React.useState<boolean>(false);

    const [date, setDate] = React.useState<Moment>(moment());
    const [from, setFrom] = React.useState<CalendarFrom>({
        date: moment(),
        active: false,
        selected: false,
    });
    const [to, setTo] = React.useState<CalendarTo>({
        date: moment(),
    });
    const [daysMonth, setDaysMonth] = React.useState<Moment[]>([]);

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
                    <span className="calendar-period__from">
                        {from.selected
                            ? from.date.format("D MMMM (dd)")
                            : "Заезд"}
                    </span>
                    <div className="calendar-period__line"></div>
                    <span className="calendar-period__to">
                        {from.selected && !from.date.isSame(to.date, "days")
                            ? to.date.format("D MMMM (dd)")
                            : "Отъезд"}
                    </span>
                </div>

                <span className="calendar__count">
                    {to.date.diff(from.date, "days") == 0
                        ? ""
                        : checkDeclension(to.date.diff(from.date, "days"), [
                              "сутки",
                              "суток",
                              "суток",
                          ]).title}
                </span>

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
                <CalendarSelect
                    date={date}
                    from={from}
                    to={to}
                    daysMonth={daysMonth}
                    setDaysMonth={setDaysMonth}
                    setDate={setDate}
                    setFrom={setFrom}
                    setTo={setTo}
                />
            </Popup>
        </div>
    );
};

export default Calendar;
