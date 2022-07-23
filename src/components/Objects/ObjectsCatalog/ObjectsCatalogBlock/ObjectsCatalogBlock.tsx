import React from "react";
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";

import {checkDeclension} from "../../../../functions/checkDeclension";

import {Stars, ServiceIcon} from "../../../";

import {IObjectBlock} from "../../../../models/IObjectBlock";

interface ObjectsCatalogBlockProps extends IObjectBlock {
    blockIndex: string;
}

const ObjectsCatalogBlock: React.FC<ObjectsCatalogBlockProps> = ({
    blockIndex,
    images,
    hotel_name,
    short_address,
    rating,
    rating_text,
    reviews_count,
    room_category_name,
    options,
    bed_type,
    daily_price,
    price,
    overnights_count,
}) => {
    const [currentIndexImageCover, setCurrentIndexImageCover] =
        React.useState<number>(0);

    const center_distance = options.filter(
        (item) => item.type === "center_distance"
    )[0].value;

    return (
        <div className="objects-catalog-block">
            <div className="objects-catalog-block-cover-wrapper">
                <div
                    className="objects-catalog-block-cover"
                    style={{
                        backgroundImage: `url('${images[currentIndexImageCover]}')`,
                    }}
                ></div>

                <div className="objects-catalog-block-cover-plaecholder">
                    <div className="objects-catalog-block-cover-plaecholder-cols-wrapper">
                        {images.map((_, index) => (
                            <div
                                style={{width: `${100 / images.length}%`}}
                                className="objects-catalog-block-cover-plaecholder-col"
                                key={`objects-catalog-block-cover-plaecholder-col-${blockIndex}-${index}`}
                                onMouseOver={() =>
                                    setCurrentIndexImageCover(index)
                                }
                            ></div>
                        ))}
                    </div>

                    <div className="objects-catalog-block-cover-plaecholder-icons">
                        <div className="objects-catalog-block-cover-plaecholder-icons-resize">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.41667 2.5C4.64312 2.5 3.90125 2.80729 3.35427 3.35427C2.80729 3.90125 2.5 4.64312 2.5 5.41667V7.91667C2.5 8.24819 2.3683 8.56613 2.13388 8.80055C1.89946 9.03497 1.58152 9.16667 1.25 9.16667C0.918479 9.16667 0.600537 9.03497 0.366116 8.80055C0.131696 8.56613 0 8.24819 0 7.91667V5.41667C0 3.98008 0.570683 2.60233 1.5865 1.5865C2.60233 0.570683 3.98008 0 5.41667 0H7.91667C8.24819 0 8.56613 0.131696 8.80055 0.366116C9.03497 0.600537 9.16667 0.918479 9.16667 1.25C9.16667 1.58152 9.03497 1.89946 8.80055 2.13388C8.56613 2.3683 8.24819 2.5 7.91667 2.5H5.41667ZM27.5 5.41667C27.5 4.64312 27.1927 3.90125 26.6457 3.35427C26.0987 2.80729 25.3569 2.5 24.5833 2.5H22.0833C21.7518 2.5 21.4339 2.3683 21.1994 2.13388C20.965 1.89946 20.8333 1.58152 20.8333 1.25C20.8333 0.918479 20.965 0.600537 21.1994 0.366116C21.4339 0.131696 21.7518 0 22.0833 0H24.5833C26.0199 0 27.3977 0.570683 28.4135 1.5865C29.4293 2.60233 30 3.98008 30 5.41667V7.91667C30 8.24819 29.8683 8.56613 29.6339 8.80055C29.3995 9.03497 29.0815 9.16667 28.75 9.16667C28.4185 9.16667 28.1005 9.03497 27.8661 8.80055C27.6317 8.56613 27.5 8.24819 27.5 7.91667V5.41667ZM27.5 24.5833C27.5 25.3569 27.1927 26.0987 26.6457 26.6457C26.0987 27.1927 25.3569 27.5 24.5833 27.5H22.0833C21.7518 27.5 21.4339 27.6317 21.1994 27.8661C20.965 28.1005 20.8333 28.4185 20.8333 28.75C20.8333 29.0815 20.965 29.3995 21.1994 29.6339C21.4339 29.8683 21.7518 30 22.0833 30H24.5833C26.0199 30 27.3977 29.4293 28.4135 28.4135C29.4293 27.3977 30 26.0199 30 24.5833V22.0833C30 21.7518 29.8683 21.4339 29.6339 21.1994C29.3995 20.965 29.0815 20.8333 28.75 20.8333C28.4185 20.8333 28.1005 20.965 27.8661 21.1994C27.6317 21.4339 27.5 21.7518 27.5 22.0833V24.5833ZM2.5 24.5833C2.5 26.1933 3.80667 27.5 5.41667 27.5H7.91667C8.24819 27.5 8.56613 27.6317 8.80055 27.8661C9.03497 28.1005 9.16667 28.4185 9.16667 28.75C9.16667 29.0815 9.03497 29.3995 8.80055 29.6339C8.56613 29.8683 8.24819 30 7.91667 30H5.41667C3.98008 30 2.60233 29.4293 1.5865 28.4135C0.570683 27.3977 0 26.0199 0 24.5833V22.0833C0 21.7518 0.131696 21.4339 0.366116 21.1994C0.600537 20.965 0.918479 20.8333 1.25 20.8333C1.58152 20.8333 1.89946 20.965 2.13388 21.1994C2.3683 21.4339 2.5 21.7518 2.5 22.0833V24.5833ZM8.75 5C7.75544 5 6.80161 5.39509 6.09835 6.09835C5.39509 6.80161 5 7.75544 5 8.75V21.25C5 22.2446 5.39509 23.1984 6.09835 23.9016C6.80161 24.6049 7.75544 25 8.75 25H21.25C22.2446 25 23.1984 24.6049 23.9016 23.9016C24.6049 23.1984 25 22.2446 25 21.25V8.75C25 7.75544 24.6049 6.80161 23.9016 6.09835C23.1984 5.39509 22.2446 5 21.25 5H8.75ZM7.5 8.75C7.5 8.41848 7.6317 8.10054 7.86612 7.86612C8.10054 7.6317 8.41848 7.5 8.75 7.5H21.25C21.5815 7.5 21.8995 7.6317 22.1339 7.86612C22.3683 8.10054 22.5 8.41848 22.5 8.75V21.25C22.5 21.5815 22.3683 21.8995 22.1339 22.1339C21.8995 22.3683 21.5815 22.5 21.25 22.5H8.75C8.41848 22.5 8.10054 22.3683 7.86612 22.1339C7.6317 21.8995 7.5 21.5815 7.5 21.25V8.75Z"
                                    fill="white"
                                />
                            </svg>
                        </div>

                        <div className="objects-catalog-block-cover-plaecholder-icons-favorites">
                            <svg
                                width="34"
                                height="34"
                                viewBox="0 0 34 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17 0.75C8.03984 0.75 0.75 8.03984 0.75 17C0.75 25.9602 8.03984 33.25 17 33.25C25.9602 33.25 33.25 25.9602 33.25 17C33.25 8.03984 25.9602 0.75 17 0.75ZM22.8352 20.5016C22.1023 21.3953 20.7727 22.8242 17.7023 24.9086C17.4953 25.0504 17.2502 25.1262 16.9992 25.1262C16.7483 25.1262 16.5032 25.0504 16.2961 24.9086C13.2258 22.8242 11.8961 21.393 11.1633 20.5016C9.60078 18.5977 8.85234 16.6422 8.87422 14.525C8.89844 12.0984 10.8445 10.1242 13.2125 10.1242C14.8063 10.1242 15.9469 10.9547 16.6578 11.7188C16.7016 11.7651 16.7544 11.802 16.813 11.8272C16.8716 11.8525 16.9347 11.8655 16.9984 11.8655C17.0622 11.8655 17.1253 11.8525 17.1839 11.8272C17.2424 11.802 17.2953 11.7651 17.3391 11.7188C18.0508 10.9547 19.1906 10.1242 20.7844 10.1242C23.1523 10.1242 25.0984 12.0984 25.1227 14.525C25.1461 16.6422 24.3969 18.5977 22.8352 20.5016Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="objects-catalog-block-cover-plaecholder-dots">
                        {images.map((_, index) => (
                            <div
                                className={`objects-catalog-block-cover-plaecholder-dots-item ${
                                    currentIndexImageCover === index ? "active" : ""
                                }`}
                                key={`${blockIndex}-objects-catalog-block-cover-plaecholder-dots-item-${index}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="objects-catalog-block-text">
                <div className="objects-catalog-block-text-block left">
                    <div className="objects-catalog-block-text-block-subblock">
                        <div className="objects-catalog-block-text-block-subblock-stars">
                            <Stars count={5} />
                        </div>
                        <h3 className="objects-catalog-block-text-block-subblock__title">
                            <Link to="/">{hotel_name}</Link>
                        </h3>
                        <div className="objects-catalog-block-text-block-subblock-location">
                            <p className="objects-catalog-block-text-block-subblock-location__title">
                                {short_address}
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.500083 6.11539C0.498016 6.24208 0.534506 6.36641 0.604715 6.47189C0.674923 6.57737 0.775535 6.65902 0.893208 6.70602L6.89383 9.10664L9.29446 15.1079C9.34083 15.224 9.42094 15.3235 9.52445 15.3935C9.62795 15.4636 9.75009 15.5011 9.87508 15.501H9.88508C10.0117 15.499 10.1347 15.4586 10.2378 15.3852C10.3409 15.3118 10.4193 15.2087 10.4626 15.0898L15.4626 1.33977C15.5035 1.22791 15.5116 1.10668 15.486 0.990366C15.4603 0.87405 15.4019 0.767489 15.3178 0.683231C15.2336 0.598973 15.127 0.540528 15.0108 0.514779C14.8945 0.489029 14.7732 0.497048 14.6613 0.537891L0.911333 5.53789C0.792312 5.58129 0.689269 5.65979 0.615835 5.76302C0.542402 5.86625 0.502038 5.98935 0.500083 6.11602V6.11539Z"
                                        fill="#116E67"
                                    />
                                </svg>
                            </p>
                            <p className="objects-catalog-block-text-block-subblock-location__subtitle">
                                {center_distance} км от центра
                            </p>
                        </div>
                    </div>
                    <div className="objects-catalog-block-text-block-subblock">
                        <div className="objects-catalog-block-text-block-subblock-info-room">
                            <p className="objects-catalog-block-text-block-subblock-info-room__title">
                                {room_category_name}
                            </p>
                            <p className="objects-catalog-block-text-block-subblock-info-room__subtitle">
                                {/* 2 двухместные кровати */}
                                {bed_type}
                            </p>
                        </div>
                    </div>

                    <div className="objects-catalog-block-text-block-subblock">
                        <div className="objects-catalog-block-text-block-subblock-filters">
                            <ServiceIcon green marginBottom>
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
                                Бесплатная отмена
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
                                Бронирование без предоплаты
                            </ServiceIcon>
                        </div>
                    </div>
                </div>

                <div className="objects-catalog-block-text-block right">
                    <div className="objects-catalog-block-text-block-subblock">
                        <div className="objects-catalog-block-text-block-subblock-feedbacks">
                            <h3 className="objects-catalog-block-text-block-subblock-feedbacks__title">
                                {rating}
                            </h3>
                            <p className="objects-catalog-block-text-block-subblock-feedbacks__subtitle">
                                {rating_text}
                            </p>
                            <p className="objects-catalog-block-text-block-subblock-feedbacks__subtitle">
                                {
                                    checkDeclension(reviews_count, [
                                        "отзыв",
                                        "отзыва",
                                        "отзывов",
                                    ]).title
                                }
                            </p>
                        </div>
                    </div>

                    <div className="objects-catalog-block-text-block-subblock">
                        <div className="objects-catalog-block-text-block-subblock-price">
                            <h3 className="objects-catalog-block-text-block-subblock-price__title">
                                <NumberFormat
                                    value={price}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(formattedValue: string) => (
                                        <>
                                            {parseInt(
                                                formattedValue
                                                    .split(" ")
                                                    .join("")
                                            ) >= 10000
                                                ? formattedValue
                                                : parseInt(
                                                      formattedValue
                                                          .split(" ")
                                                          .join("")
                                                  )}
                                        </>
                                    )}
                                />{" "}
                                <span>₽</span>
                            </h3>
                            <p className="objects-catalog-block-text-block-subblock-price__subtitle">
                                {
                                    checkDeclension(overnights_count, [
                                        "сутки",
                                        "суток",
                                        "суток",
                                    ]).title
                                }{" "}
                                (
                                <NumberFormat
                                    value={daily_price}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(formattedValue: string) => (
                                        <>
                                            {parseInt(
                                                formattedValue
                                                    .split(" ")
                                                    .join("")
                                            ) >= 10000
                                                ? formattedValue
                                                : parseInt(
                                                      formattedValue
                                                          .split(" ")
                                                          .join("")
                                                  )}
                                        </>
                                    )}
                                />{" "}
                                ₽ / ночь)
                            </p>
                        </div>
                    </div>

                    <div className="objects-catalog-block-text-block-subblock">
                        <Link
                            to="/"
                            className="btn border objects-catalog-block-text-block-subblock__btn"
                        >
                            Показать все номера
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ObjectsCatalogBlock;
