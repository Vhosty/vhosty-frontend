export interface validateValues {
	old_password?: string;
	new_password?: string;
	new_password2?: string;
}

interface validateErrors {
	old_password?: string;
	new_password?: string;
	new_password2?: string;
}

export const validate = (values: validateValues) => {
	const errors: validateErrors = {};

	const min = process.env.REACT_APP_MIN_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MIN_INPUT_SYMBOLS)
		: 0;
	const max = process.env.REACT_APP_MAX_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MAX_INPUT_SYMBOLS)
		: 0;

	if (!values.old_password) {
		errors.old_password = "Поле не может быть пустым";
	} else if (values.old_password.length > max) {
		errors.old_password = `Не более ${max} символов`;
	} else if (values.old_password.length < min) {
		errors.old_password = `Не менее ${min} символов`;
	}

	if (!values.new_password) {
		errors.new_password = "Поле не может быть пустым";
	} else if (values.new_password.length > max) {
		errors.new_password = `Не более ${max} символов`;
	} else if (values.new_password.length < min) {
		errors.new_password = `Не менее ${min} символов`;
	}

	if (!values.new_password2) {
		errors.new_password2 = "Поле не может быть пустым";
	} else if (values.new_password2.length > max) {
		errors.new_password2 = `Не более ${max} символов`;
	} else if (values.new_password2.length < min) {
		errors.new_password2 = `Не менее ${min} символов`;
	} else if (values.new_password2 !== values.new_password) {
		errors.new_password2 = `Не совпадают`;
	}

	return errors;
};
