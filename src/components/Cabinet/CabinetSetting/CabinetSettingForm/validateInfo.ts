export interface validateValues {
	first_name?: string;
	last_name?: string;
}

interface validateErrors {
	first_name?: string;
	last_name?: string;
}

export const validateInfo = (values: validateValues) => {
	const errors: validateErrors = {};

	const min = process.env.REACT_APP_MIN_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MIN_INPUT_SYMBOLS)
		: 0;
	const max = process.env.REACT_APP_MAX_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MAX_INPUT_SYMBOLS)
		: 0;

	if (values.first_name) {
		if (values.first_name.length > max) {
			errors.first_name = `Не более ${max} символов`;
		}

		if (values.first_name.length < min) {
			errors.first_name = `Не менее ${min} символов`;
		}
	}

	if (values.last_name) {
		if (values.last_name.length > max) {
			errors.last_name = `Не более ${max} символов`;
		}

		if (values.last_name.length < min) {
			errors.last_name = `Не менее ${min} символов`;
		}
	}

	return errors;
};