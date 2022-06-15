export interface validateValues {
    email?: string;

    password?: string;
    password_repeat?: string;
}

interface validateErrors {
    email?: string;

    password?: string;
    password_repeat?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const defaultMin = 2;
    const defaultMax = 32;

    if (!values.email) {
        errors.email = "Поле не может быть пустым";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Ваш электронный адрес неверен";
    } else if (values.email.length > defaultMax) {
        errors.email = `Не более ${defaultMax} символов`;
    } else if (values.email.length < defaultMin) {
        errors.email = `Не менее ${defaultMin} символов`;
    }

    if (!values.password) {
        errors.password = "Поле не может быть пустым";
    } else if (values.password.length > defaultMax) {
        errors.password = `Не более ${defaultMax} символов`;
    } else if (values.password.length < defaultMin) {
        errors.password = `Не менее ${defaultMin} символов`;
    }

    if (!values.password_repeat) {
        errors.password_repeat = "Поле не может быть пустым";
    } else if (values.password_repeat.length > defaultMax) {
        errors.password_repeat = `Не более ${defaultMax} символов`;
    } else if (values.password_repeat.length < defaultMin) {
        errors.password_repeat = `Не менее ${defaultMin} символов`;
    } else if (values.password_repeat !== values.password) {
        errors.password_repeat = `Пароли не равны`;
    }

    return errors;
};
