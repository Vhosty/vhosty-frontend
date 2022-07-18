import React from "react";
import {Link} from "react-router-dom";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {validate} from "./validate";

import {RenderInput, PolicyCheckbox, LoginMessageError} from "../";

const LoginForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    pristine,
    submitting,
}) => {
    const {isPending} = useTypedSelector(({login}) => login);

    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-content-padding-top">
                <div className="reglog-form-text">
                    <p className="reglog-form-text__subtitle">
                        Гость №{localStorage.getItem("userNumber")}
                    </p>
                    <p className="reglog-form-text__title">
                        Войти или <Link to="#register">Зарегистрироваться</Link>
                    </p>
                </div>
            </div>

            <LoginMessageError />

            <div className="reglog-content-padding-bottom">
                <div className="reglog-form-block">
                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="email"
                            name="email"
                            label="examplemyemail@mail.ru"
                            title="Электронная почта"
                        />
                    </div>
                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="password"
                            name="password"
                            label="• • • • • • • • • •"
                            title="Пароль"
                        />
                    </div>

                    <Link
                        to="#recovery_password"
                        className="reglog-form-block-recovery__link"
                    >
                        Забыли пароль?
                    </Link>

                    <div className="reglog-form-block-btn">
                        <button
                            className={`btn ${
                                isPending ? "disabled" : ""
                            } reglog-form-block-btn__btn`}
                            disabled={
                                invalid || submitting || pristine || isPending
                            }
                        >
                            {isPending ? "Загрузка" : "Войти"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "login-form",
    validate,
})(LoginForm);
