import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    addObjectsFiltersGlobalGuestRoom,
    deleteObjectsFiltersGlobalGuestRoom,
    plusObjectsFiltersGlobalGuestRoomAdultsCount,
    minusObjectsFiltersGlobalGuestRoomAdultsCount,
    addObjectsFiltersGlobalGuestRoomKids,
    deleteObjectsFiltersGlobalGuestRoomKids,
} from "../../../redux/actions/objects/objects_filters_global";

import {ObjectsFiltersGlobalGuestRoomSelectItem} from "../../";

const ObjectsFiltersGlobalGuestRoomSelect: React.FC = () => {
    const dispatch = useDispatch();

    const {guestRoom} = useTypedSelector(
        ({objects_filters_global}) => objects_filters_global
    );

    const addGuestRoomOnClick = () => {
        dispatch(addObjectsFiltersGlobalGuestRoom({adultsCount: 1, kids: []}));
    };

    const deleteGuestRoomOnClick = (index: number) => {
        dispatch(deleteObjectsFiltersGlobalGuestRoom(index));
    };

    const plusObjectsFiltersGlobalGuestRoomAdultsCountOnClick = (
        index: number
    ) => {
        dispatch(plusObjectsFiltersGlobalGuestRoomAdultsCount(index));
    };

    const minusObjectsFiltersGlobalGuestRoomAdultsCountOnClick = (
        index: number
    ) => {
        dispatch(minusObjectsFiltersGlobalGuestRoomAdultsCount(index));
    };

    const addObjectsFiltersGlobalGuestRoomKidsOnClick = (
        index: number,
        age: number
    ) => {
        dispatch(addObjectsFiltersGlobalGuestRoomKids(index, {age}));
    };

    const deleteObjectsFiltersGlobalGuestRoomKidsOnClick = (
        itemIndex: number,
        kidsItemIndex: number
    ) => {
        dispatch(
            deleteObjectsFiltersGlobalGuestRoomKids(itemIndex, kidsItemIndex)
        );
    };

    return (
        <div className="filters-object-form-guest-room-select">
            {guestRoom.map((item, index) => (
                <ObjectsFiltersGlobalGuestRoomSelectItem
                    {...item}
                    key={`filters-object-form-guest-room-select-item-${index}`}
                    itemIndex={index}
                    isLast={index + 1 === guestRoom.length}
                    isOne={guestRoom.length === 1}
                    plusObjectsFiltersGlobalGuestRoomAdultsCountOnClick={
                        plusObjectsFiltersGlobalGuestRoomAdultsCountOnClick
                    }
                    minusObjectsFiltersGlobalGuestRoomAdultsCountOnClick={
                        minusObjectsFiltersGlobalGuestRoomAdultsCountOnClick
                    }
                    deleteGuestRoomOnClick={deleteGuestRoomOnClick}
                    addObjectsFiltersGlobalGuestRoomKidsOnClick={
                        addObjectsFiltersGlobalGuestRoomKidsOnClick
                    }
                    deleteObjectsFiltersGlobalGuestRoomKidsOnClick={
                        deleteObjectsFiltersGlobalGuestRoomKidsOnClick
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

export default ObjectsFiltersGlobalGuestRoomSelect;
