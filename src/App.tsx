import React, {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

const App: React.FC = () => {
    return (
        <>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
