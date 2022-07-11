import $api from "../../http"

export const sendConfirmedEmail = (hash: string) => {
	$api.get("/users/confirm/email", { params: { code: hash } }).then(({ data }) => {
		localStorage.setItem("accessToken", data.access_token);

		window.location.href = "/cabinet/setting";
	})
}