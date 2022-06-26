import React from "react";

interface PopupProps {
    active: boolean;
    activeAnimation: boolean;
    refPopup: React.RefObject<HTMLDivElement>;

    addClassWrapper?: string;
    style?: any;

    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
    active,
    activeAnimation,
    refPopup,
    addClassWrapper,
    children,
    style,
}) => {
    return (
        <>
            {active ? (
                <div
                    className={`popup ${activeAnimation ? "close" : ""} ${
                        addClassWrapper ? addClassWrapper : ""
                    }`}
                    style={style}
                    ref={refPopup}
                >
                    {children}
                </div>
            ) : null}
        </>
    );
};

export default Popup;
