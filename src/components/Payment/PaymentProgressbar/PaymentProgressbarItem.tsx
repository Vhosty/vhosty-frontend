import React from "react";
import {Link} from "react-router-dom";

interface PaymentProgressbarItemProps {
    title: string;
    number: number;

    success: boolean;
    active: boolean;

    linkTo?: string;
}

const PaymentProgressbarItem: React.FC<PaymentProgressbarItemProps> = ({
    title,
    number,
    success,
    active,
    linkTo,
}) => {
    return (
        <>
            {linkTo ? (
                <Link
                    to={linkTo}
                    className={`payment-title-progressbar-item ${
                        active ? "active" : ""
                    } ${success ? "success" : ""}`}
                >
                    {success ? (
                        <div className="payment-title-progressbar-item-success-icon">
                            <svg
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 0.8125C6.27988 0.8125 0.8125 6.27988 0.8125 13C0.8125 19.7201 6.27988 25.1875 13 25.1875C19.7201 25.1875 25.1875 19.7201 25.1875 13C25.1875 6.27988 19.7201 0.8125 13 0.8125ZM19.3428 8.91543L11.4678 18.2904C11.3814 18.3933 11.2739 18.4764 11.1526 18.5342C11.0313 18.5919 10.899 18.6229 10.7646 18.625H10.7488C10.6174 18.625 10.4875 18.5973 10.3675 18.5438C10.2475 18.4903 10.14 18.4122 10.0521 18.3145L6.67715 14.5645C6.59144 14.4735 6.52476 14.3664 6.48104 14.2494C6.43732 14.1323 6.41744 14.0077 6.42256 13.8829C6.42769 13.758 6.45771 13.6355 6.51088 13.5224C6.56404 13.4093 6.63928 13.308 6.73215 13.2245C6.82503 13.1409 6.93367 13.0767 7.0517 13.0357C7.16973 12.9947 7.29476 12.9777 7.41945 12.9858C7.54414 12.9938 7.66597 13.0266 7.77777 13.0824C7.88958 13.1382 7.98911 13.2158 8.07051 13.3105L10.7242 16.259L17.9072 7.70957C18.0683 7.52329 18.2963 7.40789 18.5418 7.38833C18.7873 7.36877 19.0307 7.4466 19.2193 7.60502C19.4079 7.76343 19.5265 7.9897 19.5497 8.23491C19.5728 8.48012 19.4984 8.72457 19.3428 8.91543V8.91543Z"
                                    fill="#00A0A0"
                                />
                            </svg>
                        </div>
                    ) : (
                        <p className="payment-title-progressbar-item__count">
                            {number}
                        </p>
                    )}

                    <p className="payment-title-progressbar-item__title">
                        {title}
                    </p>
                </Link>
            ) : (
                <div
                    className={`payment-title-progressbar-item ${
                        active ? "active" : ""
                    } ${success ? "success" : ""}`}
                >
                    {success ? (
                        <div className="payment-title-progressbar-item-success-icon">
                            <svg
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 0.8125C6.27988 0.8125 0.8125 6.27988 0.8125 13C0.8125 19.7201 6.27988 25.1875 13 25.1875C19.7201 25.1875 25.1875 19.7201 25.1875 13C25.1875 6.27988 19.7201 0.8125 13 0.8125ZM19.3428 8.91543L11.4678 18.2904C11.3814 18.3933 11.2739 18.4764 11.1526 18.5342C11.0313 18.5919 10.899 18.6229 10.7646 18.625H10.7488C10.6174 18.625 10.4875 18.5973 10.3675 18.5438C10.2475 18.4903 10.14 18.4122 10.0521 18.3145L6.67715 14.5645C6.59144 14.4735 6.52476 14.3664 6.48104 14.2494C6.43732 14.1323 6.41744 14.0077 6.42256 13.8829C6.42769 13.758 6.45771 13.6355 6.51088 13.5224C6.56404 13.4093 6.63928 13.308 6.73215 13.2245C6.82503 13.1409 6.93367 13.0767 7.0517 13.0357C7.16973 12.9947 7.29476 12.9777 7.41945 12.9858C7.54414 12.9938 7.66597 13.0266 7.77777 13.0824C7.88958 13.1382 7.98911 13.2158 8.07051 13.3105L10.7242 16.259L17.9072 7.70957C18.0683 7.52329 18.2963 7.40789 18.5418 7.38833C18.7873 7.36877 19.0307 7.4466 19.2193 7.60502C19.4079 7.76343 19.5265 7.9897 19.5497 8.23491C19.5728 8.48012 19.4984 8.72457 19.3428 8.91543V8.91543Z"
                                    fill="#00A0A0"
                                />
                            </svg>
                        </div>
                    ) : (
                        <p className="payment-title-progressbar-item__count">
                            {number}
                        </p>
                    )}

                    <p className="payment-title-progressbar-item__title">
                        {title}
                    </p>
                </div>
            )}
        </>
    );
};

export default PaymentProgressbarItem;
