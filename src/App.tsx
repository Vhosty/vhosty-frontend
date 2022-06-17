import React from "react";
import {Route, Routes} from "react-router-dom";

import {Footer} from "./components/";

import Reglog from "./pages/Reglog";

const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
    return (
        <>
            <React.Suspense fallback={<></>}>
               <Reglog />

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
