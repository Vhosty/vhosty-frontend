import React from "react";
import {Link} from "react-router-dom";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {validate} from "./validate";

import {RenderInput, PolicyCheckbox} from "../";

const RegisterForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    pristine,
    submitting,
}) => {
    const {isPending} = useTypedSelector(({register}) => register);

    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-text">
                <p className="reglog-form-text__subtitle">
                    Гость №{localStorage.getItem("userNumber")}
                </p>
                <p className="reglog-form-text__title">
                    Зарегистрироваться или <Link to="#login">Войти</Link>
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
                <div className="reglog-form-block-input">
                    <p className="reglog-form-block-input__subtitle">
                        Повторите пароль
                    </p>

                    <Field
                        component={RenderInput}
                        type="password"
                        name="password2"
                        label="• • • • • • • • • •"
                    />
                </div>

                <div className="reglog-form-block-btn">
                    <PolicyCheckbox />

                    <button
                        className={`btn ${
                            isPending ? "disabled" : ""
                        } reglog-form-block-btn__btn`}
                        disabled={
                            invalid || submitting || pristine || isPending
                        }
                    >
                        {isPending ? "Загрузка" : "Зарегистрироваться"}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "register-form",
    validate,
})(RegisterForm);
