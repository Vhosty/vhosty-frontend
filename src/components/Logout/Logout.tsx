import React from "react";

const CabinetLogout: React.FC = () => {
    return (
        <div className="reglog-logout">
            <h2 className="reglog-logout__title">
                Вы уверены, что хотите выйти?
            </h2>
            <p className="reglog-logout__subtitle">
                Мы будем скучать по Вам. Возвращайтесь к нам поскорее.
            </p>

            <div className="reglog-logout-btn">
                <button className="reglog-logout-btn__logout">
                    Да, я хочу выйти
                </button>

                <button className="btn reglog-logout-btn__btn">
                    Нет, остаться
                </button>
            </div>
        </div>
    );
};

export default CabinetLogout;
