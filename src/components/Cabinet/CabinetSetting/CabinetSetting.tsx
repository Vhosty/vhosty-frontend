import React from "react";

import {CabinetSettingForm} from "../../";

const CabinetSetting: React.FC = () => {
    return (
        <div className="cabinet-content-block cabinet-content-block-render cabinet-content-setting">
            <h2 className="cabinet-content__title">
                Добро пожаловать, <span>User3889283</span>
            </h2>
            <p className="cabinet-content__subtitle">
                Здесь вы можете изменить свои персональные данные.
            </p>

            <CabinetSettingForm />
        </div>
    );
};

export default CabinetSetting;
