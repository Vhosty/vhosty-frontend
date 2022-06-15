import React from "react";

interface InputProps {
    label: string;
    small?: boolean;
}

const Input: React.FC<InputProps> = ({label, small}) => {
    return (
        <div className="input">
            <div className="input-field">
                <input
                    className={`input-field__input ${small ? "small" : ""}`}
                    placeholder={label}
                />
            </div>
        </div>
    );
};

export default Input;
