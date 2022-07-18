import React from "react";
import {useDispatch} from "react-redux";
import {Field} from "redux-form";

import {sendRepeatUserConfirmedEmail} from "../../../../../redux/actions/user/user";

import {Popup, RenderInput} from "../../../../";

import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

interface CabinetSettingFormContactEmailInputProps {
    disabled?: boolean;
}

const CabinetSettingFormContactEmailInput: React.FC<
    CabinetSettingFormContactEmailInputProps
> = ({disabled}) => {
    const dispatch = useDispatch();

    const {user} = useTypedSelector(({user}) => user);

    const initialSeconds: number = +localStorage["seconds"];

    const [activeEmailMessage, setActiveEmailMessage] =
        React.useState<boolean>(false);
    const [currentSeconds, setCurrentSeconds] =
        React.useState<number>(initialSeconds);

    React.useEffect(() => {
        localStorage.setItem("seconds", String(currentSeconds));

        if (currentSeconds < 60) {
            if (currentSeconds === 1) {
                setCurrentSeconds(60);
            } else {
                const timer = setInterval(() => {
                    setCurrentSeconds(currentSeconds - 1);
                }, 1000);

                return () => {
                    clearInterval(timer);
                };
            }
        }
    }, [currentSeconds]);

    const sendConfirmedEmail = () => {
        dispatch(sendRepeatUserConfirmedEmail(user.email) as any);
        setCurrentSeconds(currentSeconds - 1);
    };

    return (
        <div className="cabinet-content-setting-form-block-input-wrapper">
            <div className="cabinet-content-setting-form-block-input">
                <div
                    className={`cabinet-content-setting-form-block-input-title ${
                        user.email_is_verified ? "" : "error"
                    }`}
                >
                    <p className="cabinet-content-setting-form-block-input-title__subtitle">
                        Электронная почта
                    </p>

                    {user.email_is_verified ? null : (
                        <>
                            <div
                                className="cabinet-content-setting-form-block-input-title-icon"
                                onClick={() => setActiveEmailMessage(true)}
                            >
                                <svg
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`cabinet-content-setting-form-block-input-title-icon__svgActive ${
                                        activeEmailMessage ? "active" : ""
                                    }`}
                                >
                                    <path
                                        d="M11.3125 1C9.27288 1 7.27907 1.60482 5.58319 2.73797C3.8873 3.87112 2.56553 5.48171 1.785 7.36608C1.00447 9.25044 0.800246 11.3239 1.19816 13.3244C1.59607 15.3248 2.57824 17.1623 4.02047 18.6045C5.4627 20.0468 7.30021 21.0289 9.30064 21.4268C11.3011 21.8248 13.3746 21.6205 15.2589 20.84C17.1433 20.0595 18.7539 18.7377 19.887 17.0418C21.0202 15.3459 21.625 13.3521 21.625 11.3125C21.625 8.57746 20.5385 5.95443 18.6045 4.02046C16.6706 2.08649 14.0475 1 11.3125 1Z"
                                        fill="#EB0047"
                                        stroke="#EB0047"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M8.03125 8.16587C8.03125 8.16587 8.08047 7.14048 9.17793 6.25748C9.82891 5.73306 10.6094 5.5813 11.3125 5.57076C11.9529 5.56255 12.5248 5.66861 12.867 5.8315C13.4529 6.11041 14.5938 6.79126 14.5938 8.23912C14.5938 9.76255 13.5977 10.4545 12.4627 11.2157C11.3277 11.9768 11.0195 12.803 11.0195 13.6567"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10.9609 17.875C11.6081 17.875 12.1328 17.3503 12.1328 16.7031C12.1328 16.0559 11.6081 15.5312 10.9609 15.5312C10.3137 15.5312 9.78906 16.0559 9.78906 16.7031C9.78906 17.3503 10.3137 17.875 10.9609 17.875Z"
                                        fill="white"
                                    />
                                </svg>

                                <svg
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="cabinet-content-setting-form-block-input-title-icon__svg"
                                >
                                    <path
                                        d="M11.3125 1C9.27288 1 7.27907 1.60482 5.58319 2.73797C3.8873 3.87112 2.56553 5.48171 1.785 7.36608C1.00447 9.25044 0.800246 11.3239 1.19816 13.3244C1.59607 15.3248 2.57824 17.1623 4.02047 18.6045C5.4627 20.0468 7.30021 21.0289 9.30064 21.4268C11.3011 21.8248 13.3746 21.6205 15.2589 20.84C17.1433 20.0595 18.7539 18.7377 19.887 17.0418C21.0202 15.3459 21.625 13.3521 21.625 11.3125C21.625 8.57746 20.5385 5.95443 18.6045 4.02046C16.6706 2.08649 14.0475 1 11.3125 1Z"
                                        stroke="#EB0047"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M8.03125 8.16587C8.03125 8.16587 8.08047 7.14048 9.17793 6.25748C9.82891 5.73306 10.6094 5.5813 11.3125 5.57076C11.9529 5.56255 12.5248 5.66861 12.867 5.8315C13.4529 6.11041 14.5938 6.79126 14.5938 8.23912C14.5938 9.76255 13.5977 10.4545 12.4627 11.2157C11.3277 11.9768 11.0195 12.803 11.0195 13.6567"
                                        stroke="#EB0047"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10.9609 17.875C11.6081 17.875 12.1328 17.3503 12.1328 16.7031C12.1328 16.0559 11.6081 15.5312 10.9609 15.5312C10.3137 15.5312 9.78906 16.0559 9.78906 16.7031C9.78906 17.3503 10.3137 17.875 10.9609 17.875Z"
                                        fill="#EB0047"
                                    />
                                </svg>
                            </div>

                            <Popup
                                wrapperActive={activeEmailMessage}
                                setWrapperActive={setActiveEmailMessage}
                                addClassWrapper="cabinet-content-setting-form-block-input-title-message-wrapper"
                            >
                                <div className="cabinet-content-setting-form-block-input-title-message">
                                    <p className="cabinet-content-setting-form-block-input-title-message__description">
                                        Необходимо подтвердить данные: мы
                                        выслали письмо с ссылкой-подтверждением
                                        на указанную почту
                                    </p>

                                    <button
                                        className={`cabinet-content-setting-form-block-input-title-message__btn ${
                                            currentSeconds < 60 &&
                                            currentSeconds > 0
                                                ? "disabled"
                                                : ""
                                        }`}
                                        type="button"
                                        onClick={sendConfirmedEmail}
                                    >
                                        <p>Выслать письмо повторно</p>{" "}
                                        {currentSeconds < 60 &&
                                        currentSeconds > 0 ? (
                                            <span>{currentSeconds}</span>
                                        ) : null}
                                    </button>
                                </div>
                            </Popup>
                        </>
                    )}
                </div>

                <Field
                    component={RenderInput}
                    label="Не указана"
                    type="email"
                    name="email"
                    small
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default CabinetSettingFormContactEmailInput;
