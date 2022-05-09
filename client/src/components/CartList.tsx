import { FC } from 'react'

import { ICart } from '@typings/db'
import CartItem from './CartItem'

interface Props {
	cartItems: ICart[]
}

const CartList: FC<Props> = ({ cartItems }) => {
	return (
		<ul>
			{cartItems.map(item => (
				<CartItem key={item.id} {...item} />
			))}
		</ul>
	)
}

export default CartList
