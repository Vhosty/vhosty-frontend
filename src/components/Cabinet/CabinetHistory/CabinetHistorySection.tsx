import React from "react";

import {CabinetHistorySectionBlock} from "../../";

interface CabinetHistorySectionProps {
    title: string;
}

const CabinetHistorySection: React.FC<CabinetHistorySectionProps> = ({
    title,
}) => {
    return (
        <div className="cabinet-content-history-section">
            <h2 className="cabinet-content-history-section__title">{title}</h2>

            <CabinetHistorySectionBlock status="processing" />
            <CabinetHistorySectionBlock status="success" />
            <CabinetHistorySectionBlock status="cancel" />
        </div>
    );
};

export default CabinetHistorySection;
