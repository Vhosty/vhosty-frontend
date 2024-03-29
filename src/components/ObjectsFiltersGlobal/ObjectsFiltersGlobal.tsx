import React from "react";
import {
    useNavigate,
    createSearchParams,
    useSearchParams,
} from "react-router-dom";
import {useDispatch} from "react-redux";
import moment, {Moment} from "moment";
import {animateScroll as scroll} from "react-scroll";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {
    TitleIcon,
    Input,
    Calendar,
    ObjectsFiltersGlobalGuestRoom,
    Checkbox,
    Cities,
    Popup,
} from "../";

import {
    setObjectsFiltersGlobalCity,
    setObjectsFiltersGlobalGuestRoom,
    setObjectsFiltersGlobalDate,
    setObjectsFiltersGlobalFlexibleDate,
    setObjectsFiltersGlobalIsParse,
} from "../../redux/actions/objects/objects_filters_global";

import {
    fetchObjects,
    setObjectsPage,
} from "../../redux/actions/objects/objects";

import {fetchCities} from "../../redux/actions/cities";

const ObjectsFiltersGlobal: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query] = useSearchParams();

    const {isParse, city, guestRoom, date, flexibleDate} = useTypedSelector(
        ({objects_filters_global}) => objects_filters_global
    );
    const {page, firstIsLoaded} = useTypedSelector(({objects}) => objects);

    const [cityQuery, setCityQuery] = React.useState<string>("");
    const [guestRoomQuery, setGuestRoomQuery] = React.useState<any>(null);
    const [dateFromQuery, setDateFromQuery] = React.useState<string>("");
    const [dateToQuery, setDateToQuery] = React.useState<string>("");
    const [flexibleDateQuery, setFlexibleDateQuery] =
        React.useState<boolean>(false);
    const [pageQuery, setPageQuery] = React.useState<string>("");

    const [isInit, setIsInit] = React.useState<boolean>(false);

    const [isActiveCities, setIsActiveCities] = React.useState<boolean>(false);

    React.useEffect(() => {
        setCityQuery(String(query.get("city")));
        setGuestRoomQuery(JSON.parse(String(query.get("room"))));
        setDateFromQuery(String(query.get("from")));
        setDateToQuery(String(query.get("to")));
        setFlexibleDateQuery(
            String(query.get("flexibleDate")) === "true" ? true : false
        );
        setPageQuery(String(query.get("page")));

        setIsInit(true);
    }, [query]);

    React.useEffect(() => {
        if (isInit) {
            if (cityQuery !== "null")
                dispatch(setObjectsFiltersGlobalCity(cityQuery));

            if (guestRoomQuery !== null)
                dispatch(setObjectsFiltersGlobalGuestRoom(guestRoomQuery));

            if (dateFromQuery !== "null" && dateToQuery !== "null")
                dispatch(
                    setObjectsFiltersGlobalDate(dateFromQuery, dateToQuery)
                );

            if (pageQuery !== "null") {
                dispatch(setObjectsPage(parseInt(pageQuery)));
            } else {
                dispatch(setObjectsPage(1));
            }

            dispatch(setObjectsFiltersGlobalFlexibleDate(flexibleDateQuery));

            dispatch(setObjectsFiltersGlobalIsParse(true));
        }
    }, [isInit]);

    React.useEffect(() => {
        if (isParse) {
            let persons_count = 0;
            let children_count = 0;

            guestRoom.map((room) => {
                persons_count += room.adultsCount;
                children_count += room.kids.length;
            });

            dispatch(
                fetchObjects({
                    from: date.from,
                    to: date.to,
                    city,
                    room_count: guestRoom.length,
                    persons_count,
                    children_count,
                    soft_dates: flexibleDate,
                    page,
                    isFirst: !firstIsLoaded,
                }) as any
            );
        }
    }, [
        isParse,
        cityQuery,
        guestRoomQuery,
        dateFromQuery,
        dateToQuery,
        flexibleDateQuery,
        pageQuery,
    ]);

    React.useEffect(() => {
        if (isParse && window.location.pathname === "/objects") {
            sendSearchObjects();
        }
    }, [page]);

    const onChangeCity = (city: string) => {
        dispatch(fetchCities(city) as any);

        setIsActiveCities(true);

        dispatch(setObjectsFiltersGlobalCity(city));
    };

    const onChangeCalendary = (from: Moment, to: Moment) => {
        dispatch(
            setObjectsFiltersGlobalDate(
                moment(from).format("YYYY-MM-DD"),
                moment(to).format("YYYY-MM-DD")
            )
        );
    };

    const onChangeFlexibleDate = (status: boolean) => {
        dispatch(setObjectsFiltersGlobalFlexibleDate(status));
    };

    const sendSearchObjects = () => {
        if (date.from !== "" && date.to !== "" && city !== "") {
            if (window.location.pathname === "/objects") {
                scroll.scrollTo(100, {duration: 400});
            }

            navigate({
                pathname: "/objects",
                search: `?${createSearchParams({
                    city,
                    room: JSON.stringify(guestRoom),
                    from: date.from,
                    to: date.to,
                    flexibleDate: String(flexibleDate),
                    page: String(page),
                })}`,
            });
        }
    };

    return (
        <div className="filters-object-form">
            <div className="filters-object-form-block-row">
                <div className="filters-object-form-block left">
                    <TitleIcon title="Город путешествия" marginBottom>
                        <svg
                            width="14"
                            height="18"
                            viewBox="0 0 14 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 0.25C3.54961 0.25 0.75 2.76992 0.75 5.875C0.75 10.875 7 17.75 7 17.75C7 17.75 13.25 10.875 13.25 5.875C13.25 2.76992 10.4504 0.25 7 0.25ZM7 9C6.50555 9 6.0222 8.85338 5.61107 8.57867C5.19995 8.30397 4.87952 7.91352 4.6903 7.45671C4.50108 6.99989 4.45157 6.49723 4.54804 6.01227C4.6445 5.52732 4.8826 5.08186 5.23223 4.73223C5.58186 4.3826 6.02732 4.1445 6.51227 4.04804C6.99723 3.95157 7.49989 4.00108 7.95671 4.1903C8.41352 4.37952 8.80397 4.69995 9.07867 5.11107C9.35338 5.5222 9.5 6.00555 9.5 6.5C9.49928 7.16282 9.23565 7.79828 8.76697 8.26697C8.29828 8.73565 7.66282 8.99928 7 9Z"
                                fill="#00A0A0"
                            />
                        </svg>
                    </TitleIcon>

                    <Input
                        label="Например, Москва"
                        small
                        type="text"
                        value={city}
                        onChange={onChangeCity}
                    />

                    <Popup
                        wrapperActive={isActiveCities}
                        setWrapperActive={setIsActiveCities}
                    >
                        <Cities
                            onChange={(city: string) => {
                                dispatch(setObjectsFiltersGlobalCity(city));
                                setIsActiveCities(false);
                            }}
                        />
                    </Popup>
                </div>
                <div className="filters-object-form-block middle">
                    <TitleIcon title="Дата" marginBottom>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.75 3.99994C17.75 3.3369 17.4866 2.70102 17.0178 2.23218C16.5489 1.76333 15.913 1.49994 15.25 1.49994H14.625V0.892521C14.625 0.556193 14.3664 0.267521 14.0301 0.250724C13.9456 0.246653 13.8611 0.259781 13.7818 0.289312C13.7026 0.318844 13.6301 0.364165 13.5688 0.422529C13.5076 0.480893 13.4588 0.551085 13.4255 0.628851C13.3922 0.706617 13.375 0.790339 13.375 0.874943V1.49994H4.625V0.892521C4.625 0.556193 4.36641 0.267521 4.03008 0.250724C3.94557 0.246653 3.86112 0.259781 3.78184 0.289312C3.70255 0.318844 3.63009 0.364165 3.56884 0.422529C3.50759 0.480893 3.45883 0.551085 3.42551 0.628851C3.39219 0.706617 3.37501 0.790339 3.375 0.874943V1.49994H2.75C2.08696 1.49994 1.45107 1.76333 0.982233 2.23218C0.513392 2.70102 0.25 3.3369 0.25 3.99994V4.46869C0.25 4.51013 0.266462 4.54988 0.295765 4.57918C0.325067 4.60848 0.36481 4.62494 0.40625 4.62494H17.5938C17.6352 4.62494 17.6749 4.60848 17.7042 4.57918C17.7335 4.54988 17.75 4.51013 17.75 4.46869V3.99994ZM0.25 15.2499C0.25 15.913 0.513392 16.5489 0.982233 17.0177C1.45107 17.4865 2.08696 17.7499 2.75 17.7499H15.25C15.913 17.7499 16.5489 17.4865 17.0178 17.0177C17.4866 16.5489 17.75 15.913 17.75 15.2499V5.99213C17.75 5.96105 17.7377 5.93124 17.7157 5.90927C17.6937 5.88729 17.6639 5.87494 17.6328 5.87494H0.367188C0.336107 5.87494 0.3063 5.88729 0.284323 5.90927C0.262347 5.93124 0.25 5.96105 0.25 5.99213V15.2499ZM13.6875 7.12494C13.8729 7.12494 14.0542 7.17993 14.2083 7.28294C14.3625 7.38595 14.4827 7.53237 14.5536 7.70368C14.6246 7.87498 14.6432 8.06348 14.607 8.24534C14.5708 8.4272 14.4815 8.59424 14.3504 8.72536C14.2193 8.85647 14.0523 8.94576 13.8704 8.98193C13.6885 9.0181 13.5 8.99954 13.3287 8.92858C13.1574 8.85762 13.011 8.73746 12.908 8.58329C12.805 8.42912 12.75 8.24786 12.75 8.06244C12.75 7.8138 12.8488 7.57535 13.0246 7.39953C13.2004 7.22371 13.4389 7.12494 13.6875 7.12494ZM13.6875 10.2499C13.8729 10.2499 14.0542 10.3049 14.2083 10.4079C14.3625 10.511 14.4827 10.6574 14.5536 10.8287C14.6246 11 14.6432 11.1885 14.607 11.3703C14.5708 11.5522 14.4815 11.7192 14.3504 11.8504C14.2193 11.9815 14.0523 12.0708 13.8704 12.1069C13.6885 12.1431 13.5 12.1245 13.3287 12.0536C13.1574 11.9826 13.011 11.8625 12.908 11.7083C12.805 11.5541 12.75 11.3729 12.75 11.1874C12.75 10.9388 12.8488 10.7003 13.0246 10.5245C13.2004 10.3487 13.4389 10.2499 13.6875 10.2499ZM10.5625 7.12494C10.7479 7.12494 10.9292 7.17993 11.0833 7.28294C11.2375 7.38595 11.3577 7.53237 11.4286 7.70368C11.4996 7.87498 11.5182 8.06348 11.482 8.24534C11.4458 8.4272 11.3565 8.59424 11.2254 8.72536C11.0943 8.85647 10.9273 8.94576 10.7454 8.98193C10.5635 9.0181 10.375 8.99954 10.2037 8.92858C10.0324 8.85762 9.88601 8.73746 9.783 8.58329C9.67998 8.42912 9.625 8.24786 9.625 8.06244C9.625 7.8138 9.72377 7.57535 9.89959 7.39953C10.0754 7.22371 10.3139 7.12494 10.5625 7.12494ZM10.5625 10.2499C10.7479 10.2499 10.9292 10.3049 11.0833 10.4079C11.2375 10.511 11.3577 10.6574 11.4286 10.8287C11.4996 11 11.5182 11.1885 11.482 11.3703C11.4458 11.5522 11.3565 11.7192 11.2254 11.8504C11.0943 11.9815 10.9273 12.0708 10.7454 12.1069C10.5635 12.1431 10.375 12.1245 10.2037 12.0536C10.0324 11.9826 9.88601 11.8625 9.783 11.7083C9.67998 11.5541 9.625 11.3729 9.625 11.1874C9.625 10.9388 9.72377 10.7003 9.89959 10.5245C10.0754 10.3487 10.3139 10.2499 10.5625 10.2499ZM10.5625 13.3749C10.7479 13.3749 10.9292 13.4299 11.0833 13.5329C11.2375 13.636 11.3577 13.7824 11.4286 13.9537C11.4996 14.125 11.5182 14.3135 11.482 14.4953C11.4458 14.6772 11.3565 14.8442 11.2254 14.9754C11.0943 15.1065 10.9273 15.1958 10.7454 15.2319C10.5635 15.2681 10.375 15.2495 10.2037 15.1786C10.0324 15.1076 9.88601 14.9875 9.783 14.8333C9.67998 14.6791 9.625 14.4979 9.625 14.3124C9.625 14.0638 9.72377 13.8253 9.89959 13.6495C10.0754 13.4737 10.3139 13.3749 10.5625 13.3749ZM7.4375 10.2499C7.62292 10.2499 7.80418 10.3049 7.95835 10.4079C8.11252 10.511 8.23268 10.6574 8.30364 10.8287C8.37459 11 8.39316 11.1885 8.35699 11.3703C8.32081 11.5522 8.23152 11.7192 8.10041 11.8504C7.9693 11.9815 7.80225 12.0708 7.6204 12.1069C7.43854 12.1431 7.25004 12.1245 7.07873 12.0536C6.90743 11.9826 6.76101 11.8625 6.658 11.7083C6.55498 11.5541 6.5 11.3729 6.5 11.1874C6.5 10.9388 6.59877 10.7003 6.77459 10.5245C6.9504 10.3487 7.18886 10.2499 7.4375 10.2499ZM7.4375 13.3749C7.62292 13.3749 7.80418 13.4299 7.95835 13.5329C8.11252 13.636 8.23268 13.7824 8.30364 13.9537C8.37459 14.125 8.39316 14.3135 8.35699 14.4953C8.32081 14.6772 8.23152 14.8442 8.10041 14.9754C7.9693 15.1065 7.80225 15.1958 7.6204 15.2319C7.43854 15.2681 7.25004 15.2495 7.07873 15.1786C6.90743 15.1076 6.76101 14.9875 6.658 14.8333C6.55498 14.6791 6.5 14.4979 6.5 14.3124C6.5 14.0638 6.59877 13.8253 6.77459 13.6495C6.9504 13.4737 7.18886 13.3749 7.4375 13.3749ZM4.3125 10.2499C4.49792 10.2499 4.67918 10.3049 4.83335 10.4079C4.98752 10.511 5.10768 10.6574 5.17864 10.8287C5.24959 11 5.26816 11.1885 5.23199 11.3703C5.19581 11.5522 5.10652 11.7192 4.97541 11.8504C4.8443 11.9815 4.67725 12.0708 4.4954 12.1069C4.31354 12.1431 4.12504 12.1245 3.95373 12.0536C3.78243 11.9826 3.63601 11.8625 3.533 11.7083C3.42998 11.5541 3.375 11.3729 3.375 11.1874C3.375 10.9388 3.47377 10.7003 3.64959 10.5245C3.8254 10.3487 4.06386 10.2499 4.3125 10.2499ZM4.3125 13.3749C4.49792 13.3749 4.67918 13.4299 4.83335 13.5329C4.98752 13.636 5.10768 13.7824 5.17864 13.9537C5.24959 14.125 5.26816 14.3135 5.23199 14.4953C5.19581 14.6772 5.10652 14.8442 4.97541 14.9754C4.8443 15.1065 4.67725 15.1958 4.4954 15.2319C4.31354 15.2681 4.12504 15.2495 3.95373 15.1786C3.78243 15.1076 3.63601 14.9875 3.533 14.8333C3.42998 14.6791 3.375 14.4979 3.375 14.3124C3.375 14.0638 3.47377 13.8253 3.64959 13.6495C3.8254 13.4737 4.06386 13.3749 4.3125 13.3749Z"
                                fill="#00A0A0"
                            />
                        </svg>
                    </TitleIcon>

                    <Calendar
                        onChange={onChangeCalendary}
                        initialState={{from: date.from, to: date.to}}
                    />
                </div>
                <div className="filters-object-form-block right">
                    <button
                        className="btn small filters-object-form-block__btn"
                        onClick={sendSearchObjects}
                    >
                        Искать
                    </button>
                </div>
            </div>

            <div className="filters-object-form-block-row mt">
                <div className="filters-object-form-block left filters-object-form-block-guest-room">
                    <ObjectsFiltersGlobalGuestRoom />
                </div>

                <div className="filters-object-form-block middle filters-object-form-block-checkbox">
                    <Checkbox
                        questionMessage="Поиск будет осуществляться с учетом 3-х дат до и 3-х дат после указанных"
                        onChange={onChangeFlexibleDate}
                        checked={flexibleDate}
                    >
                        У меня гибкая дата
                    </Checkbox>
                </div>

                <div className="filters-object-form-block right"></div>
            </div>

            <div className="filters-object-form-block-btn-media-wrapper">
                <button
                    className="btn small filters-object-form-block-btn-media__btn"
                    onClick={sendSearchObjects}
                >
                    Искать
                </button>
            </div>
        </div>
    );
};

export default ObjectsFiltersGlobal;
