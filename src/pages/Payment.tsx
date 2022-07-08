import React from "react";
import {Helmet} from "react-helmet";

import {
    PaymentProgressbar,
    PaymentForm,
    Stars,
    Location,
    TitleIcon,
    Input,
    ServiceIcon,
} from "../components/";

const Payment: React.FC = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <Helmet>
                <title>Vhosty | Оформление заказа</title>
            </Helmet>

            <section className="payment">
                <div className="container">
                    <div className="payment-wrapper">
                        <div className="payment-title payment-block">
                            <PaymentProgressbar currentNumber={2} />
                            <div className="payment-title-room">
                                <div className="payment-title-room-text">
                                    <div className="payment-title-room-text-stars">
                                        <Stars count={5} />
                                    </div>

                                    <h2 className="payment-title-room-text__title">
                                        Auster Avani Palm View Dubai Hotel &
                                        Suites
                                    </h2>

                                    <Location
                                        title="Дубай Медиа-Сити, Дубай, st. general city employment, 1440"
                                        subtitle="10,9 км от центра"
                                    />
                                </div>

                                <div className="payment-title-room-feedbacks">
                                    <h3 className="payment-title-room-feedbacks__title">
                                        5,7
                                    </h3>
                                    <p className="payment-title-room-feedbacks__subtitle">
                                        нормально
                                    </p>
                                    <p className="payment-title-room-feedbacks__subtitle">
                                        3 485 отзывов
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="payment-info">
                            <div className="payment-info-smeta payment-block">
                                <div className="payment-block-padding notMarginBottom">
                                    <div className="payment-info-smeta-block payment-info-smeta-from-to">
                                        <h3 className="payment-info-smeta__title">
                                            Детали вашего бронирования
                                        </h3>
                                        <div className="payment-info-smeta-from-to-block">
                                            <TitleIcon title="Заселение">
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM13.29 14.71L9 10.41V5H11V9.59L14.71 13.3L13.29 14.71Z"
                                                        fill="#00A0A0"
                                                    />
                                                </svg>
                                            </TitleIcon>
                                            <div className="payment-info-smeta-from-to-block-text">
                                                <p className="payment-info-smeta-from-to-block-text__title">
                                                    ВС, 15 июня 2022
                                                </p>
                                                <p className="payment-info-smeta-from-to-block-text__subtitle">
                                                    С 15:00 по местному
                                                </p>
                                            </div>
                                        </div>
                                        <div className="payment-info-smeta-from-to-block">
                                            <TitleIcon title="Выезд">
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM13.29 14.71L9 10.41V5H11V9.59L14.71 13.3L13.29 14.71Z"
                                                        fill="#00A0A0"
                                                    />
                                                </svg>
                                            </TitleIcon>
                                            <div className="payment-info-smeta-from-to-block-text">
                                                <p className="payment-info-smeta-from-to-block-text__title">
                                                    ВС, 15 июня 2022
                                                </p>
                                                <p className="payment-info-smeta-from-to-block-text__subtitle">
                                                    С 15:00 по местному
                                                </p>
                                            </div>
                                        </div>

                                        <div className="payment-info-smeta-from-to-length">
                                            <p className="payment-info-smeta-from-to-length__title">
                                                Длительность проживания
                                            </p>
                                            <p className="payment-info-smeta-from-to-length__subtitle">
                                                9 дней, 10 ночей
                                            </p>
                                        </div>
                                    </div>
                                    <div className="payment-info-smeta-block payment-info-smeta-price">
                                        <h3 className="payment-info-smeta__title">
                                            Стоимость бронирования
                                        </h3>
                                        <div className="payment-info-smeta-price-items">
                                            <div className="payment-info-smeta-price-item">
                                                <p className="payment-info-smeta-price-item__title">
                                                    Улучшенный двухместный номер
                                                    с 1 кроватью
                                                </p>
                                                <p className="payment-info-smeta-price-item__count">
                                                    345 000 ₽
                                                </p>
                                            </div>
                                            <div className="payment-info-smeta-price-item">
                                                <p className="payment-info-smeta-price-item__title">
                                                    НДС в размере 7%
                                                </p>
                                                <p className="payment-info-smeta-price-item__count">
                                                    5 000 ₽
                                                </p>
                                            </div>
                                            <div className="payment-info-smeta-price-item green">
                                                <p className="payment-info-smeta-price-item__title">
                                                    VHOSTY радует
                                                </p>
                                                <p className="payment-info-smeta-price-item__count">
                                                    - 10 000 ₽
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="payment-info-smeta-total-price">
                                    <p className="payment-info-smeta-total-price__subtitle">
                                        ИТОГО
                                    </p>
                                    <p className="payment-info-smeta-total-price__title">
                                        150 000 руб.
                                    </p>
                                    <p className="payment-info-smeta-total-price__description">
                                        За всех гостей (4 гостя + ребенок 13
                                        лет)
                                    </p>
                                </div>

                                <div className="payment-block-padding">
                                    <div className="payment-info-smeta-block payment-info-smeta-cancel-booking">
                                        <h3 className="payment-info-smeta__title">
                                            Отмена бронирования
                                        </h3>
                                        <div className="payment-info-smeta-cancel-booking-items">
                                            <div className="payment-info-smeta-cancel-booking-item green">
                                                <p className="payment-info-smeta-cancel-booking__title">
                                                    Бесплатная отмена до 23:59
                                                    10 июня
                                                </p>
                                            </div>

                                            <div className="payment-info-smeta-cancel-booking-item">
                                                <p className="payment-info-smeta-cancel-booking__title">
                                                    С 00:00 16 июня
                                                </p>
                                                <p className="payment-info-smeta-cancel-booking__count">
                                                    5 000 ₽
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="payment-info-smeta-block payment-info-smeta-promocode">
                                        <h3 className="payment-info-smeta__title">
                                            Промокод
                                        </h3>
                                        <div className="payment-info-smeta-promocode-input">
                                            <p className="payment-info-smeta-promocode-input__title">
                                                У вас есть промокод?
                                            </p>
                                            <Input
                                                label="Введите промокод"
                                                type="text"
                                                small
                                            />
                                            <button className="btn-line payment-info-smeta-promocode-input__btn">
                                                Применить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-info-room-and-contact">
                                <div className="payment-info-room-and-contact-room-block">
                                    <div
                                        className="payment-info-room-and-contact-room-block-cover"
                                        style={{
                                            backgroundImage:
                                                "url('https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80')",
                                        }}
                                    >
                                        <p className="payment-info-room-and-contact-room-block-cover__count">
                                            30 фото
                                        </p>
                                    </div>
                                    <div className="payment-info-room-and-contact-room-block-text">
                                        <div className="payment-info-room-and-contact-room-block-text-block">
                                            <h2 className="payment-info-room-and-contact-room-block-text-block__title">
                                                Двухместный номер полулюкс
                                            </h2>
                                            <p className="payment-info-room-and-contact-room-block-text-block__subtitle">
                                                1 Двуспальная кровать
                                            </p>
                                            <div className="payment-info-room-and-contact-room-block-text-block-services">
                                                <div className="payment-info-room-and-contact-room-block-text-block-services-item">
                                                    <ServiceIcon>
                                                        <svg
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M0 2.72727C0 2.00396 0.287337 1.31026 0.7988 0.7988C1.31026 0.287337 2.00396 0 2.72727 0H13.2727C13.996 0 14.6897 0.287337 15.2012 0.7988C15.7127 1.31026 16 2.00396 16 2.72727V13.2727C16 13.996 15.7127 14.6897 15.2012 15.2012C14.6897 15.7127 13.996 16 13.2727 16H8.30836C8.67176 15.6449 8.96039 15.2207 9.15724 14.7523C9.35409 14.2839 9.45518 13.7808 9.45455 13.2727V10.3636C9.45455 8.25455 7.74545 6.54545 5.63636 6.54545H2.72727C2.21919 6.54482 1.71613 6.64591 1.24773 6.84276C0.779339 7.03962 0.355092 7.32824 0 7.69164V2.72727ZM0 10.3636V13.2727C0 13.996 0.287337 14.6897 0.7988 15.2012C1.31026 15.7127 2.00396 16 2.72727 16H5.63636C6.35968 16 7.05337 15.7127 7.56484 15.2012C8.0763 14.6897 8.36364 13.996 8.36364 13.2727V10.3636C8.36364 9.64032 8.0763 8.94663 7.56484 8.43516C7.05337 7.9237 6.35968 7.63636 5.63636 7.63636H2.72727C2.00396 7.63636 1.31026 7.9237 0.7988 8.43516C0.287337 8.94663 0 9.64032 0 10.3636Z"
                                                                fill="#00A0A0"
                                                            />
                                                        </svg>
                                                        26 м²
                                                    </ServiceIcon>
                                                </div>
                                                <div className="payment-info-room-and-contact-room-block-text-block-services-item">
                                                    <ServiceIcon>
                                                        <svg
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M1.125 13.5C1.125 14.4956 1.5641 15.3816 2.25 15.9993V17.4375C2.25 17.7469 2.50172 18 2.8125 18H3.9375C4.24687 18 4.5 17.7469 4.5 17.4375V16.9066H13.5V17.4375C13.5 17.7481 13.7519 18 14.0625 18H15.1875C15.4981 18 15.75 17.7481 15.75 17.4375V15.9996C16.4359 15.3819 16.875 14.496 16.875 13.5004V12.375H1.125V13.5ZM17.4375 9H3.375V2.71582C3.37395 2.33613 3.90234 2.11746 4.16953 2.38641L4.65469 2.87086C4.34531 3.81797 4.54922 4.72852 5.06953 5.38594C4.84805 5.60742 4.84453 5.96953 5.0625 6.1875L5.46012 6.58512C5.67977 6.80477 6.03598 6.80477 6.2557 6.58512L9.96117 2.87965C10.1808 2.65999 10.1808 2.30379 9.96117 2.08406L9.56355 1.68645C9.3439 1.46679 8.98769 1.46679 8.76797 1.68645C8.11055 1.1693 7.19648 0.968555 6.24727 1.28004L5.76211 0.795937C5.25586 0.290039 4.55625 0 3.84258 0C2.34352 0 1.125 1.21852 1.125 2.71582V9.00176L0.5625 9C0.251859 9 0 9.25313 0 9.5625V10.6875C0 10.9969 0.251859 11.25 0.5625 11.25H17.4375C17.7481 11.25 18 10.9981 18 10.6875V9.5625C18 9.25313 17.7469 9 17.4375 9Z"
                                                                fill="#00A0A0"
                                                            />
                                                        </svg>
                                                        Собственная ванная
                                                        комната
                                                    </ServiceIcon>
                                                </div>
                                                <div className="payment-info-room-and-contact-room-block-text-block-services-item">
                                                    <ServiceIcon>
                                                        <svg
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9.77842 9.41481C9.59393 9.60583 9.37324 9.7582 9.12923 9.86302C8.88522 9.96783 8.62278 10.023 8.35722 10.0253C8.09166 10.0276 7.8283 9.97702 7.58251 9.87646C7.33672 9.7759 7.11342 9.62739 6.92563 9.4396C6.73784 9.25182 6.58934 9.02851 6.48878 8.78272C6.38822 8.53693 6.33761 8.27357 6.33992 8.00801C6.34223 7.74245 6.3974 7.48001 6.50222 7.23601C6.60704 6.992 6.7594 6.77131 6.95042 6.58681C7.32762 6.2225 7.83283 6.02091 8.35722 6.02547C8.88162 6.03002 9.38324 6.24036 9.75406 6.61118C10.1249 6.98199 10.3352 7.48362 10.3398 8.00801C10.3443 8.53241 10.1427 9.03761 9.77842 9.41481Z"
                                                                fill="#00A0A0"
                                                            />
                                                            <path
                                                                d="M2.5 0C2.10218 0 1.72064 0.158035 1.43934 0.43934C1.15804 0.720644 1 1.10218 1 1.5V3H0.5C0.367392 3 0.240215 3.05268 0.146447 3.14645C0.0526784 3.24021 0 3.36739 0 3.5C0 3.63261 0.0526784 3.75979 0.146447 3.85355C0.240215 3.94732 0.367392 4 0.5 4H1V7.5H0.5C0.367392 7.5 0.240215 7.55268 0.146447 7.64645C0.0526784 7.74021 0 7.86739 0 8C0 8.13261 0.0526784 8.25979 0.146447 8.35355C0.240215 8.44732 0.367392 8.5 0.5 8.5H1V12H0.5C0.367392 12 0.240215 12.0527 0.146447 12.1464C0.0526784 12.2402 0 12.3674 0 12.5C0 12.6326 0.0526784 12.7598 0.146447 12.8536C0.240215 12.9473 0.367392 13 0.5 13H1V14.5C1 14.8978 1.15804 15.2794 1.43934 15.5607C1.72064 15.842 2.10218 16 2.5 16H14.5C14.8978 16 15.2794 15.842 15.5607 15.5607C15.842 15.2794 16 14.8978 16 14.5V1.5C16 1.10218 15.842 0.720644 15.5607 0.43934C15.2794 0.158035 14.8978 0 14.5 0L2.5 0ZM5.536 4.464L6.626 5.554C7.13387 5.19357 7.74123 4.99995 8.364 4.99995C8.98677 4.99995 9.59413 5.19357 10.102 5.554L11.192 4.464C11.2859 4.37025 11.4132 4.31763 11.5459 4.31772C11.6785 4.31782 11.8057 4.37061 11.8995 4.4645C11.9933 4.55839 12.0459 4.68567 12.0458 4.81835C12.0457 4.95104 11.9929 5.07825 11.899 5.172L10.809 6.262C11.549 7.299 11.549 8.702 10.809 9.738L11.899 10.828C11.9929 10.9218 12.0457 11.049 12.0458 11.1816C12.0459 11.3143 11.9933 11.4416 11.8995 11.5355C11.8057 11.6294 11.6785 11.6822 11.5459 11.6823C11.4132 11.6824 11.2859 11.6298 11.192 11.536L10.102 10.446C9.59419 10.8066 8.9868 11.0003 8.364 11.0003C7.7412 11.0003 7.13381 10.8066 6.626 10.446L5.536 11.536C5.48951 11.5825 5.43432 11.6194 5.37358 11.6445C5.31284 11.6697 5.24774 11.6826 5.182 11.6826C5.11626 11.6826 5.05116 11.6697 4.99042 11.6445C4.92968 11.6194 4.87449 11.5825 4.828 11.536C4.78151 11.4895 4.74464 11.4343 4.71948 11.3736C4.69432 11.3128 4.68137 11.2477 4.68137 11.182C4.68137 11.1163 4.69432 11.0512 4.71948 10.9904C4.74464 10.9297 4.78151 10.8745 4.828 10.828L5.918 9.738C5.55757 9.23013 5.36395 8.62277 5.36395 8C5.36395 7.37723 5.55757 6.76987 5.918 6.262L4.828 5.172C4.73411 5.07811 4.68137 4.95078 4.68137 4.818C4.68137 4.68522 4.73411 4.55789 4.828 4.464C4.92189 4.37011 5.04922 4.31737 5.182 4.31737C5.31478 4.31737 5.44211 4.37011 5.536 4.464ZM14 6.5V9.5C14 9.63261 13.9473 9.75979 13.8536 9.85355C13.7598 9.94732 13.6326 10 13.5 10C13.3674 10 13.2402 9.94732 13.1464 9.85355C13.0527 9.75979 13 9.63261 13 9.5V6.5C13 6.36739 13.0527 6.24021 13.1464 6.14645C13.2402 6.05268 13.3674 6 13.5 6C13.6326 6 13.7598 6.05268 13.8536 6.14645C13.9473 6.24021 14 6.36739 14 6.5Z"
                                                                fill="#00A0A0"
                                                            />
                                                        </svg>
                                                        Сейф
                                                    </ServiceIcon>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="payment-info-room-and-contact-room-block-text-block">
                                            <ServiceIcon
                                                green
                                                marginBottom
                                                questionMessage="Вы сможете совершенно бесплатно отменить бронь до указанного числа."
                                            >
                                                <svg
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.25043 1.25056C6.25055 1.12021 6.20991 0.993095 6.13421 0.88699C6.0585 0.780885 5.95151 0.701104 5.82822 0.658813C5.70493 0.616521 5.5715 0.613835 5.4466 0.651131C5.32171 0.688426 5.2116 0.763836 5.13168 0.866809L0.756684 6.49181C0.671337 6.60152 0.625 6.73656 0.625 6.87556C0.625 7.01456 0.671337 7.14959 0.756684 7.25931L5.13168 12.8843C5.2116 12.9873 5.32171 13.0627 5.4466 13.1C5.5715 13.1373 5.70493 13.1346 5.82822 13.0923C5.95151 13.05 6.0585 12.9702 6.13421 12.8641C6.20991 12.758 6.25055 12.6309 6.25043 12.5006V10.0068C9.61231 10.0768 11.2273 10.7149 12.0386 11.4087C12.8098 12.0681 12.9511 12.8437 13.0979 13.6562L13.1361 13.8656C13.1641 14.0154 13.2459 14.1498 13.3661 14.2435C13.4864 14.3372 13.6367 14.3837 13.7888 14.3744C13.9409 14.365 14.0844 14.3004 14.1922 14.1926C14.3 14.0849 14.3647 13.9414 14.3742 13.7893C14.4811 12.0718 14.3204 9.58306 13.1073 7.50118C11.9298 5.48056 9.80918 3.92681 6.25043 3.76431V1.25056Z"
                                                    />
                                                </svg>
                                                Бесплатная отмена до 13 августа
                                            </ServiceIcon>

                                            <ServiceIcon disabled marginBottom>
                                                <svg
                                                    viewBox="0 0 13 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12.5 8.25V13.5C12.5 13.8978 12.342 14.2794 12.0607 14.5607C11.7794 14.842 11.3978 15 11 15C10.6022 15 10.2206 14.842 9.93934 14.5607C9.65804 14.2794 9.5 13.8978 9.5 13.5V9.75H8V2.25C8 1.65326 8.23705 1.08097 8.65901 0.65901C9.08097 0.237053 9.65326 0 10.25 0L12.5 0V8.25ZM2 7.5C1.60218 7.5 1.22064 7.34196 0.93934 7.06066C0.658035 6.77936 0.5 6.39782 0.5 6V0.75C0.5 0.551088 0.579018 0.360322 0.71967 0.21967C0.860322 0.0790176 1.05109 0 1.25 0C1.44891 0 1.63968 0.0790176 1.78033 0.21967C1.92098 0.360322 2 0.551088 2 0.75V3.75H2.75V0.75C2.75 0.551088 2.82902 0.360322 2.96967 0.21967C3.11032 0.0790176 3.30109 0 3.5 0C3.69891 0 3.88968 0.0790176 4.03033 0.21967C4.17098 0.360322 4.25 0.551088 4.25 0.75V3.75H5V0.75C5 0.551088 5.07902 0.360322 5.21967 0.21967C5.36032 0.0790176 5.55109 0 5.75 0C5.94891 0 6.13968 0.0790176 6.28033 0.21967C6.42098 0.360322 6.5 0.551088 6.5 0.75V6C6.5 6.39782 6.34196 6.77936 6.06066 7.06066C5.77936 7.34196 5.39782 7.5 5 7.5V13.5C5 13.8978 4.84196 14.2794 4.56066 14.5607C4.27936 14.842 3.89782 15 3.5 15C3.10218 15 2.72064 14.842 2.43934 14.5607C2.15804 14.2794 2 13.8978 2 13.5V7.5Z" />
                                                </svg>
                                                Питание не включено
                                            </ServiceIcon>

                                            <ServiceIcon green>
                                                <svg
                                                    viewBox="0 0 13 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M1.14097 0.609974C1.10611 0.575108 1.06472 0.547451 1.01916 0.528581C0.973607 0.509712 0.924782 0.5 0.875474 0.5C0.826166 0.5 0.777341 0.509712 0.731786 0.528581C0.686232 0.547451 0.64484 0.575108 0.609974 0.609974C0.575108 0.64484 0.547451 0.686232 0.528581 0.731786C0.509712 0.777341 0.5 0.826166 0.5 0.875474C0.5 0.924782 0.509712 0.973607 0.528581 1.01916C0.547451 1.06472 0.575108 1.10611 0.609974 1.14097L1.47997 2.01022C1.20915 2.04555 0.960428 2.17818 0.7802 2.38339C0.599971 2.5886 0.500547 2.85236 0.500474 3.12547V8.37547C0.500474 8.67384 0.619 8.95999 0.829979 9.17097C1.04096 9.38195 1.32711 9.50047 1.62547 9.50047H8.97022L9.72022 10.2505H2.06422C2.14181 10.4699 2.28554 10.6599 2.47561 10.7942C2.66568 10.9285 2.89273 11.0006 3.12547 11.0005H9.87547C10.06 11.0005 10.2407 10.9817 10.4147 10.945L11.86 12.391C11.9304 12.4614 12.0259 12.5009 12.1255 12.5009C12.2251 12.5009 12.3206 12.4614 12.391 12.391C12.4614 12.3206 12.5009 12.2251 12.5009 12.1255C12.5009 12.0259 12.4614 11.9304 12.391 11.86L1.14097 0.609974ZM6.37522 6.90547C6.12655 7.04035 5.84095 7.09127 5.56098 7.05065C5.28101 7.01002 5.02166 6.88002 4.82158 6.68002C4.6215 6.48003 4.49139 6.22073 4.45064 5.94078C4.4099 5.66083 4.4607 5.37521 4.59547 5.12647L6.37447 6.90547H6.37522ZM3.42922 3.95947C3.33201 4.26194 3.14127 4.52572 2.88449 4.71281C2.62772 4.89989 2.31818 5.00062 2.00047 5.00047H1.25047V4.25047H2.00047C2.19939 4.25047 2.39015 4.17146 2.5308 4.0308C2.67146 3.89015 2.75047 3.69939 2.75047 3.50047V3.28072L3.42922 3.95947ZM1.25047 7.25047V6.50047H2.00047C2.3983 6.50047 2.77983 6.65851 3.06113 6.93981C3.34244 7.22112 3.50047 7.60265 3.50047 8.00047V8.75047H2.75047V8.00047C2.75047 7.80156 2.67146 7.6108 2.5308 7.47014C2.39015 7.32949 2.19939 7.25047 2.00047 7.25047H1.25047ZM6.06322 4.47547L7.02547 5.43772L8.48497 6.89647C8.76156 6.64136 9.1242 6.49995 9.50047 6.50047H10.2505V7.25047H9.50047C9.32299 7.25028 9.15123 7.3133 9.01597 7.42822L10.714 9.12547C10.8917 8.92672 11.0005 8.66347 11.0005 8.37547V3.12547C11.0005 2.82711 10.8819 2.54096 10.671 2.32998C10.46 2.119 10.1738 2.00047 9.87547 2.00047H3.58822L6.06322 4.47547ZM10.2505 4.25047V5.00047H9.50047C9.10265 5.00047 8.72112 4.84244 8.43981 4.56113C8.15851 4.27983 8.00047 3.8983 8.00047 3.50047V2.75047H8.75047V3.50047C8.75047 3.69939 8.82949 3.89015 8.97014 4.0308C9.1108 4.17146 9.30156 4.25047 9.50047 4.25047H10.2505ZM11.245 9.65647L11.7752 10.1875C12.2252 9.71572 12.5005 9.07747 12.5005 8.37547V4.62547C12.5006 4.39273 12.4285 4.16568 12.2942 3.97561C12.1599 3.78554 11.9699 3.6418 11.7505 3.56422V8.37547C11.7505 8.87047 11.5585 9.32122 11.245 9.65647Z" />
                                                </svg>
                                                Бронирование без предоплаты -
                                                оплата на месте
                                            </ServiceIcon>
                                        </div>
                                    </div>
                                </div>

                                <PaymentForm onSubmit={onSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Payment;
