import React from "react";

import {ObjectsFiltersBlockWrapper, TitleIcon, Checkbox} from "../../";

const ObjectsFiltersServicesObject: React.FC = () => {
    const services = [
        "Бесплатный интернет",
        "Открытый бассейн",
        "Крытый бассейн",
        "Парковка",
        "Фитнес-центр",
        "СПА-услуги",
    ];

    return (
        <ObjectsFiltersBlockWrapper
            allBtnVisible={services.length > 4 ? true : false}
        >
            <div className="objects-filters-block-title">
                <TitleIcon title="Услуги и удобства" marginBottom>
                    <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 16.9938H2.2221V10.996H0V16.9938ZM10.5105 17.9935L7.25514 17.3537L3.99977 16.6639C3.81135 16.6309 3.64207 16.5388 3.52202 16.404C3.39785 16.2732 3.33073 16.1062 3.33314 15.9342V11.9357C3.33629 11.7645 3.40275 11.5992 3.52202 11.4658C3.64611 11.3353 3.81363 11.2441 3.99977 11.2059L9.31058 10.6161L14.3547 10.3617L14.7992 10.5762L14.9658 11.126C14.9688 11.3103 14.9108 11.4912 14.7992 11.6458C14.6971 11.8074 14.5418 11.9366 14.3547 12.0156L12.1326 12.5155L9.91055 13.0153L11.7104 13.675L13.5215 14.3248L16.0435 13.685L18.4989 12.9953C18.7171 12.9456 18.9482 12.9743 19.1434 13.0752C19.2416 13.123 19.3279 13.1885 19.3967 13.2676C19.4655 13.3467 19.5154 13.4378 19.5433 13.5351L19.7544 14.3048L19.9766 15.0645C20.027 15.2545 19.9952 15.4546 19.8878 15.6243C19.7735 15.7955 19.5905 15.9208 19.3767 15.9742L15.3436 16.9738L11.3105 17.9735C11.1777 17.9887 11.0433 17.9887 10.9105 17.9735C10.7793 17.9999 10.6442 18.0066 10.5105 17.9935ZM6.66629 0L4.44419 1.99927L2.2221 3.99855L4.44419 5.99782L6.66629 7.99709L7.44402 7.29735L8.22175 6.5976L6.77739 5.29807L5.33303 3.99855L6.77739 2.69902L8.22175 1.39949L7.44402 0.699745L6.66629 0ZM13.3326 0L12.5548 0.699745L11.7771 1.39949L13.2215 2.69902L14.6658 3.99855L13.2215 5.29807L11.7771 6.5976L12.5548 7.29735L13.3326 7.99709L15.5547 5.99782L17.7768 3.99855L15.5547 1.99927L13.3326 0Z"
                            fill="#00A0A0"
                        />
                    </svg>
				</TitleIcon>
				
                <p className="objects-filters-block-title__subtitle">
                    На объекте
                </p>
            </div>

            <div className="objects-filters-block-checkboxes">
                {services.map((service, index) => (
                    <div
                        className="objects-filters-block-checkbox"
                        key={`objects-filters-block-checkbox-services-object-${index}`}
                    >
                        <Checkbox small>{service}</Checkbox>
                    </div>
                ))}
            </div>
        </ObjectsFiltersBlockWrapper>
    );
};

export default ObjectsFiltersServicesObject;
