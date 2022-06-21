import React from "react";

import {ObjectsFiltersBlockWrapper, TitleIcon, Checkbox} from "../../";

const ObjectsFiltersFeedbacks: React.FC = () => {
    const typesFeedbacks = [
        "Отлично: 4,7+",
        "Хорошо: 4+",
        "Нормально: 3+",
        "Менее 3",
    ];

    return (
        <ObjectsFiltersBlockWrapper>
            <div className="objects-filters-block-title">
                <TitleIcon title="Оценка по отзывам" marginBottom>
                    <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 15.9397C13.9703 15.9397 18 12.3715 18 7.96984C18 3.56821 13.9703 0 9 0C4.02975 0 0 3.56821 0 7.96984C0 9.97369 0.835875 11.8068 2.21625 13.2072C2.10713 14.3639 1.74713 15.6323 1.34888 16.5841C1.26 16.7959 1.43212 17.0327 1.656 16.9963C4.194 16.575 5.70262 15.9283 6.3585 15.5913C7.22015 15.8239 8.10823 15.941 9 15.9397ZM9 5.68478C10.872 3.73672 15.5531 7.14553 9 11.5278C2.44688 7.1444 7.128 3.73672 9 5.68478Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>
            </div>

            <div className="objects-filters-block-checkboxes">
                {typesFeedbacks.map((typesFeedback, index) => (
                    <div
                        className="objects-filters-block-checkbox"
                        key={`objects-filters-block-checkbox-feedback-${index}`}
                    >
                        <Checkbox small>{typesFeedback}</Checkbox>
                    </div>
                ))}
            </div>
        </ObjectsFiltersBlockWrapper>
    );
};

export default ObjectsFiltersFeedbacks;
