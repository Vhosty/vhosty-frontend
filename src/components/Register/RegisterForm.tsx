import React from "react";
import {Link} from "react-router-dom";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {validate} from "./validate";

import {ReglogStateTypes} from "../../redux/types/IReglog";

import {RenderInput} from "../";

interface RegisterFormProps {
    closeOnClick: () => void;
    setReglogTypeOnClick: (type: ReglogStateTypes) => void;
}

const RegisterForm: React.FC<
    RegisterFormProps & InjectedFormProps<{}, RegisterFormProps>
> = ({handleSubmit, closeOnClick, setReglogTypeOnClick}) => {
    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-text">
                <p className="reglog-form-text__subtitle">Гость №685-973</p>
                <p className="reglog-form-text__title">
                    Зарегистрироваться или{" "}
                    <a
                        onClick={() =>
                            setReglogTypeOnClick(ReglogStateTypes.LOGIN)
                        }
                    >
                        Войти
                    </a>
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
                        name="password_repeat"
                        label="• • • • • • • • • •"
                    />
                </div>

                <div className="reglog-form-block-btn">
                    <p className="reglog-form-block-btn__description">
                        Нажимая кнопку «Зарегистрироваться», я соглашаюсь c{" "}
                        <Link to="/" onClick={closeOnClick}>
                            политикой конфиденциальности
                        </Link>{" "}
                        и
                        <Link to="/" onClick={closeOnClick}>
                            обработкой персональных данных.
                        </Link>
                    </p>
                    <button className="btn reglog-form-block-btn__btn">
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, RegisterFormProps>({
    form: "register-form",
    validate,
})(RegisterForm);
