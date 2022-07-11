import React from "react";

import {useTypedSelector} from "../../hooks/useTypedSelector";

const ReglogMessageError: React.FC = () => {
    const {errorMessage} = useTypedSelector(({login}) => login);

    return (
        <>
            {errorMessage ? (
                <p className="reglog-form__error">{errorMessage}</p>
            ) : null}
        </>
    );
};

export default ReglogMessageError;
