import { useQuery } from 'react-query'

import CartList from '@components/CartList'
import { GET_CART } from '@graphql/cart'
import { fetcher, queryKeys } from '@lib/queryClient'
import { ICart } from '@typings/db'

const CartPage = () => {
	const { data } = useQuery(queryKeys.CART, () => fetcher(GET_CART), {
		staleTime: 0,
		cacheTime: 1000
	})
	const cartItems = Object.values(data || {}) as ICart[]

	return !cartItems.length ? (
		<span>장바구니가 비었어요!</span>
	) : (
		<CartList cartItems={cartItems} />
	)
}

export default CartPage
