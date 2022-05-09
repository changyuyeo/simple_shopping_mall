import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'

import { IProduct } from '@typings/db'
import { fetcher } from '@lib/queryClient'
import { ADD_CART } from '@graphql/cart'

const ProductItem: FC<IProduct> = props => {
	const { id, title, price, imageUrl } = props
	const { mutate: addCart } = useMutation((id: string) =>
		fetcher(ADD_CART, { id })
	)

	const onAddCart = () => addCart(id)

	return (
		<li className="product-item">
			<Link to={`/products/${id}`}>
				<p className="product-item__title">{title}</p>
				<img className="product-item__image" src={imageUrl} alt={title} />
				<span className="product-item__price">{price}</span>
			</Link>
			<button className="product-item__add-cart" onClick={onAddCart}>
				담기
			</button>
			<span>{0}</span>
		</li>
	)
}

export default ProductItem
