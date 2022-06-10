import React from "react";
import {Link} from "react-router-dom";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {validate} from "./validate";

import {RenderInput, RenderCheckbox} from "../../";

interface HomeEmailFormProps {}

const HomeEmailForm: React.FC<
    HomeEmailFormProps & InjectedFormProps<{}, HomeEmailFormProps>
> = ({handleSubmit, invalid, pristine, submitting}) => {
    return (
        <form className="home-email-form" onSubmit={handleSubmit}>
            <div className="home-email-form-text">
                <h2 className="home-email-form-text__title">
                    Гости сэкономили с нами на бронированиях{" "}
                    <span>более 13 млн руб.</span>
                </h2>

                <p className="home-email-form-text__subtitle">
                    Сэкономь и ты: подпишись, чтобы мы могли присылать только
                    лучшие предложения мира путешествий.
                </p>
            </div>

            <div className="home-email-form-wrapper">
                <div className="home-email-form-field">
                    <div className="home-email-form-field-input">
                        <Field
                            component={RenderInput}
                            type="email"
                            name="email"
                            label="Ваш электронный адрес"
                        />
                    </div>

                    <button
                        className={`btn ${
                            invalid ? "disabled" : ""
                        } home-email-form-field__btn`}
                        disabled={invalid || submitting || pristine}
                    >
                        Подписаться
                    </button>
                </div>

                <div className="home-email-form-checkbox">
                    <Field
                        component={RenderCheckbox}
                        name="policyCheckbox"
                        small
                    >
                        Я соглашаюсь с условиями{" "}
                        <Link to="/policy">Политики конфиденциальности.</Link>
                    </Field>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, HomeEmailFormProps>({
    form: "home-email-form",
    validate,
})(HomeEmailForm);
