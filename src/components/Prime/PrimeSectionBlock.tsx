import React from "react";
import {Link} from "react-router-dom";

const PrimeSectionBlock: React.FC = () => {
    return (
        <div className="prime-section-block">
            <div className="prime-section-block-text">
                <h2 className="prime-section-block-text__title">
                    VHOSTY<span>Prime</span>
                </h2>

                <p className="prime-section-block-text__subtitle">
                    10% от стоимости вернем рублями на вашу карту, а если в
                    профиле не указана карта - бонусами на баланс аккаунта.
                </p>

                <Link to="/" className="prime-section-block-text__link">
                    Подробнее о программе лояльности
                </Link>
            </div>

            <div className="prime-section-block-count">
                <h2 className="prime-section-block-count__title">10%</h2>
                <p className="prime-section-block-count__subtitle">рублями!</p>
            </div>
        </div>
    );
};

export default PrimeSectionBlock;
