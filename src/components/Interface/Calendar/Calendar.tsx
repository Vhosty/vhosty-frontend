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

interface CalendarProps {
    initialState?: {
        from: string;
        to: string;
    };

    onChange?: (from: Moment, to: Moment) => void;
}

const Calendar: React.FC<CalendarProps> = ({onChange, initialState}) => {
    const [activeCalendar, setActiveCalendar] = React.useState<boolean>(false);

    const [date, setDate] = React.useState<Moment>(moment());

    const [from, setFrom] = React.useState<CalendarFrom>({
        date: moment(),
        active: false,
        selected: false,
    });

    const [to, setTo] = React.useState<CalendarTo>({
        date: moment(),
    });

    React.useEffect(() => {
        if (initialState?.from) {
            setFrom({
                ...from,
                date: moment(initialState?.from, "YYYY-MM-DD"),
                selected: true,
            });
        }

        if (initialState?.to) {
            setTo({...to, date: moment(initialState?.to, "YYYY-MM-DD")});
        }
	}, [initialState?.from, initialState?.to]);
	
    React.useEffect(() => {
        if (onChange && to.date.diff(from.date, "days") !== 0) {
            onChange(from.date, to.date);
        }
    }, [from, to]);

    const [daysMonth, setDaysMonth] = React.useState<Moment[]>([]);

    const openCalendar = () => {
        setActiveCalendar(true);
    };

    return (
        <div className="calendar-wrapper">
            <div className="calendar" onClick={openCalendar}>
                <div className="calendar-period">
                    <span className="calendar-period__from">
                        {from.selected
                            ? from.date.format("D MMM (dd)")
                            : "Заезд"}
                    </span>
                    <div className="calendar-period-line"></div>
                    <span className="calendar-period__to">
                        {from.selected && !from.date.isSame(to.date, "days")
                            ? to.date.format("D MMM (dd)")
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
                wrapperActive={activeCalendar}
                setWrapperActive={setActiveCalendar}
                addClassWrapper="calendar-select"
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
