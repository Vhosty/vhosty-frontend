import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {validate} from "./validate";

import {RenderInput} from "../";

interface RecoveryPasswordConfirmedFormProps {}

const RecoveryPasswordConfirmedForm: React.FC<
    RecoveryPasswordConfirmedFormProps &
        InjectedFormProps<{}, RecoveryPasswordConfirmedFormProps>
> = ({handleSubmit}) => {
    return (
        <div className="reglog-content-padding">
            <form className="reglog-form" onSubmit={handleSubmit}>
                <div className="reglog-form-text">
                    <p className="reglog-form-text__subtitle">
                        Гость №{localStorage.getItem("userNumber")}
                    </p>
                    <p className="reglog-form-text__title">
                        Восстановить пароль
                    </p>
                </div>

                <div className="reglog-form-block">
                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="password"
                            name="password"
                            label="• • • • • • • • • •"
                            title="Пароль"
                        />
                    </div>
                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="password"
                            name="password2"
                            label="• • • • • • • • • •"
                            title="Повторите пароль"
                        />
					</div>
					
                    <div className="reglog-form-block-btn">
                        <button className="btn reglog-form-block-btn__btn">
                            Восстановить
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default reduxForm<{}, RecoveryPasswordConfirmedFormProps>({
    form: "recovery-password-confirmed-form",
    validate,
})(RecoveryPasswordConfirmedForm);
