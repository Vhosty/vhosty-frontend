import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {LoginForm, RegisterForm, RecoveryPasswordForm} from "../components/";

import {ReglogStateTypes} from "../redux/types/IReglog";

import {setReglogClose, setReglogType} from "../redux/actions/reglog";

const Reglog: React.FC = () => {
    const dispatch = useDispatch();

    const {closeAnimation, type} = useTypedSelector(({reglog}) => reglog);

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
    };

    const toggleReglog = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            closeFunc();
        }
    };

    const setReglogTypeOnClick = (type: ReglogStateTypes) => {
        dispatch(setReglogType(type));
    };

    return (
        <section className={`reglog ${closeAnimation ? "close" : ""}`}>
            {type === ReglogStateTypes.LOGIN ? (
                <div
                    className={`reglog-content ${
                        closeAnimation ? "close" : ""
                    }`}
                    ref={PopupRef}
                >
                    <LoginForm
                        onSubmit={onSubmit}
                        closeOnClick={closeFunc}
                        setReglogTypeOnClick={setReglogTypeOnClick}
                    />
                </div>
            ) : null}

            {type === ReglogStateTypes.REGISTER ? (
                <div
                    className={`reglog-content ${
                        closeAnimation ? "close" : ""
                    }`}
                    ref={PopupRef}
                >
                    <RegisterForm
                        onSubmit={onSubmit}
                        closeOnClick={closeFunc}
                        setReglogTypeOnClick={setReglogTypeOnClick}
                    />
                </div>
            ) : null}

            {type === ReglogStateTypes.RECOVERY_PASSWORD ? (
                <div
                    className={`reglog-content ${
                        closeAnimation ? "close" : ""
                    }`}
                    ref={PopupRef}
                >
                    <RecoveryPasswordForm
                        onSubmit={onSubmit}
                        closeOnClick={closeFunc}
                    />
                </div>
            ) : null}
        </section>
    );
};

export default Reglog;
