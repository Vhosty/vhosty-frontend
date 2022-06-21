import React from "react";

import {ObjectsFiltersBlockWrapper, TitleIcon, Checkbox} from "../../";

const ObjectsFiltersHotels: React.FC = () => {
    const hotels = [
        "Marriott",
        "Novotel",
        "Westin",
        "Radisson",
        "Holiday Inn",
        "Hilton Hotels & Resorts",
    ];

    return (
        <ObjectsFiltersBlockWrapper
            allBtnVisible={hotels.length > 4 ? true : false}
        >
            <div className="objects-filters-block-title">
                <TitleIcon title="Сеть отелей" marginBottom>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17 2C17.5531 2 18 2.44781 18 3C18 3.55219 17.5531 4 17 4V16C17.5531 16 18 16.4469 18 17C18 17.5531 17.5531 18 17 18H11.5V16H8.5V18H3C2.44781 18 2 17.5531 2 17C2 16.4469 2.44781 16 3 16V4C2.44781 4 2 3.55219 2 3C2 2.44781 2.44781 2 3 2H17ZM5.5 5C5.225 5 5 5.225 5 5.5V6.5C5 6.775 5.225 7 5.5 7H6.5C6.775 7 7 6.775 7 6.5V5.5C7 5.225 6.775 5 6.5 5H5.5ZM9 6.5C9 6.775 9.225 7 9.5 7H10.5C10.775 7 11 6.775 11 6.5V5.5C11 5.225 10.775 5 10.5 5H9.5C9.225 5 9 5.225 9 5.5V6.5ZM13.5 5C13.225 5 13 5.225 13 5.5V6.5C13 6.775 13.225 7 13.5 7H14.5C14.775 7 15 6.775 15 6.5V5.5C15 5.225 14.775 5 14.5 5H13.5ZM5 9.5C5 9.775 5.225 10 5.5 10H6.5C6.775 10 7 9.775 7 9.5V8.5C7 8.225 6.775 8 6.5 8H5.5C5.225 8 5 8.225 5 8.5V9.5ZM9.5 8C9.225 8 9 8.225 9 8.5V9.5C9 9.775 9.225 10 9.5 10H10.5C10.775 10 11 9.775 11 9.5V8.5C11 8.225 10.775 8 10.5 8H9.5ZM13 9.5C13 9.775 13.225 10 13.5 10H14.5C14.775 10 15 9.775 15 9.5V8.5C15 8.225 14.775 8 14.5 8H13.5C13.225 8 13 8.225 13 8.5V9.5ZM10 11C8.6 11 7.42188 11.9594 7.06563 13.2563C6.99063 13.6594 7.33437 14 7.75 14H12.25C12.6656 14 13.0094 13.6594 12.9062 13.2563C12.5781 11.9594 11.4 11 10 11Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>
            </div>

            <div className="objects-filters-block-checkboxes">
                {hotels.map((hotel, index) => (
                    <div
                        className="objects-filters-block-checkbox"
                        key={`objects-filters-block-checkbox-hotel-chain-${index}`}
                    >
                        <Checkbox small>{hotel}</Checkbox>
                    </div>
                ))}
            </div>
        </ObjectsFiltersBlockWrapper>
    );
};

export default ObjectsFiltersHotels;
