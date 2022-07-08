import React from "react";
import {useDispatch} from "react-redux";
import {Route, Routes, useLocation} from "react-router-dom";
import rn from "random-number";

import "moment/locale/ru";

import {Footer, Header} from "./components/";

import {Reglog, Home, Objects, ObjectPage, Payment, Cabinet} from "./pages";

import {fetchUserAboutMe} from "./redux/actions/user";

const App = () => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    React.useEffect(() => {
        let cords: any = ["scrollX", "scrollY"];

        window.addEventListener("unload", (e) =>
            cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
        );
        window.scroll(...cords.map((cord: any) => localStorage[cord]));

        if (localStorage.getItem("accessToken")) {
            dispatch(fetchUserAboutMe() as any);
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
                {pathname === "/" ||
                pathname.indexOf("/cabinet") !== -1 ? null : (
                    <Header />
                )}

                <Reglog />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/objects" element={<Objects />} />
                    <Route path="/objects/:id" element={<ObjectPage />} />

                    <Route path="/payment" element={<Payment />} />

                    <Route path="/cabinet/:section" element={<Cabinet />} />
                </Routes>

                <Footer />
            </React.Suspense>
        </>
    );
};

export default App;
