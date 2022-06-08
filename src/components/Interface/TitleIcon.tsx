import React from "react";

interface TitleIconProps {
    title: string;
    marginBottom?: boolean;

    children: React.ReactNode;
}

const TitleIcon: React.FC<TitleIconProps> = ({
    title,
    marginBottom,
    children,
}) => {
    return (
        <div className={`title-icon ${marginBottom ? "mb" : ""}`}>
            {children}

            <span className="title-icon__title">{title}</span>
        </div>
    );
};

export default TitleIcon;
