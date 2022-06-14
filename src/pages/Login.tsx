import React from "react";

import {LoginForm} from "../components/";

const Login: React.FC = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <section className="reglog">
            <LoginForm onSubmit={onSubmit} />
        </section>
    );
};

export default Login;
