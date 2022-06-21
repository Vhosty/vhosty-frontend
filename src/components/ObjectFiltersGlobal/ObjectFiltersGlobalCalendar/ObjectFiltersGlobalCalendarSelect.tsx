import React from "react";
import moment, {Moment} from "moment";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    plusfiltersMonthDate,
    minusfiltersMonthDate,
    setfiltersDaysMonth,
    setFiltersFromCalendarDate,
    setFiltersToCalendarDate,
} from "../../../redux/actions/filters";

const totalDays = 35;

const ObjectFiltersGlobalCalendarSelect: React.FC = () => {
    const dispatch = useDispatch();

    const {
        calendar: {date, daysMonth, from, to},
    } = useTypedSelector(({filters}) => filters);

    React.useEffect(() => {
        const startDay = date.clone().startOf("month").startOf("week");
        const day = startDay.clone().subtract(1, "day");

        dispatch(
            setfiltersDaysMonth(
                [...Array(totalDays)].map(() => day.add(1, "day").clone())
            )
        );
    }, [date]);

    const isSelectedMonth = (day: Moment) => date.isSame(day, "month");

    const isSelectedDay = (day: Moment) =>
        (from.date.isSame(day, "day") || to.date.isSame(day, "day")) &&
        from.selected;

    const addMonthOnClick = () => {
        dispatch(plusfiltersMonthDate());
    };

    const minusMonthOnClick = () => {
        dispatch(minusfiltersMonthDate());
    };

    const setFiltersCalendarDateOnClick = (day: Moment) => {
        if (from.active && from.date.isBefore(day)) {
            dispatch(setFiltersToCalendarDate(day));
        } else {
            dispatch(setFiltersFromCalendarDate(day));
        }
    };

    return (
        <>
            <div className="filters-object-form-calendar-select-top">
                <div
                    className={`filters-object-form-calendar-select-top-arrow-btn prev ${
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

                <p className="filters-object-form-calendar-select-top__title">
                    {date.format("MMMM YYYY")}
                </p>

                <div
                    className={`filters-object-form-calendar-select-top-arrow-btn next  ${
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

            <div className="filters-object-form-calendar-select-days-title">
                <span className="filters-object-form-calendar-select-days-title__title">
                    пн
                </span>
                <span className="filters-object-form-calendar-select-days-title__title">
                    вт
                </span>
                <span className="filters-object-form-calendar-select-days-title__title">
                    ср
                </span>
                <span className="filters-object-form-calendar-select-days-title__title">
                    чт
                </span>
                <span className="filters-object-form-calendar-select-days-title__title">
                    пт
                </span>
                <span className="filters-object-form-calendar-select-days-title__title">
                    сб
                </span>
                <span className="filters-object-form-calendar-select-days-title__title">
                    вс
                </span>
            </div>

            <div className="filters-object-form-calendar-select-days">
                {daysMonth.map((day, index) =>
                    isSelectedMonth(day) ? (
                        <span
                            className={`filters-object-form-calendar-select-days__day ${
                                day.isAfter(from.date) && day.isBefore(to.date)
                                    ? "included"
                                    : ""
                            } ${isSelectedDay(day) ? "active" : ""} ${
                                day.isBefore(moment().subtract(1, "days"))
                                    ? "disabled"
                                    : ""
                            }`}
                            key={`filters-object-form-calendar-select-days-${index}__day`}
                            onClick={() => setFiltersCalendarDateOnClick(day)}
                        >
                            {day.format("D")}
                        </span>
                    ) : (
                        <span
                            className={`filters-object-form-calendar-select-days__day disabled`}
                            key={`filters-object-form-calendar-select-days-${index}__day`}
                        ></span>
                    )
                )}
            </div>
        </>
    );
};

export default ObjectFiltersGlobalCalendarSelect;
