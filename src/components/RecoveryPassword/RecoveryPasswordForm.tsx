import React from "react";
import {Link} from "react-router-dom";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {validate} from "./validate";

import {ReglogStateTypes} from "../../redux/types/IReglog";

import {RenderInput} from "../";

interface RecoveryPasswordFormProps {
    closeOnClick: () => void;
}

const RecoveryPasswordForm: React.FC<
    RecoveryPasswordFormProps & InjectedFormProps<{}, RecoveryPasswordFormProps>
> = ({handleSubmit, closeOnClick}) => {
    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-close" onClick={closeOnClick}>
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M26.25 15C26.25 8.78906 21.2109 3.75 15 3.75C8.78906 3.75 3.75 8.78906 3.75 15C3.75 21.2109 8.78906 26.25 15 26.25C21.2109 26.25 26.25 21.2109 26.25 15Z"
                        stroke="#00A0A0"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M11.25 18.75L18.75 11.25M18.75 18.75L11.25 11.25L18.75 18.75Z"
                        stroke="#00A0A0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className="reglog-form-text">
                <p className="reglog-form-text__subtitle">Гость №685-973</p>
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
