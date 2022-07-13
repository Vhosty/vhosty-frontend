import React from "react";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const CabinetSettingChangePasswordFormMessageError: React.FC = () => {
    const {errorMessageChangePassword} = useTypedSelector(
        ({userCabinetSetting}) => userCabinetSetting
    );

    return (
        <>
            {errorMessageChangePassword ? (
                <p className="reglog-form__error">
                    {errorMessageChangePassword}
                </p>
            ) : null}
        </>
    );
};

export default CabinetSettingChangePasswordFormMessageError;
