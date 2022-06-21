import React from "react";

import {ObjectsFiltersBlockWrapper, Checkbox} from "../../";

const ObjectsFiltersServicesRoom: React.FC = () => {
    const services = [
        "Кондиционер",
        "Собственнная ванная комната",
        "Кухня / мини-кухня",
        "Рабочее место",
        "Терраса/балкон",
        "Звукоизоляция",
    ];

    return (
        <ObjectsFiltersBlockWrapper
            allBtnVisible={services.length > 4 ? true : false}
        >
            <div className="objects-filters-block-title">
                <p className="objects-filters-block-title__subtitle">
                    В номере
                </p>
            </div>

            <div className="objects-filters-block-checkboxes">
                {services.map((service, index) => (
                    <div
                        className="objects-filters-block-checkbox"
                        key={`objects-filters-block-checkbox-services-room-${index}`}
                    >
                        <Checkbox small>{service}</Checkbox>
                    </div>
                ))}
            </div>
        </ObjectsFiltersBlockWrapper>
    );
};

export default ObjectsFiltersServicesRoom;
