import React from "react";

interface CabinetLogoutProps {
    refPopup: React.RefObject<HTMLDivElement>;
    closeAnimationLogout: boolean;
}

const CabinetLogout: React.FC<CabinetLogoutProps> = ({
    closeAnimationLogout,
    refPopup,
}) => {
    return (
        <div
            className={`cabinet-content-logout ${
                closeAnimationLogout ? "close" : ""
            }`}
        >
            <div
                className={`cabinet-content-logout-content ${
                    closeAnimationLogout ? "close" : ""
                }`}
                ref={refPopup}
            >
                <h2 className="cabinet-content-logout-content__title">
                    Вы уверены, что хотите выйти?
                </h2>
                <p className="cabinet-content-logout-content__subtitle">
                    Мы будем скучать по Вам. Возвращайтесь к нам поскорее.
                </p>
                <div className="cabinet-content-logout-content-btn">
                    <button className="cabinet-content-logout-content-btn__logout">
                        Да, я хочу выйти
                    </button>

                    <button className="btn cabinet-content-logout-content-btn__btn">
                        Нет, остаться
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CabinetLogout;
