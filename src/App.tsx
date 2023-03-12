import React from "react";
import {useDispatch} from "react-redux";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import rn from "random-number";

import "moment/locale/ru";

import {Footer, Header} from "./components/";

import {
    Reglog,
    Home,
    Objects,
    ObjectPage,
    Payment,
    Cabinet,
    Confirmed,
    NotFound,
} from "./pages";

import {fetchUserAboutMe, setUserIsPending} from "./redux/actions/user/user";

const App = () => {
    const dispatch = useDispatch();

    const {pathname} = useLocation();

    const isRedirectUser = localStorage.getItem("accessToken");

    React.useEffect(() => {
        let cords: any = ["scrollX", "scrollY"];

        window.addEventListener("unload", (e) =>
            cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
        );
        window.scroll(...cords.map((cord: any) => localStorage[cord]));

        if (localStorage.getItem("accessToken")) {
            dispatch(fetchUserAboutMe() as any);
        } else {
            dispatch(setUserIsPending(false));
        }

        const userNumber: string = `${Math.floor(
            rn({min: 100, max: 999})
        )}-${Math.floor(rn({min: 100, max: 999}))}`;

        if (!localStorage.getItem("userNumber")) {
            localStorage.setItem("userNumber", userNumber);
        }
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <React.Suspense fallback={<></>}>
                {pathname.indexOf("/objects") !== -1 ||
                pathname.indexOf("/payment") !== -1 ? (
                    <Header />
                ) : null}

                <Reglog />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/objects" element={<Objects />} />
                    <Route path="/objects/:id" element={<ObjectPage />} />

                    <Route
                        path="/payment/:id/:categoryId"
                        element={<Payment />}
                    />

                    <Route
                        path="/confirmed/:hash"
                        element={
                            isRedirectUser ? <Confirmed /> : <Navigate to="/" />
                        }
                    />

                    <Route
                        path="/cabinet/:section"
                        element={
                            isRedirectUser ? <Cabinet /> : <Navigate to="/" />
                        }
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                {pathname.indexOf("/confirmed") !== -1 ? null : <Footer />}
            </React.Suspense>
        </>
    );
};

export default App;
