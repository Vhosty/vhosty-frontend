import React from "react";
import {Link} from "react-router-dom";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {validate} from "./validate";

import {RenderInput, PolicyCheckbox} from "../";

const LoginForm: React.FC<
    {} & InjectedFormProps<{}, {}>
> = ({handleSubmit}) => {
    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-text">
                <p className="reglog-form-text__subtitle">
                    Гость №{localStorage.getItem("userNumber")}
                </p>
                <p className="reglog-form-text__title">
                    Войти или <Link to="#register">Зарегистрироваться</Link>
                </p>
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
                <div className="reglog-form-block-input">
                    <p className="reglog-form-block-input__subtitle">Пароль</p>

                    <Field
                        component={RenderInput}
                        type="password"
                        name="password"
                        label="• • • • • • • • • •"
                    />
                </div>

                <Link
                    to="#recovery_password"
                    className="reglog-form-block-recovery__link"
                >
                    Забыли пароль?
                </Link>

                <div className="reglog-form-block-btn">
                    <PolicyCheckbox />

                    <button className="btn reglog-form-block-btn__btn">
                        Войти
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "login-form",
    validate,
})(LoginForm);
