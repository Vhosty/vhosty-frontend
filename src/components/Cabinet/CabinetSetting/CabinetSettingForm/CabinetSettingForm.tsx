import React from "react";
import {useDispatch} from "react-redux";

import {CabinetSettingFormInfo, CabinetSettingFormContact} from "../../../";

import {fetchUserUpdateAboutMe} from "../../../../redux/actions/user";

const CabinetSettingForm: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmitInfo = (data: any) => {
        dispatch(fetchUserUpdateAboutMe(data) as any);
    };

    return (
        <div className="cabinet-content-setting-form">
            <CabinetSettingFormInfo onSubmit={onSubmitInfo} />

            <CabinetSettingFormContact />
        </div>
    );
};

export default CabinetSettingForm;
