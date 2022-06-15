import React from "react";

import {checkDeclension} from "../../../functions/checkDeclension";

interface GuestRoomSelectItemKids {
    itemIndex: number;
    onChange: (age: number) => void;
}

const FiltersObjectGuestRoomSelectItemKids: React.FC<
    GuestRoomSelectItemKids
> = ({itemIndex, onChange}) => {
    const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    return (
        <div className="filters-object-form-guest-room-select-item-kids-select">
            {ages.map((age, index) => (
                <p
                    className="filters-object-form-guest-room-select-item-kids-select__item"
                    key={`filters-object-form-guest-room-select-item-kids-select__item-${itemIndex}-${index}`}
                    onClick={() => onChange(age)}
                >
                    {checkDeclension(age, ["год", "года", "лет"]).title}
                </p>
            ))}
        </div>
    );
};

export default FiltersObjectGuestRoomSelectItemKids;
