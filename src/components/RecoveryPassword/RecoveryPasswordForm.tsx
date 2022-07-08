import React from "react";
import {Link} from "react-router-dom";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {validate} from "./validate";

import {ReglogStateTypes} from "../../redux/types/IReglog";

import {RenderInput} from "../";

interface RecoveryPasswordFormProps {}

const RecoveryPasswordForm: React.FC<
    RecoveryPasswordFormProps & InjectedFormProps<{}, RecoveryPasswordFormProps>
> = ({handleSubmit}) => {
    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-text">
                <p className="reglog-form-text__subtitle">
                    Гость №{localStorage.getItem("userNumber")}
                </p>
                <p className="reglog-form-text__title">Восстановить пароль</p>
            </div>

            <div className="reglog-form-block">
                <div className="reglog-form-block-input">
                    <p className="reglog-form-block-input__subtitle">
                        Электронная почта
                    </p>

                    <Field
                        component={RenderInput}
                        type="email"
                        name="email"
                        label="examplemyemail@mail.ru"
                    />
                </div>

                <div className="reglog-form-block-btn">
                    <p className="reglog-form-block-btn__description">
                        Укажите адрес электронной почты, и мы отправим вам
                        ссылку для восстановления пароля
                    </p>

                    <button className="btn reglog-form-block-btn__btn">
                        Восстановить
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, RecoveryPasswordFormProps>({
    form: "recovery-password-form",
    validate,
})(RecoveryPasswordForm);
