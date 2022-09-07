export interface validateValues {
    email?: string;

    password?: string;
	password2?: string;
	
    policyCheckbox?: string;
}

interface validateErrors {
    email?: string;

    password?: string;
    password2?: string;

    policyCheckbox?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const min = process.env.REACT_APP_MIN_INPUT_SYMBOLS
        ? parseInt(process.env.REACT_APP_MIN_INPUT_SYMBOLS)
        : 0;
    const max = process.env.REACT_APP_MAX_INPUT_SYMBOLS
        ? parseInt(process.env.REACT_APP_MAX_INPUT_SYMBOLS)
        : 0;

    if (!values.email) {
        errors.email = "Поле не может быть пустым";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Ваш электронный адрес неверен";
    } else if (values.email.length > max) {
        errors.email = `Не более ${max} символов`;
    } else if (values.email.length < min) {
        errors.email = `Не менее ${min} символов`;
    }

    if (!values.password) {
        errors.password = "Поле не может быть пустым";
    } else if (values.password.length > max) {
        errors.password = `Не более ${max} символов`;
    } else if (values.password.length < min) {
        errors.password = `Не менее ${min} символов`;
    }

    if (!values.password2) {
        errors.password2 = "Поле не может быть пустым";
    } else if (values.password2.length > max) {
        errors.password2 = `Не более ${max} символов`;
    } else if (values.password2.length < min) {
        errors.password2 = `Не менее ${min} символов`;
    } else if (values.password2 !== values.password) {
        errors.password2 = `Не совпадают`;
    }

    if (!values.policyCheckbox) {
        errors.policyCheckbox = "Поле не может быть пустым";
    }

    return errors;
};
