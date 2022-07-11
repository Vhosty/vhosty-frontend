export interface validateValues {
    password?: string;
	password2?: string;
}

interface validateErrors {
    password?: string;
    password2?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const min = process.env.REACT_APP_MIN_INPUT_SYMBOLS
        ? parseInt(process.env.REACT_APP_MIN_INPUT_SYMBOLS)
        : 0;
    const max = process.env.REACT_APP_MAX_INPUT_SYMBOLS
        ? parseInt(process.env.REACT_APP_MAX_INPUT_SYMBOLS)
        : 0;

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
        errors.password2 = `Пароли не равны`;
    }

    return errors;
};
