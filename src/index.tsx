import React from "react";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/sass/style.sass";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
