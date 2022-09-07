import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {RenderInput, RenderSelect} from "../../";

import {validate} from "./validate";

const PaymentForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
}) => {
    return (
        <form
            className="payment-block payment-info-room-and-contact-form"
            onSubmit={handleSubmit}
        >
            <div className="payment-block-padding notMarginBottom">
                <h2 className="payment-info-room-and-contact-form__title">
                    Контактные данные гостя
                </h2>
                <p className="payment-info-room-and-contact-form__subtitle">
                    Пожалуйста, заполните все поля для завершения бронирования.
                </p>
            </div>
            {/* 
            <div className="payment-info-room-and-contact-form-bonus">
                <h2 className="payment-info-room-and-contact-form-bonus__title">
                    Получите <span>46 789 бонусов,</span> которые можно
                    потратить на путешествия
                </h2>
                <p className="payment-info-room-and-contact-form-bonus__subtitle">
                    <Link to={`${window.location.search}#login`}>Авторизируйтесь</Link> или{" "}
                    <Link to={`${window.location.search}#register`}>Зарегистрируйтесь</Link>, чтобы копить
                    бонусы и бронировать быстрее
                </p>
            </div> */}

            <div className="payment-block-padding">
                <div className="payment-info-room-and-contact-form-input-block">
                    <div className="payment-info-room-and-contact-form-input-block-subblock">
                        <Field
                            component={RenderInput}
                            name="email"
                            title="Электронная почта"
                            label="examplemyemail@mail.ru"
                            type="email"
                            small
                        />
                    </div>

                    <div className="payment-info-room-and-contact-form-input-block-subblock">
                        <Field
                            component={RenderInput}
                            name="phone"
                            title="Телефон для связи"
                            label={"8 999 999 99 99"}
                            type="text"
                            small
                        />
                    </div>
                </div>
                <div className="payment-info-room-and-contact-form-input-block">
                    <div className="payment-info-room-and-contact-form-input-block-subblock">
                        <Field
                            component={RenderInput}
                            name="name"
                            title="Имя"
                            label="Анастасия"
                            type="text"
                            small
                        />
                    </div>

                    <div className="payment-info-room-and-contact-form-input-block-subblock">
                        <Field
                            component={RenderInput}
                            name="surname"
                            title="Фамилия"
                            label="Иванова"
                            type="text"
                            small
                        />
                    </div>
                </div>
                <div className="payment-info-room-and-contact-form-input-block">
                    <div className="payment-info-room-and-contact-form-input-block-subblock fullWidth">
                        <Field
                            component={RenderSelect}
                            choices={[
                                {title: "Российская Федерация", key: "russia"},
                            ]}
                            border
                            title="Гражданство"
                            small
                            name="country"
                        />
                    </div>
                </div>
                <div className="payment-info-room-and-contact-form-input-block">
                    <div className="payment-info-room-and-contact-form-input-block-subblock fullWidth">
                        <Field
                            component={RenderInput}
                            name="message"
                            title="Особые пожелания"
                            label="Например, номер на 3 этаже"
                            type="text"
                            small
                        />
                    </div>
                </div>
                <div className="payment-info-room-and-contact-form-btn">
                    <button className="btn payment-info-room-and-contact-form-btn__btn">
                        Забронировать номер
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "payment-form",
    validate,
})(PaymentForm);
