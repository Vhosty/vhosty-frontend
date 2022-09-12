import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import moment from "moment";

import {useParams, useSearchParams} from "react-router-dom";

import {
    PaymentProgressbar,
    PaymentForm,
    PaymentRoom,
    Stars,
    Location,
    TitleIcon,
    Input,
    ServiceIcon,
} from "../components/";

import {
    fetchObjectPageItemById,
    fetchObjectPageItemByIdTerms,
    fetchObjectPageRoomItemById,
} from "../redux/actions/object_page";
import {sendBooking} from "../redux/actions/booking";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {checkDeclension} from "../functions/checkDeclension";

const Payment: React.FC = () => {
    const {id, categoryId} = useParams();
    const [query] = useSearchParams();

    const {
        itemById,
        isLoaded,
        itemByIdTerms,
        isLoadedTerms,
        itemRoomById,
        isLoadedRoomItemById,
    } = useTypedSelector(({object_page}) => object_page);

    const dispatch = useDispatch();

    React.useEffect(() => {
        const date: any = {
            checkin_date: query.get("from"),
            checkout_date: query.get("to"),
        };

        dispatch(fetchObjectPageItemById(id ? id : "") as any);
        dispatch(fetchObjectPageItemByIdTerms(id ? id : "") as any);
        dispatch(
            fetchObjectPageRoomItemById(
                categoryId ? categoryId : "",
                date
            ) as any
        );
    }, [id]);

    const onSubmit = (data: any) => {
        dispatch(
            sendBooking(
                {
                    email: data.email,
                    first_name: data.name,
                    last_name: data.surname,
                    residency: data.country,
                    checkin_date: query.get("from"),
                    checkout_date: query.get("to"),
                    room_count: 1,
                    comment: data.message,
                    phone: data.phone,
                    adults: 1,
                    children: 0,
                },
                categoryId ? categoryId : ""
            ) as any
        );
    };

    return (
        <>
            <Helmet>
                <title>Bookover | Оформление заказа</title>
            </Helmet>

            {isLoaded && isLoadedRoomItemById && isLoadedTerms ? (
                <section className="payment">
                    <div className="container">
                        <div className="payment-wrapper">
                            <div className="payment-title payment-block">
                                <PaymentProgressbar currentNumber={2} />

                                <div className="payment-title-room">
                                    <div className="payment-title-room-text">
                                        <div className="payment-title-room-text-stars">
                                            <Stars count={itemById.stars} />
                                        </div>

                                        <h2 className="payment-title-room-text__title">
                                            {itemById.name}
                                        </h2>

                                        <Location
                                            title={itemById.address}
                                            subtitle="10,9 км от центра"
                                        />
                                    </div>

                                    <div className="payment-title-room-feedbacks">
                                        <h3 className="payment-title-room-feedbacks__title">
                                            5,7
                                        </h3>
                                        <div className="payment-title-room-feedbacks-block">
                                            <p className="payment-title-room-feedbacks-block__subtitle">
                                                нормально
                                            </p>
                                            <p className="payment-title-room-feedbacks-block__subtitle">
                                                3 485 отзывов
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="payment-info">
                                <PaymentRoom {...itemRoomById} media />

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
                                                        {moment(
                                                            query.get("from"),
                                                            "YYYY-MM-DD"
                                                        ).format(
                                                            "dd, DD MMMM YYYY"
                                                        )}
                                                    </p>
                                                    <p className="payment-info-smeta-from-to-block-text__subtitle">
                                                        С{" "}
                                                        {
                                                            itemByIdTerms.checkin_time.split(
                                                                ":"
                                                            )[0]
                                                        }
                                                        :
                                                        {
                                                            itemByIdTerms.checkin_time.split(
                                                                ":"
                                                            )[1]
                                                        }{" "}
                                                        по местному
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
                                                        {moment(
                                                            query.get("to"),
                                                            "YYYY-MM-DD"
                                                        ).format(
                                                            "dd, DD MMMM YYYY"
                                                        )}
                                                    </p>
                                                    <p className="payment-info-smeta-from-to-block-text__subtitle">
                                                        С{" "}
                                                        {
                                                            itemByIdTerms.checkout_time.split(
                                                                ":"
                                                            )[0]
                                                        }
                                                        :
                                                        {
                                                            itemByIdTerms.checkout_time.split(
                                                                ":"
                                                            )[1]
                                                        }{" "}
                                                        по местному
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="payment-info-smeta-from-to-length">
                                                <TitleIcon title="Длительность проживания">
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

                                                <p className="payment-info-smeta-from-to-length__title">
                                                    {itemRoomById.overnights_count ===
                                                    1 ? (
                                                        "1 день"
                                                    ) : (
                                                        <>
                                                            {
                                                                checkDeclension(
                                                                    itemRoomById.overnights_count -
                                                                        1,
                                                                    [
                                                                        "день",
                                                                        "дня",
                                                                        "дней",
                                                                    ]
                                                                ).title
                                                            }
                                                            ,{" "}
                                                            {
                                                                checkDeclension(
                                                                    itemRoomById.overnights_count,
                                                                    [
                                                                        "ночь",
                                                                        "ночи",
                                                                        "ночей",
                                                                    ]
                                                                ).title
                                                            }
                                                        </>
                                                    )}
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
                                                        {
                                                            itemRoomById.room_category_name
                                                        }
                                                    </p>
                                                    <p className="payment-info-smeta-price-item__count">
                                                        {itemRoomById.price} ₽
                                                    </p>
                                                </div>
                                                {/* <div className="payment-info-smeta-price-item">
                                                    <p className="payment-info-smeta-price-item__title">
                                                        НДС в размере 7%
                                                    </p>
                                                    <p className="payment-info-smeta-price-item__count">
                                                        5 000 ₽
                                                    </p>
                                                </div>
                                                <div className="payment-info-smeta-price-item green">
                                                    <p className="payment-info-smeta-price-item__title">
                                                        BOOKOVER радует
                                                    </p>
                                                    <p className="payment-info-smeta-price-item__count">
                                                        - 10 000 ₽
                                                    </p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="payment-info-smeta-total-price">
                                        <p className="payment-info-smeta-total-price__subtitle">
                                            ИТОГО
                                        </p>
                                        <p className="payment-info-smeta-total-price__title">
                                            {itemRoomById.price} ₽
                                        </p>
                                        {/* <p className="payment-info-smeta-total-price__description">
                                            За всех гостей (4 гостя + ребенок 13
                                            лет)
                                        </p> */}
                                    </div>

                                    {/* <div className="payment-block-padding">
                                        <div className="payment-info-smeta-block payment-info-smeta-cancel-booking">
                                            <h3 className="payment-info-smeta__title">
                                                Отмена бронирования
                                            </h3>
                                            <div className="payment-info-smeta-cancel-booking-items">
                                                <div className="payment-info-smeta-cancel-booking-item green">
                                                    <p className="payment-info-smeta-cancel-booking__title">
                                                        Бесплатная отмена до
                                                        23:59 10 июня
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
                                    </div> */}
                                </div>
                                <div className="payment-info-room-and-contact">
                                    <PaymentRoom {...itemRoomById} />

                                    <PaymentForm onSubmit={onSubmit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default Payment;
