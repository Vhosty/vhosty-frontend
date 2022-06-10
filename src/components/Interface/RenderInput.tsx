import React from "react";

interface InputProps {
    label: string;
    small?: boolean;

    input: any;
    type: any;
    meta: any;
}

const Input: React.FC<InputProps> = ({
    label,
    small,
    input,
    type,
    meta: {touched, error},
}) => {
    return (
        <div className="input">
            <input
                {...input}
                type={type}
                className={`input__field ${small ? "small" : ""} ${
                    touched && error ? "error" : ""
                }`}
                placeholder={label}
            />

            {touched && error && <span className="input__error">{error}</span>}
        </div>
    );
};

export default Input;
