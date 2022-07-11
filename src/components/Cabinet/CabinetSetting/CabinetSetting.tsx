import React from "react";

import {CabinetSettingForm} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const CabinetSetting: React.FC = () => {
    const {user, isLoadedUser} = useTypedSelector(({user}) => user);

    return (
        <div className="cabinet-content-block cabinet-content-block-render cabinet-content-setting">
            <h2 className="cabinet-content__title">
                Добро пожаловать,{" "}
                <span>
                    {user.first_name !== "" ? user.first_name : `User${user.id}`}
                </span>
            </h2>
            <p className="cabinet-content__subtitle">
                Здесь вы можете изменить свои персональные данные.
            </p>

            <CabinetSettingForm />
        </div>
    );
};

export default CabinetSetting;
