import React from "react";

import PaymentProgressbarItem from "../PaymentProgressbar/PaymentProgressbarItem";

interface PaymentProgressbarProps {
    currentNumber: number;
}

const PaymentProgressbar: React.FC<PaymentProgressbarProps> = ({
    currentNumber,
}) => {
    return (
        <div className="payment-title-progressbar">
            <PaymentProgressbarItem
                title="Выбор отеля и номера"
                number={1}
                success={currentNumber > 1 ? true : false}
                active={currentNumber === 1 ? true : false}
            />

            <div className="payment-title-progressbar-line"></div>

            <PaymentProgressbarItem
                title="Данные оформления"
                number={2}
                success={currentNumber > 2 ? true : false}
                active={currentNumber === 2 ? true : false}
            />

            <div className="payment-title-progressbar-line"></div>

            <PaymentProgressbarItem
                title="Последний шаг"
                number={3}
                success={currentNumber > 3 ? true : false}
                active={currentNumber === 3 ? true : false}
            />
        </div>
    );
};

export default PaymentProgressbar;
