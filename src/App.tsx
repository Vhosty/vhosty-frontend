import React from "react";
import {Route, Routes} from "react-router-dom";

import {useTypedSelector} from "./hooks/useTypedSelector";

import {Footer} from "./components/";

import Reglog from "./pages/Reglog";

const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
    const {open} = useTypedSelector(({reglog}) => reglog);

    return (
        <>
            <React.Suspense fallback={<></>}>
                {open ? <Reglog /> : null}

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
