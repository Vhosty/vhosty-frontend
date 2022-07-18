import React from "react";

import {useTypedSelector} from "../../hooks/useTypedSelector";

const RecoveryPasswordMessageError: React.FC = () => {
    const {errorMessage} = useTypedSelector(
        ({recovery_password}) => recovery_password
    );

    return (
        <>
            {errorMessage ? (
                <p className="reglog-form__error">{errorMessage}</p>
            ) : null}
        </>
    );
};

export default RecoveryPasswordMessageError;
