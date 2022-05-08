import { FC } from 'react'
import { IProduct } from '@typings/db'

interface Props {
	data: IProduct
}

const ProductDetail: FC<Props> = ({ data }) => {
	const { category, title, image, description, price, rating } = data

	return (
		<li className="product-detail">
			<p className="product-detail__category">{category}</p>
			<p className="product-detail__title">{title}</p>
			<img className="product-detail__image" src={image} alt={title} />
			<p className="product-detail__description">{description}</p>
			<p className="product-detail__price">{price}</p>
			<p className="product-detail__rating">{rating.rate}</p>
		</li>
	)
}

export default ProductDetail
