import React from "react";
import {useDispatch} from "react-redux";

import {
    CabinetHistorySection,
    CabinetHistorySectionBlock,
    ImageBox,
} from "../../";

import {
    setObjectsIsOpenImageBox,
    setObjectsCurrentIndexBlockImageBox,
} from "../../../redux/actions/objects/objects";
import {fetchUserBookings} from "../../../redux/actions/user/user";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const CabinetHistory: React.FC = () => {
    const dispatch = useDispatch();

    const {bookings, isLoadedBookings} = useTypedSelector(({user}) => user);

    React.useEffect(() => {
        dispatch(fetchUserBookings() as any);
    }, []);

    const {isOpenImageBox, currentIndexBlockImageBox} = useTypedSelector(
        ({objects}) => objects
    );

    const openCabinetHistoryImageBox = (status: boolean) => {
        dispatch(setObjectsIsOpenImageBox(status) as any);
    };

    const openCabinetHistoryImageBoxIndex = (index: number) => {
        dispatch(setObjectsCurrentIndexBlockImageBox(index) as any);
        dispatch(setObjectsIsOpenImageBox(true) as any);
    };

    return (
        <>
            <ImageBox
                state={isOpenImageBox}
                setState={openCabinetHistoryImageBox}
                images={bookings[currentIndexBlockImageBox]?.images}
            />

            <div className="cabinet-content-block cabinet-content-block-render cabinet-content-history">
                <h2 className="cabinet-content__title">Ваши бронирования</h2>
                <p className="cabinet-content__subtitle">
                    Информация о бронированиях и их статусе
                </p>

                {isLoadedBookings ? (
                    <div className="cabinet-content-history-section">
                        {bookings.map((item: any, index: number) => (
                            <CabinetHistorySectionBlock
                                {...item}
                                openCabinetHistoryImageBoxIndex={() =>
                                    openCabinetHistoryImageBoxIndex(index)
                                }
                                key={`cabinet-content-history-section-block-${index}`}
                            />
                        ))}
                    </div>
                ) : null}

                {/* <CabinetHistorySection title="Лиссабон" /> */}
            </div>
        </>
    );
};

export default CabinetHistory;
