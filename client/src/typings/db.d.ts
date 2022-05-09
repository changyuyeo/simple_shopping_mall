export interface IProduct {
	id: string
	imageUrl: string
	price: number
	title: string
	description: string
	createdAt: string
}

export interface ICart {
	id: string
	imageUrl: string
	price: number
	title: string
	amount: number
}
