import React from "react";

import {checkDeclension} from "../../../functions/checkDeclension";

interface GuestRoomSelectItemKids {
    itemIndex: number;
}

const GuestRoomSelectItemKids: React.FC<GuestRoomSelectItemKids> = ({
    itemIndex,
}) => {
    const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    return (
        <div className="guest-room-select-item-kids-select">
            {ages.map((age, index) => (
                <p
                    className="guest-room-select-item-kids-select__item"
                    key={`guest-room-select-item-kids-select__item-${itemIndex}-${index}`}
                >
                    {checkDeclension(age, ["год", "года", "лет"]).title}
                </p>
            ))}
        </div>
    );
};

export default GuestRoomSelectItemKids;
