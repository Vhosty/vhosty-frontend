import React from "react";

import {ObjectsFiltersBlockWrapper, TitleIcon, Input} from "../../";

const ObjectsFiltersPrice: React.FC = () => {
    return (
        <ObjectsFiltersBlockWrapper>
            <div className="objects-filters-block-title">
                <TitleIcon title="Цена за сутки в RUB" marginBottom>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 20C4.47688 20 0 15.5231 0 10C0 4.47688 4.47688 0 10 0C15.5231 0 20 4.47688 20 10C20 15.5231 15.5231 20 10 20ZM6.5625 9.52375V10.6537H7.665V12.2837H6.5625V13.3494H7.665V15.625H8.9075V13.3494H11.4075V12.2837H8.9075V10.6537H10.4756C10.9533 10.6578 11.4291 10.5925 11.8881 10.46C12.3231 10.3306 12.7006 10.135 13.0219 9.87063C13.3431 9.6075 13.5969 9.27687 13.7831 8.87813C13.9694 8.48 14.0625 8.01188 14.0625 7.47375C14.0625 6.93625 13.975 6.47375 13.7987 6.08625C13.6225 5.69875 13.3794 5.37813 13.0688 5.12563C12.7581 4.87313 12.3856 4.68437 11.9506 4.56063C11.4803 4.43222 10.9944 4.36975 10.5069 4.375H7.665V9.52375H6.5625ZM10.5062 9.52375H8.9075V5.505H10.5069C11.2206 5.505 11.7825 5.66125 12.1912 5.97312C12.6 6.285 12.805 6.78562 12.805 7.47375C12.805 8.1625 12.6 8.67625 12.1912 9.01562C11.7825 9.35437 11.2206 9.52375 10.5069 9.52375H10.5062Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>
			</div>
			
            <div className="objects-filters-block-input-from-to">
                <div className="objects-filters-block-input-from-to-block">
                    <Input
                        label="0 ₽"
                        small
                        smallPlaceholder
                        type="number"
                    />
                </div>
                <div className="objects-filters-block-input-from-to-line"></div>
                <div className="objects-filters-block-input-from-to-block">
                    <Input
                        label="100к ₽"
                        small
                        smallPlaceholder
                        type="number"
                    />
                </div>
            </div>
        </ObjectsFiltersBlockWrapper>
    );
};

export default ObjectsFiltersPrice;
