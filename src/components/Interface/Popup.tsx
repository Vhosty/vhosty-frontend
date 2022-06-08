import React from "react";

interface PopupProps {
    active: boolean;
    activeAnimation: boolean;
    refPopup: React.RefObject<HTMLDivElement>;

    addClassWrapper?: string;

    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
    active,
    activeAnimation,
    refPopup,
    addClassWrapper,
    children,
}) => {
    return (
        <>
            {active ? (
                <div
                    className={`popup ${activeAnimation ? "close" : ""} ${
                        addClassWrapper ? addClassWrapper : ""
                    }`}
                    ref={refPopup}
                >
                    {children}
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Popup;
