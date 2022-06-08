import React from "react";
import moment from "moment";

const CalendarSelect: React.FC = () => {
    const arrayDays1 = [0, 7, 14, 21, 28];
    const arrayDays2 = [1, 8, 15, 22, 29];
    const arrayDays3 = [2, 9, 16, 23, 30];
    const arrayDays4 = [3, 10, 17, 24, 31];
    const arrayDays5 = [4, 11, 18, 25, 0];
    const arrayDays6 = [5, 12, 19, 26, 0];
    const arrayDays7 = [6, 13, 20, 27, 0];

    const activeNum1 = 7;
    const activeNum2 = 23;

    // const [arrayDays, setArrayDays] = React.useState<number[]>([]);

    // React.useEffect(() => {
    //     const days = moment("August", "MMMM").daysInMonth();

    //     const newArrayDays = [];

    //     for (let i = 0; i < days; i++) {
    //         newArrayDays.push(i + 1);
    //     }

    //     setArrayDays(newArrayDays);
    // }, []);

    // console.log(moment("August", "MMMM").daysInMonth());
    // console.log(moment.monthsShort());

	return (
        <>
            <div className="calendar-select-top">
                <div className="calendar-select-top-arrow-btn disabled prev">
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

                <p className="calendar-select-top__title">Июнь 2022</p>

                <div className="calendar-select-top-arrow-btn next">
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
            <div className="calendar-select-days">
                <div className="calendar-select-days-column">
                    <span className="calendar-select-days-column__title">
                        пн
                    </span>

                    {arrayDays1.map((day, index) => (
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
                    ))}
                </div>

                <div className="calendar-select-days-column">
                    <span className="calendar-select-days-column__title">
                        вт
                    </span>

                    {arrayDays2.map((day, index) => (
                        <span
                            className={`calendar-select-days-column__day ${
                                day > activeNum1 && day < activeNum2
                                    ? "included"
                                    : ""
                            } ${day ? "" : "disabled"}`}
                            key={`calendar-select-days__item-August-${index}`}
                        >
                            {day ? day : ""}
                        </span>
                    ))}
                </div>

                <div className="calendar-select-days-column">
                    <span className="calendar-select-days-column__title">
                        ср
                    </span>

                    {arrayDays3.map((day, index) => (
                        <span
                            className={`calendar-select-days-column__day ${
                                index == 3 ? "active" : ""
                            } ${
                                day > activeNum1 && day < activeNum2
                                    ? "included"
                                    : ""
                            } ${day ? "" : "disabled"}`}
                            key={`calendar-select-days__item-August-${index}`}
                        >
                            {day ? day : ""}
                        </span>
                    ))}
                </div>

                <div className="calendar-select-days-column">
                    <span className="calendar-select-days-column__title">
                        чт
                    </span>

                    {arrayDays4.map((day, index) => (
                        <span
                            className={`calendar-select-days-column__day ${
                                day > activeNum1 && day < activeNum2
                                    ? "included"
                                    : ""
                            } ${day ? "" : "disabled"}`}
                            key={`calendar-select-days__item-August-${index}`}
                        >
                            {day ? day : ""}
                        </span>
                    ))}
                </div>

                <div className="calendar-select-days-column">
                    <span className="calendar-select-days-column__title">
                        пт
                    </span>

                    {arrayDays5.map((day, index) => (
                        <span
                            className={`calendar-select-days-column__day ${
                                day > activeNum1 && day < activeNum2
                                    ? "included"
                                    : ""
                            } ${day ? "" : "disabled"}`}
                            key={`calendar-select-days__item-August-${index}`}
                        >
                            {day ? day : ""}
                        </span>
                    ))}
                </div>

                <div className="calendar-select-days-column">
                    <span className="calendar-select-days-column__title">
                        сб
                    </span>

                    {arrayDays6.map((day, index) => (
                        <span
                            className={`calendar-select-days-column__day ${
                                day > activeNum1 && day < activeNum2
                                    ? "included"
                                    : ""
                            } ${day ? "" : "disabled"}`}
                            key={`calendar-select-days__item-August-${index}`}
                        >
                            {day ? day : ""}
                        </span>
                    ))}
                </div>

                <div className="calendar-select-days-column">
                    <span className="calendar-select-days-column__title">
                        вс
                    </span>

                    {arrayDays7.map((day, index) => (
                        <span
                            className={`calendar-select-days-column__day ${
                                day > activeNum1 && day < activeNum2
                                    ? "included"
                                    : ""
                            } ${day ? "" : "disabled"}`}
                            key={`calendar-select-days__item-August-${index}`}
                        >
                            {day ? day : ""}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CalendarSelect;
