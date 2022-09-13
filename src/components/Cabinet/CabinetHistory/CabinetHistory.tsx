import React from "react";
import {useDispatch} from "react-redux";

import {
    CabinetHistorySection,
    CabinetHistorySectionBlock,
    ImageBox,
} from "../../";

import {fetchUserBookings} from "../../../redux/actions/user/user";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const CabinetHistory: React.FC = () => {
    const [isOpenImageBox, setIsOpenImageBox] = React.useState<boolean>(false);
    const [currentIndexBlockImageBox, setCurrentIndexBlockImageBox] =
        React.useState<number>(0);

    const dispatch = useDispatch();

    const {bookings, isLoadedBookings} = useTypedSelector(({user}) => user);

    React.useEffect(() => {
        dispatch(fetchUserBookings() as any);
    }, []);

    return (
        <>
            <ImageBox
                state={isOpenImageBox}
                setState={setIsOpenImageBox}
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
                                key={`cabinet-content-history-section-block-${index}`}
                                openCabinetHistoryImageBoxIndex={() => {
                                    setCurrentIndexBlockImageBox(index);
                                    setIsOpenImageBox(true);
                                }}
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
