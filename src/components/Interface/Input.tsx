import React from "react";

interface InputProps {
    label: string;
    small?: boolean;
}

const Input: React.FC<InputProps> = ({label, small}) => {
    return (
        <div className="input">
            <input
                className={`input__field ${small ? "small" : ""}`}
                placeholder={label}
            />
        </div>
    );
};

export default Input;
