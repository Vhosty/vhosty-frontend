import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {
    RenderInput,
    CabinetSettingFormTitleAndBtn,
    CabinetSettingFormContactEmailInput,
} from "../../../../";

import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

const CabinetSettingFormContact: React.FC<{} & InjectedFormProps<{}, {}>> = ({
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
                title="Данные аккаунта"
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                disabled={user.email_is_verified}
            />

            <div className="cabinet-content-setting-form-block-inputs">
                <CabinetSettingFormContactEmailInput disabled={!isEdit} />

                <div className="cabinet-content-setting-form-block-input-wrapper">
                    <div className="cabinet-content-setting-form-block-input">
                        <Field
                            component={RenderInput}
                            title="Телефон"
                            label="Не указан"
                            type="phone"
                            name="phone"
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
    form: "cabinet-setting-contact-form",
    // validate,
})(CabinetSettingFormContact);
