import { FC } from 'react'
import { ICart } from '@typings/db'

const CartItem: FC<ICart> = ({ amount, id, imageUrl, price, title }) => {
	return (
		<li>
			{id} {imageUrl} {price} {title} {amount}
		</li>
	)
}

export default CartItem
