import React from "react";
import moment, {Moment} from "moment";

import {CalendarFrom, CalendarTo} from "./Calendar";

const totalDays = 35;

interface CalendarSelectProps {
    date: Moment;
    from: CalendarFrom;
    to: CalendarTo;

    daysMonth: Moment[];

    setDaysMonth: (days: Moment[]) => void;
    setDate: (date: Moment) => void;
    setFrom: (from: CalendarFrom) => void;
    setTo: (to: CalendarTo) => void;
}

const CalendarSelect: React.FC<CalendarSelectProps> = ({
    date,
    from,
    to,
    daysMonth,
    setDaysMonth,
    setDate,
    setFrom,
    setTo,
}) => {
    React.useEffect(() => {
        const startDay = date.clone().startOf("month").startOf("week");
        const day = startDay.clone().subtract(1, "day");

        setDaysMonth(
            [...Array(totalDays)].map(() => day.add(1, "day").clone())
        );
    }, [date]);

    const isSelectedMonth = (day: Moment) => date.isSame(day, "month");

    const isSelectedDay = (day: Moment) =>
        (from.date.isSame(day, "day") || to.date.isSame(day, "day")) &&
        from.selected;

    const addMonthOnClick = () => {
        if (moment(date).isBefore(moment().add(1, "years"))) {
            setDate(moment(date).add(1, "month"));
            setDaysMonth([]);
        }
    };

    const minusMonthOnClick = () => {
        if (moment(date).isAfter(moment())) {
            setDate(moment(date).subtract(1, "month"));
            setDaysMonth([]);
        }
    };

    const setFiltersCalendarDateOnClick = (day: Moment) => {
        if (from.active && from.date.isBefore(day)) {
            setFrom({...from, active: false});
            setTo({...to, date: day});
        } else {
            setFrom({...from, date: day, active: true, selected: true});
            setTo({...to, date: day});
        }
	};

    return (
        <>
            <div className="calendar-select-top">
                <div
                    className={`calendar-select-top-arrow-btn prev ${
                        moment(date).format("MMMM") ===
                            moment().format("MMMM") &&
                        moment(date).format("YYYY") === moment().format("YYYY")
                            ? "disabled"
                            : ""
                    }`}
                    onClick={minusMonthOnClick}
                >
                    <svg
                        width="7"
                        height="13"
                        viewBox="0 0 7 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.25 1.5L2.06066 5.68934C1.47487 6.27513 1.47487 7.22487 2.06066 7.81066L6.25 12"
                            stroke="#00A0A0"
                            strokeOpacity="0.5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <p className="calendar-select-top__title">
                    {date.format("MMMM YYYY")}
                </p>

                <div
                    className={`calendar-select-top-arrow-btn next  ${
                        moment(date).format("MM") === moment().format("MM") &&
                        parseInt(moment(date).format("YYYY")) ===
                            parseInt(moment().format("YYYY")) + 1
                            ? "disabled"
                            : ""
                    }`}
                    onClick={addMonthOnClick}
                >
                    <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.75 11.25L4.93934 7.06066C5.52513 6.47487 5.52513 5.52513 4.93934 4.93934L0.750001 0.75"
                            stroke="#00A0A0"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="calendar-select-days-title">
                <span className="calendar-select-days-title__title">пн</span>
                <span className="calendar-select-days-title__title">вт</span>
                <span className="calendar-select-days-title__title">ср</span>
                <span className="calendar-select-days-title__title">чт</span>
                <span className="calendar-select-days-title__title">пт</span>
                <span className="calendar-select-days-title__title">сб</span>
                <span className="calendar-select-days-title__title">вс</span>
            </div>

            {daysMonth.length ? (
                <div className="calendar-select-days">
                    {daysMonth.map((day, index) =>
                        isSelectedMonth(day) ? (
                            <span
                                className={`calendar-select-days__day ${
                                    day.isAfter(from.date) &&
                                    day.isBefore(to.date)
                                        ? "included"
                                        : ""
                                } ${isSelectedDay(day) ? "active" : ""} ${
                                    day.isBefore(moment().subtract(1, "days"))
                                        ? "disabled"
                                        : ""
                                }`}
                                key={`calendar-select-days-${index}__day`}
                                onClick={() =>
                                    setFiltersCalendarDateOnClick(day)
                                }
                            >
                                {day.format("D")}
                            </span>
                        ) : (
                            <span
                                className={`calendar-select-days__day disabled`}
                                key={`calendar-select-days-${index}__day`}
                            ></span>
                        )
                    )}
                </div>
            ) : null}
        </>
    );
};

export default CalendarSelect;
