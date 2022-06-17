import React from "react";
import {useDispatch} from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import {
    addfilters,
    deletefilters,
    plusfiltersAdultsCount,
    minusfiltersAdultsCount,
    addfiltersKids,
    deletefiltersKids,
} from "../../../redux/actions/filters";

import {FiltersObjectGuestRoomSelectItem} from "../../";

const FiltersObjectGuestRoomSelect: React.FC = () => {
    const dispatch = useDispatch();

    const {guestRoom} = useTypedSelector(
        ({filters}) => filters
    );

    const addGuestRoomOnClick = () => {
        dispatch(addfilters({adultsCount: 1, kids: []}));
    };

    const deleteGuestRoomOnClick = (index: number) => {
        dispatch(deletefilters(index));
    };

    const plusfiltersAdultsCountOnClick = (index: number) => {
        dispatch(plusfiltersAdultsCount(index));
    };

    const minusfiltersAdultsCountOnClick = (index: number) => {
        dispatch(minusfiltersAdultsCount(index));
    };

    const addfiltersKidsOnClick = (index: number, age: number) => {
        dispatch(addfiltersKids(index, {age}));
    };

    const deletefiltersKidsOnClick = (
        itemIndex: number,
        kidsItemIndex: number
    ) => {
        dispatch(deletefiltersKids(itemIndex, kidsItemIndex));
    };

    return (
        <div className="filters-object-form-guest-room-select">
            {guestRoom.map((item, index) => (
                <FiltersObjectGuestRoomSelectItem
                    {...item}
                    key={`filters-object-form-guest-room-select-item-${index}`}
                    itemIndex={index}
                    isLast={index + 1 === guestRoom.length}
                    isOne={guestRoom.length === 1}
                    plusfiltersAdultsCountOnClick={
                        plusfiltersAdultsCountOnClick
                    }
                    minusfiltersAdultsCountOnClick={
                        minusfiltersAdultsCountOnClick
                    }
                    deleteGuestRoomOnClick={deleteGuestRoomOnClick}
                    addfiltersKidsOnClick={
                        addfiltersKidsOnClick
                    }
                    deletefiltersKidsOnClick={
                        deletefiltersKidsOnClick
                    }
                />
            ))}

            <p
                className="filters-object-form-guest-room-select__add"
                onClick={addGuestRoomOnClick}
            >
                Добавить номер
            </p>
        </div>
    );
};

export default FiltersObjectGuestRoomSelect;
