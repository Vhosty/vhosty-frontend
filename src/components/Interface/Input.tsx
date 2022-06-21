import React from "react";

interface InputProps {
    label: string;
    type: string;

    fixLabel?: string;

    small?: boolean;
    smallPlaceholder?: boolean;
    value?: string | number;

    onChange?: (value: string | number) => void;
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    fixLabel,
    small,
    smallPlaceholder,
    value,
    onChange,
}) => {
    return (
        <div className="input">
            <div
                className={`input-field ${small ? "small" : ""} ${
                    smallPlaceholder ? "small-placeholder" : ""
                }`}
            >
                <input
                    type={type}
                    className="input-field__input"
                    placeholder={label}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange && onChange(e.target.value)
                    }
                />

                {fixLabel ? (
                    <p className="input-field__fixlabel">{fixLabel}</p>
                ) : null}
            </div>
        </div>
    );
};

export default Input;
