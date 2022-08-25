import React from "react";
import {useDispatch} from "react-redux";

import {CabinetHistorySection} from "../../";

import {fetchUserBookings} from "../../../redux/actions/user/user";

const CabinetHistory: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchUserBookings() as any);
    }, []);

    return (
        <div className="cabinet-content-block cabinet-content-block-render cabinet-content-history">
            <h2 className="cabinet-content__title">Ваши бронирования</h2>
            <p className="cabinet-content__subtitle">
                Информация о бронированиях и их статусе
            </p>

            <CabinetHistorySection title="Лиссабон" />

            <CabinetHistorySection title="Ижевск" />
        </div>
    );
};

export default CabinetHistory;
