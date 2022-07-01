import React from "react";

import {CabinetHistorySection} from "../../";

const CabinetHistory: React.FC = () => {
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
