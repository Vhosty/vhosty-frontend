import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    ReglogSuccess,
    LoginForm,
    RegisterForm,
    RecoveryPasswordForm,
    Logout,
} from "../components/";

import {ReglogStateTypes} from "../redux/types/IReglog";

import {
    setReglogOpen,
    setReglogClose,
    setReglogType,
} from "../redux/actions/reglog";

import {sendRegister} from "../redux/actions/register";
import {sendLogin} from "../redux/actions/login";

const Reglog: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {closeAnimation, changeCloseAnimation, type} = useTypedSelector(
        ({reglog}) => reglog
    );

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggleReglog);
        document.addEventListener("touchstart", toggleReglog);

        return () => {
            document.removeEventListener("mousedown", toggleReglog);
            document.removeEventListener("touchstart", toggleReglog);
        };
    }, [PopupRef]);

    const onSubmit = (data: any) => {};

    const onSubmitLogin = (data: any) => {
        dispatch(sendLogin(data) as any);
    };

    const onSubmitRegister = (data: any) => {
        dispatch(sendRegister(data) as any);
    };

    const closeFunc = () => {
        dispatch(setReglogClose() as any);

        navigate({
            pathname: window.location.pathname,
            search: ``,
            hash: "",
        });
    };

    const toggleReglog = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            closeFunc();
        }
    };

    return (
        <section className={`reglog ${closeAnimation ? "close" : ""}`}>
            <div
                className={`reglog-content ${
                    closeAnimation || changeCloseAnimation ? "close" : ""
                }`}
                ref={PopupRef}
            >
                <div className="reglog-close" onClick={closeFunc}>
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M26.25 15C26.25 8.78906 21.2109 3.75 15 3.75C8.78906 3.75 3.75 8.78906 3.75 15C3.75 21.2109 8.78906 26.25 15 26.25C21.2109 26.25 26.25 21.2109 26.25 15Z"
                            stroke="#00A0A0"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M11.25 18.75L18.75 11.25M18.75 18.75L11.25 11.25L18.75 18.75Z"
                            stroke="#00A0A0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {type === ReglogStateTypes.LOGIN ? (
                    <LoginForm onSubmit={onSubmitLogin} />
                ) : null}

                {type === ReglogStateTypes.REGISTER ? (
                    <RegisterForm onSubmit={onSubmitRegister} />
                ) : null}

                {type === ReglogStateTypes.REGISTER_SUCCESS ? (
                    <ReglogSuccess
                        topTitle="Зарегистрироваться или Войти"
                        title="Проверьте почту!"
                        description="Мы выслали всю информацию для подтверждения данных на указанную Вами почту. Перейдите по ссылке в письме и получите полный доступ к функционалу сайта."
                        btnLink="/cabinet/setting"
                        btnText="В личный кабинет"
                    />
                ) : null}

                {type === ReglogStateTypes.RECOVERY_PASSWORD ? (
                    <RecoveryPasswordForm onSubmit={onSubmit} />
                ) : null}

                {type === ReglogStateTypes.LOGOUT ? <Logout /> : null}
            </div>
        </section>
    );
};

const ReglogWrapper: React.FC = () => {
    const {hash, pathname} = useLocation();
    const dispatch = useDispatch();

    const {open} = useTypedSelector(({reglog}) => reglog);

    React.useEffect(() => {
        const type_hash: string = hash.split("#")[1];

        if (Object.values(ReglogStateTypes).find((type) => type == type_hash)) {
            dispatch(setReglogType(type_hash, open) as any);
            dispatch(setReglogOpen());
        } else {
            dispatch(setReglogClose() as any);
        }
    }, [hash, pathname]);

    return <>{open ? <Reglog /> : null}</>;
};

export default ReglogWrapper;
