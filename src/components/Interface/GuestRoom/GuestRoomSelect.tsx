import React from "react";

import {GuestRoomSelectItem} from "../../";

const GuestRoomSelect: React.FC = () => {
    const items = [0, 1];

    return (
        <>
            {items.map((item, index) => (
                <GuestRoomSelectItem
                    key={`guest-room-select-item-${index}`}
                    itemIndex={index}
                />
            ))}

            <p className="guest-room-select__add">Добавить номер</p>
        </>
    );
};

export default GuestRoomSelect;
