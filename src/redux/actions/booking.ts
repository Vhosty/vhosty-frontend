import $api from "../../http"

export const sendBooking = (data: any, roomCategoryId: string) => {
	$api.post(`/hotels/bookings/${roomCategoryId}`, data).then(() => {
		window.location.hash = "payment_success"
	})
}