import React from "react";
import {Link} from "react-router-dom";
import {createTextMask} from "redux-form-input-masks";

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

            <div className="payment-info-room-and-contact-form-bonus">
                <h2 className="payment-info-room-and-contact-form-bonus__title">
                    Получите <span>46 789 бонусов,</span> которые можно
                    потратить на путешествия
                </h2>
                <p className="payment-info-room-and-contact-form-bonus__subtitle">
                    <Link to="#login">Авторизируйтесь</Link> или{" "}
                    <Link to="#register">Зарегистрируйтесь</Link>, чтобы копить
                    бонусы и бронировать быстрее
                </p>
            </div>

            <div className="payment-block-padding">
                <div className="payment-info-room-and-contact-form-input-block">
                    <div className="payment-info-room-and-contact-form-input-block-subblock">
                        <p className="payment-info-room-and-contact-form-input-block-subblock__title">
                            Электронная почта
                        </p>

                        <Field
                            component={RenderInput}
                            name="email"
                            label="examplemyemail@mail.ru"
                            type="email"
                            small
                        />
                    </div>

                    <div className="payment-info-room-and-contact-form-input-block-subblock">
                        <p className="payment-info-room-and-contact-form-input-block-subblock__title">
                            Телефон для связи
                        </p>

                        <Field
                            component={RenderInput}
                            name="phone"
                            label={"8 999 999 99 99"}
                            type="text"
                            small
                            {...(createTextMask({
                                pattern: "+7 999 999 99-99",
                                guide: false,
                                stripMask: false,
                            }) as any)}
                        />
                    </div>
                </div>
                <div className="payment-info-room-and-contact-form-input-block">
                    <div className="payment-info-room-and-contact-form-input-block-subblock">
                        <p className="payment-info-room-and-contact-form-input-block-subblock__title">
                            Имя
                        </p>

                        <Field
                            component={RenderInput}
                            name="name"
                            label="Анастасия"
                            type="text"
                            small
                        />
                    </div>

                    <div className="payment-info-room-and-contact-form-input-block-subblock">
                        <p className="payment-info-room-and-contact-form-input-block-subblock__title">
                            Фамилия
                        </p>

                        <Field
                            component={RenderInput}
                            name="surname"
                            label="Иванова"
                            type="text"
                            small
                        />
                    </div>
                </div>
                <div className="payment-info-room-and-contact-form-input-block">
                    <div className="payment-info-room-and-contact-form-input-block-subblock fullWidth">
                        <p className="payment-info-room-and-contact-form-input-block-subblock__title">
                            Гражданство
                        </p>

                        <Field
                            component={RenderSelect}
                            choices={[
                                {title: "Российская Федерация", key: "russia"},
                                {
                                    title: "Российская Федерация1",
                                    key: "russia1",
                                },
                            ]}
                            border
                            small
                            name="country"
                        />
                    </div>
                </div>
                <div className="payment-info-room-and-contact-form-input-block">
                    <div className="payment-info-room-and-contact-form-input-block-subblock fullWidth">
                        <p className="payment-info-room-and-contact-form-input-block-subblock__title">
                            Особые пожелания
                        </p>

                        <Field
                            component={RenderInput}
                            name="message"
                            label="Например, номер на 3 этаже"
                            type="text"
                            small
                        />
                    </div>
                </div>
                <div className="payment-info-room-and-contact-form-btn">
                    <button className="btn payment-info-room-and-contact-form-btn__btn">
                        Перейти к оплате
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
