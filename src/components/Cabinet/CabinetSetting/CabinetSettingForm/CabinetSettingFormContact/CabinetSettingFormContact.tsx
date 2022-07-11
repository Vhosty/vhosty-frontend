import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {Popup, RenderInput, CabinetSettingFormContactEmailInput} from "../../../../";

import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

const CabinetSettingFormContact: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
}) => {
    const {user, isLoadedUser} = useTypedSelector(({user}) => user);

    React.useEffect(() => {
        initialize({...user});
    }, [isLoadedUser]);

    const [activeMessageBtn, setActiveMessageBtn] =
        React.useState<boolean>(false);
	
    return (
        <form className="cabinet-content-setting-form-block">
            <div className="cabinet-content-setting-form-block-title">
                <h3 className="cabinet-content-setting-form-block-title__title">
                    Данные аккаунта
                </h3>

                <button
                    className="cabinet-content-setting-form-block-title__btn disabled"
                    type="button"
                >
                    <Popup
                        wrapperActive={activeMessageBtn}
                        setWrapperActive={setActiveMessageBtn}
                        addClassWrapper="cabinet-content-setting-form-block-title__btn-message-wrapper"
                    >
                        <div className="cabinet-content-setting-form-block-title__btn-message">
                            <div className="cabinet-content-setting-form-block-title__btn-message-text">
                                <h3 className="cabinet-content-setting-form-block-title__btn-message-text__title">
                                    Почему я не могу отредактировать эти данные?
                                </h3>

                                <p className="cabinet-content-setting-form-block-title__btn-message-text__description">
                                    Электронная почта и телефон указываются лишь
                                    единожды. Это помогает нам сделать аккаунт
                                    защищеннее.
                                </p>
                            </div>
                        </div>
                    </Popup>
                    <div
                        className="cabinet-content-setting-form-block-title__btn-message-icon"
                        onClick={() => setActiveMessageBtn(true)}
                    >
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.3125 1C9.27288 1 7.27907 1.60482 5.58319 2.73797C3.8873 3.87112 2.56553 5.48171 1.785 7.36608C1.00447 9.25044 0.800246 11.3239 1.19816 13.3244C1.59607 15.3248 2.57824 17.1623 4.02047 18.6045C5.4627 20.0468 7.30021 21.0289 9.30064 21.4268C11.3011 21.8248 13.3746 21.6205 15.2589 20.84C17.1433 20.0595 18.7539 18.7377 19.887 17.0418C21.0202 15.3459 21.625 13.3521 21.625 11.3125C21.625 8.57746 20.5385 5.95443 18.6045 4.02046C16.6706 2.08649 14.0475 1 11.3125 1Z"
                                stroke="#929890"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                            />
                            <path
                                d="M8.03125 8.16587C8.03125 8.16587 8.08047 7.14048 9.17793 6.25748C9.82891 5.73306 10.6094 5.5813 11.3125 5.57076C11.9529 5.56255 12.5248 5.66861 12.867 5.8315C13.4529 6.11041 14.5938 6.79126 14.5938 8.23912C14.5938 9.76255 13.5977 10.4545 12.4627 11.2157C11.3277 11.9768 11.0195 12.803 11.0195 13.6567"
                                stroke="#929890"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                            <path
                                d="M10.9609 17.875C11.6081 17.875 12.1328 17.3503 12.1328 16.7031C12.1328 16.0559 11.6081 15.5312 10.9609 15.5312C10.3137 15.5312 9.78906 16.0559 9.78906 16.7031C9.78906 17.3503 10.3137 17.875 10.9609 17.875Z"
                                fill="#929890"
                            />
                        </svg>
                    </div>
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1.81399 14.463L0.547323 19.9297C0.503627 20.1295 0.505125 20.3366 0.551707 20.5358C0.598289 20.735 0.688779 20.9212 0.816565 21.081C0.944352 21.2407 1.10621 21.3699 1.29031 21.459C1.47441 21.5482 1.6761 21.5951 1.88066 21.5964C1.97597 21.606 2.07201 21.606 2.16732 21.5964L7.66732 20.3297L18.2273 9.80969L12.334 3.92969L1.81399 14.463Z" />
                        <path d="M21.5471 4.546L17.6138 0.612662C17.3552 0.355372 17.0053 0.210937 16.6405 0.210938C16.2757 0.210938 15.9257 0.355372 15.6671 0.612662L13.4805 2.79933L19.3671 8.686L21.5538 6.49933C21.6818 6.37072 21.7831 6.21813 21.852 6.05031C21.921 5.88248 21.9561 5.70271 21.9555 5.52128C21.9549 5.33985 21.9185 5.16032 21.8484 4.99297C21.7784 4.82562 21.676 4.67373 21.5471 4.546V4.546Z" />
                    </svg>
                    Редактировать
                </button>
            </div>

            <div className="cabinet-content-setting-form-block-inputs">
                <CabinetSettingFormContactEmailInput />

                <div className="cabinet-content-setting-form-block-input-wrapper">
                    <div className="cabinet-content-setting-form-block-input">
                        <Field
                            component={RenderInput}
                            title="Телефон"
                            label="Не указан"
                            type="phone"
                            name="phone"
                            small
                            disabled={true}
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
