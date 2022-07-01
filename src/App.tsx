import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import "moment/locale/ru";

import {Footer, Header} from "./components/";

import {Reglog, Home, Objects, ObjectPage, Payment, Cabinet} from "./pages";

const App = () => {
    const location = useLocation();

    return (
        <>
            <React.Suspense fallback={<></>}>
                {location.pathname === "/" ||
                location.pathname.indexOf("/cabinet") !== -1 ? null : (
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
