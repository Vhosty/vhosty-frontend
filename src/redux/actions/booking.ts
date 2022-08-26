import $api from "../../http"

export const sendBooking = (data: any, roomCategoryId: string) => {
	$api.post(`/hotels/bookings/${roomCategoryId}`, data).then(() => {
		window.location.href = "/cabinet/history"
	})
}