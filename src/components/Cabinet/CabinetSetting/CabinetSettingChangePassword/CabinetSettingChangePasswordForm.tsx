import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {validate} from "./validate";

import {
    RenderInput,
    CabinetSettingChangePasswordFormMessageError,
} from "../../../";

interface CabinetSettingChangePasswordFormProps {}

const CabinetSettingChangePasswordForm: React.FC<
    CabinetSettingChangePasswordFormProps &
        InjectedFormProps<{}, CabinetSettingChangePasswordFormProps>
> = ({handleSubmit, invalid, submitting, pristine}) => {
	const {isPendingChangePassword} = useTypedSelector(
        ({userCabinetSetting}) => userCabinetSetting
    );
	
    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-content-padding-top">
                <div className="reglog-form-text">
                    <p className="reglog-form-text__title">Изменение пароля</p>
                </div>
			</div>
			
			<CabinetSettingChangePasswordFormMessageError />

            <div className="reglog-content-padding-bottom">
                <div className="reglog-form-block">
                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="password"
                            name="old_password"
                            label="• • • • • • • • • •"
                            title="Старый пароль"
                        />
                    </div>

                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="password"
                            name="new_password"
                            label="• • • • • • • • • •"
                            title="Новый пароль"
                        />
                    </div>

                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="password"
                            name="new_password2"
                            label="• • • • • • • • • •"
                            title="Повторите пароль"
                        />
                    </div>

                    <div className="reglog-form-block-btn">
                        <button
                            className={`btn ${
                                isPendingChangePassword ? "disabled" : ""
                            } reglog-form-block-btn__btn`}
                            disabled={
                                invalid ||
                                submitting ||
                                pristine ||
                                isPendingChangePassword
                            }
                        >
                            {isPendingChangePassword
                                ? "Обновляем"
                                : "Сохранить изменения"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, CabinetSettingChangePasswordFormProps>({
    form: "cabinett-setting-change-password",
    validate,
})(CabinetSettingChangePasswordForm);
