import React from "react";

import {ObjectsFiltersBlockWrapper, TitleIcon, Checkbox} from "../../";

import MirLogo from "../../../assets/images/mir-logo-svg.svg";

const ObjectsFiltersTerms: React.FC = () => {
    return (
        <ObjectsFiltersBlockWrapper>
            <div className="objects-filters-block-title">
                <TitleIcon title="Условия бронирования" marginBottom>
                    <svg
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.427734 2.5346C0.427734 2.01364 0.634685 1.51401 1.00306 1.14564C1.37144 0.777263 1.87106 0.570312 2.39202 0.570312H15.6063C16.1273 0.570312 16.6269 0.777263 16.9953 1.14564C17.3636 1.51401 17.5706 2.01364 17.5706 2.5346V4.14174H0.427734V2.5346ZM0.427734 5.21317H17.5706V10.7489C17.5706 11.2698 17.3636 11.7695 16.9953 12.1378C16.6269 12.5062 16.1273 12.7132 15.6063 12.7132H2.39202C1.87106 12.7132 1.37144 12.5062 1.00306 12.1378C0.634685 11.7695 0.427734 11.2698 0.427734 10.7489V5.21317ZM12.2134 8.71317C12.043 8.71317 11.8794 8.7809 11.7589 8.90146C11.6383 9.02202 11.5706 9.18553 11.5706 9.35603C11.5706 9.52652 11.6383 9.69004 11.7589 9.8106C11.8794 9.93115 12.043 9.99889 12.2134 9.99889H14.3563C14.5268 9.99889 14.6903 9.93115 14.8109 9.8106C14.9314 9.69004 14.9992 9.52652 14.9992 9.35603C14.9992 9.18553 14.9314 9.02202 14.8109 8.90146C14.6903 8.7809 14.5268 8.71317 14.3563 8.71317H12.2134Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>
			</div>
			
            <div className="objects-filters-block-checkboxes">
                <div className="objects-filters-block-checkbox">
                    <Checkbox small>С бесплатной отменой</Checkbox>
                </div>
                <div className="objects-filters-block-checkbox">
                    <Checkbox small>Бронирование без предоплаты</Checkbox>
                </div>
                <div className="objects-filters-block-checkbox">
                    <Checkbox small>
                        Кешбек по карте <img src={MirLogo} alt="Mir" />
                    </Checkbox>
                </div>
            </div>
        </ObjectsFiltersBlockWrapper>
    );
};

export default ObjectsFiltersTerms;
