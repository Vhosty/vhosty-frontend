import React from "react";

interface InputProps {
    label: string;
}

const Input: React.FC<InputProps> = ({label}) => {
    return (
        <div className="input">
            <input type="text" className="input__field" placeholder={label} />
        </div>
    );
};

export default Input;
