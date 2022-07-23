interface IObjectBlockOptions {
	type: string,
	value: string,
	color: string,
	icon: string
}

export interface IObjectBlock {
	id: number,
	hotel_name: string,
	short_address: string,
	rating: number,
	rating_text: string,
	reviews_count: number
	daily_price: number,
	price: number,
	overnights_count: number,
	room_category_name: string,
	options: IObjectBlockOptions[],
	bed_type: string,
	images: string[]
}