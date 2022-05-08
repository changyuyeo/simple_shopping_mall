import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IRating } from '@typings/db'

interface Props {
	id: number
	title: string
	price: number
	category: string
	image: string
	rating: IRating
}

const ProductItem: FC<Props> = props => {
	const { id, title, price, category, image, rating } = props

	return (
		<li className="product-item">
			<Link to={`/products/${id}`}>
				<p className="product-item__category">{category}</p>
				<p className="product-item__title">{title}</p>
				<img className="product-item__image" src={image} alt={title} />
				<p className="product-item__price">{price}</p>
				<p className="product-item__rating">{rating.rate}</p>
			</Link>
		</li>
	)
}

export default ProductItem
