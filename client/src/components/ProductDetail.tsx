import { FC } from 'react'
import { IProduct } from '@typings/db'

interface Props {
	data: IProduct
}

const ProductDetail: FC<Props> = ({ data }) => {
	const { description, imageUrl, price, title } = data

	return (
		<li className="product-detail">
			<p className="product-detail__title">{title}</p>
			<img className="product-detail__image" src={imageUrl} alt={title} />
			<p className="product-detail__description">{description}</p>
			<p className="product-detail__price">{price}</p>
		</li>
	)
}

export default ProductDetail
