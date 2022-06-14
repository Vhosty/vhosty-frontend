import React from "react";
import moment, {Moment} from "moment";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    plusFiltersCalendarMonthDate,
    minusFiltersCalendarMonthDate,
    setFiltersCalendarDaysMonth,
    setFiltersFromCalendarDate,
    setFiltersToCalendarDate,
    setFiltersFromCalendarDateAction,
} from "../../../redux/actions/filtersCalendar";

const totalDays = 35;

const CalendarSelect: React.FC = () => {
    const dispatch = useDispatch();

    const {date, daysMonth, from} = useTypedSelector(
        ({filtersCalendar}) => filtersCalendar
    );

    React.useEffect(() => {
        const startDay = date.clone().startOf("month").startOf("week");
        const day = startDay.clone().subtract(1, "day");

        dispatch(
            setFiltersCalendarDaysMonth(
                [...Array(totalDays)].map(() => day.add(1, "day").clone())
            )
        );
    }, [date]);

    const isSelectedMonth = (day: Moment) => date.isSame(day, "month");
    const isSelectedDay = (day: Moment) => moment(from.date).isSame(day, "day");
    // ||
    // moment(toDate).isSame(day, "day");

    const isSmall = (day: Moment) => day;

    const addMonthOnClick = () => {
        dispatch(plusFiltersCalendarMonthDate());
    };

    const minusMonthOnClick = () => {
        dispatch(minusFiltersCalendarMonthDate());
    };

    const setFiltersFromCalendarDateOnClick = (day: Moment) => {
        if (isSelectedDay(day)) {
            dispatch(setFiltersFromCalendarDateAction(!from.active));
        } else {
            dispatch(setFiltersFromCalendarDate(day));
        }
    };

    const setFiltersToCalendarDateOnClick = (day: Moment) => {
        dispatch(setFiltersToCalendarDate(day));
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
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 1L2.41421 6.58579C1.63316 7.36684 1.63316 8.63316 2.41421 9.41421L8 15"
                            strokeWidth="2"
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
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 15L6.58579 9.41421C7.36684 8.63316 7.36684 7.36684 6.58579 6.58579L1 1"
                            strokeWidth="2"
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

            <div className="calendar-select-days">
                {daysMonth.map((day, index) =>
                    isSelectedMonth(day) ? (
                        <span
                            className={`calendar-select-days__day ${
                                isSelectedDay(day) ? `active` : ""
                            }`}
                            style={{
                                border:
                                    isSelectedDay(day) && from.active
                                        ? "3px solid #E6F6F6"
                                        : "0px solid #E6F6F6",
                            }}
                            key={`calendar-select-days-${index}__day`}
                            onClick={() =>
                                setFiltersFromCalendarDateOnClick(day)
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

                {/* {Object.keys(days).map((key, index) => (
                    <div
                        className="calendar-select-days-column"
                        key={`calendar-select-days-column-${key}-${index}`}
                    >
                        <span className="calendar-select-days-column__title">
                            пн
                        </span>

                        {Object.keys(days[key]).map((key2, subIndex) => (
                            <span
                                className={`calendar-select-days-column__day ${
                                    index == 1 ? "active1" : ""
                                } ${
                                    days[key][key2] > activeNum1 &&
                                    days[key][key2] < activeNum2
                                        ? "included"
                                        : ""
                                } ${days[key][key2] ? "" : "disabled"}`}
                                key={`calendar-select-days__item-${index}-${subIndex}`}
                            >
                                {days[key][key2] ? days[key][key2] : ""}
                            </span>
                        ))}
                    </div>
                ))} */}

                {/* {arrayDays1.map((day, index) => (
                        <span
                            className={`calendar-select-days-column__day ${
                                index == 1 ? "active" : ""
                            } ${
                                day > activeNum1 && day < activeNum2
                                    ? "included"
                                    : ""
                            } ${day ? "" : "disabled"}`}
                            key={`calendar-select-days__item-August-${index}`}
                        >
                            {day ? day : ""}
                        </span>
                    ))} */}
            </div>
        </>
    );
};

export default CalendarSelect;
