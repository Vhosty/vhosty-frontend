import React from "react";
import {Route, Routes} from "react-router-dom";

import {useTypedSelector} from "./hooks/useTypedSelector";

import {Footer} from "./components/";

import Login from "./pages/Login";

const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
    const {open} = useTypedSelector(({login}) => login);

    return (
        <>
            <React.Suspense fallback={<></>}>
                {open ? <Login /> : null}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/policy" element={<>policy</>} />
                </Routes>

                <Footer />
            </React.Suspense>
        </>
    );
};

export default App;
