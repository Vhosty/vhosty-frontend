import React from "react";

import {Input} from "../../";

const CabinetSettingForm: React.FC = () => {
    return (
        <div className="cabinet-content-setting-form">
            <div className="cabinet-content-setting-form-block">
                <h3 className="cabinet-content-setting-form-block__title">
                    Данные профиля
                </h3>
                <div className="cabinet-content-setting-form-block-input-wrapper">
                    <div className="cabinet-content-setting-form-block-input">
                        <Input
                            title="Имя"
                            label="Анастасия"
                            defaultValue="Анастасия"
                            type="name"
                            small
                            editButton
                        />
                    </div>

                    <div className="cabinet-content-setting-form-block-input">
                        <Input
                            title="Фамилия"
                            label="Иванова"
                            defaultValue="Иванова"
                            type="surname"
                            small
                            editButton
                        />
                    </div>
                </div>
            </div>

            <div className="cabinet-content-setting-form-block">
                <h3 className="cabinet-content-setting-form-block__title">
                    Данные аккаунта
                </h3>
                <div className="cabinet-content-setting-form-block-input-wrapper">
                    <div className="cabinet-content-setting-form-block-input">
                        <Input
                            title="Электронная почта"
                            label="examplemyemail@mail.ru"
                            defaultValue="examplemyemail@mail.ru"
                            type="email"
                            small
                            editButton
                        />
                    </div>

                    <div className="cabinet-content-setting-form-block-input">
                        <Input
                            title="Телефон"
                            label="8 999 999 99 99"
                            defaultValue="8 999 999 99 99"
                            type="phone"
                            small
                            editButton
                        />
                    </div>
                </div>
                <div className="cabinet-content-setting-form-block-input-wrapper">
                    <div className="cabinet-content-setting-form-block-input">
                        <Input
                            title="Старый пароль"
                            label="• • • • • • • • • •"
                            type="password"
                            small
                            editButton
                        />
                    </div>

                    <div className="cabinet-content-setting-form-block-input">
                        <Input
                            title="Новый пароль"
                            label="• • • • • • • • • •"
                            type="password"
                            small
                            editButton
                        />
                    </div>
                </div>
                <div className="cabinet-content-setting-form-block-input-wrapper">
                    <div className="cabinet-content-setting-form-block-input">
                        <Input
                            title="Повторите новый пароль"
                            label="• • • • • • • • • •"
                            type="password"
                            small
                            editButton
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CabinetSettingForm;
