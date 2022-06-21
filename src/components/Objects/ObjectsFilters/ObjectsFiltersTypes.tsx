import React from "react";

import {ObjectsFiltersBlockWrapper, TitleIcon, Checkbox} from "../../";

const ObjectsFiltersTypes: React.FC = () => {
    const types = [
        "Отели",
        "Хостелы",
        "Гостевые дома",
        "Квартиры / Апартаменты",
        "Отдельные комнаты",
        "Отели",
        "Хостелы",
        "Гостевые дома",
        "Квартиры / Апартаменты",
        "Отдельные комнаты",
    ];

    return (
        <ObjectsFiltersBlockWrapper
            allBtnVisible={types.length > 4 ? true : false}
        >
            <div className="objects-filters-block-title">
                <TitleIcon title="Тип объекта" marginBottom>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.833984 9.16667V17.5H5.00065V12.5H8.33398V17.5H12.5007V9.16667L6.66732 5L0.833984 9.16667Z"
                            fill="#00A0A0"
                        />
                        <path
                            d="M8.33398 2.5V4.14167L14.1673 8.30833V9.16667H15.834V10.8333H14.1673V12.5H15.834V14.1667H14.1673V17.5H19.1673V2.5H8.33398ZM15.834 7.5H14.1673V5.83333H15.834V7.5Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>
            </div>

            <div className="objects-filters-block-checkboxes">
                {types.map((type, index) => (
                    <div
                        className="objects-filters-block-checkbox"
                        key={`objects-filters-block-checkbox-types-${index}`}
                    >
                        <Checkbox small>{type}</Checkbox>
                    </div>
                ))}
            </div>
        </ObjectsFiltersBlockWrapper>
    );
};

export default ObjectsFiltersTypes;
