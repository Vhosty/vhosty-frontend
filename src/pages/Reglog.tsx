import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {LoginForm, RegisterForm, RecoveryPasswordForm} from "../components/";

import {ReglogStateTypes} from "../redux/types/IReglog";

import {
    setReglogOpen,
    setReglogClose,
    setReglogType,
} from "../redux/actions/reglog";

const Reglog: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {open, closeAnimation, changeCloseAnimation, type} = useTypedSelector(
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

    const onSubmit = (data: any) => {
        console.log(data);
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
                {type === ReglogStateTypes.LOGIN ? (
                    <LoginForm onSubmit={onSubmit} closeOnClick={closeFunc} />
                ) : null}

                {type === ReglogStateTypes.REGISTER ? (
                    <RegisterForm
                        onSubmit={onSubmit}
                        closeOnClick={closeFunc}
                    />
                ) : null}

                {type === ReglogStateTypes.RECOVERY_PASSWORD ? (
                    <RecoveryPasswordForm
                        onSubmit={onSubmit}
                        closeOnClick={closeFunc}
                    />
                ) : null}
            </div>
        </section>
    );
};

const ReglogWrapper: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const {open} = useTypedSelector(({reglog}) => reglog);

    React.useEffect(() => {
        const type: string = location.hash.split("#")[1];

        if (
            type === "login" ||
            type === "register" ||
            type === "recovery_password"
        ) {
            dispatch(setReglogType(type, open) as any);
            dispatch(setReglogOpen());
        }
    }, [location.hash]);

    return <>{open ? <Reglog /> : null}</>;
};

export default ReglogWrapper;
