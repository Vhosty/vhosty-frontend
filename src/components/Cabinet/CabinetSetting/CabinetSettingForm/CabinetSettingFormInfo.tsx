import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {RenderInput, CabinetSettingFormTitleAndBtn} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {validateInfo as validate} from "./validateInfo";

const CabinetSettingFormInfo: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
}) => {
    const [isEdit, setIsEdit] = React.useState<boolean>(false);

    const {user, isLoadedUser} = useTypedSelector(({user}) => user);

    React.useEffect(() => {
        initialize({...user});
    }, [isLoadedUser]);

    return (
        <form
            className="cabinet-content-setting-form-block"
            onSubmit={handleSubmit}
        >
            <CabinetSettingFormTitleAndBtn
                title="Данные профиля"
                isEdit={isEdit}
				setIsEdit={setIsEdit}
            />

            <div className="cabinet-content-setting-form-block-inputs">
                <div className="cabinet-content-setting-form-block-input-wrapper">
                    <div className="cabinet-content-setting-form-block-input">
                        <Field
                            component={RenderInput}
                            title="Имя"
                            label="Не указано"
                            type="name"
                            name="first_name"
                            small
                            disabled={!isEdit}
                        />
                    </div>
                </div>
                <div className="cabinet-content-setting-form-block-input-wrapper">
                    <div className="cabinet-content-setting-form-block-input">
                        <Field
                            component={RenderInput}
                            title="Фамилия"
                            label="Не указана"
                            type="surname"
                            name="last_name"
                            small
                            disabled={!isEdit}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "cabinet-setting-info-form",
    validate,
})(CabinetSettingFormInfo);
