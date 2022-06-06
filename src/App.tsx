import React, {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";

import {HeaderMain} from "./components";

const Home = lazy(() => import("./pages/Home"));

const App: React.FC = () => {
    return (
        <>
            <Suspense fallback={<></>}>
				<HeaderMain />
				
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
