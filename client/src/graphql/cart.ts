import { gql } from 'graphql-tag'

export const GET_CART = gql`
	query GET_CART {
		cart {
			id
			imageUrl
			price
			title
			amount
		}
	}
`

export const ADD_CART = gql`
	mutation ADD_CART($id: string) {
		cart(id: $id) {
			id
			imageUrl
			price
			title
			amount
		}
	}
`
