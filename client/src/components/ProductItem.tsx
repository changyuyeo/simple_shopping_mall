import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IProduct } from '@typings/db'

const ProductItem: FC<IProduct> = props => {
	const { id, title, price, imageUrl } = props

	return (
		<li className="product-item">
			<Link to={`/products/${id}`}>
				<p className="product-item__title">{title}</p>
				<img className="product-item__image" src={imageUrl} alt={title} />
				<span className="product-item__price">{price}</span>
			</Link>
		</li>
	)
}

export default ProductItem
