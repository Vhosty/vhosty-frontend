import React from "react";
import {Link} from "react-router-dom";

import {Field} from "redux-form";

import {RenderCheckbox} from "../";

const PolicyCheckbox: React.FC = () => {
    return (
        <div className="policy-checkbox">
            <Field component={RenderCheckbox} name="policyCheckbox" small>
                Я соглашаюсь с условиями{" "}
                <Link to="/policy">Политики конфиденциальности.</Link>
            </Field>
        </div>
    );
};

export default PolicyCheckbox;
