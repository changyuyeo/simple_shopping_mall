import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import ProductDetail from '@components/ProductDetail'
import { fetcher, queryKeys } from '@lib/queryClient'
import { IProduct } from '@typings/db'
import { GET_PRODUCT } from '@graphql/products'

const ProductDetailPage = () => {
	const { id } = useParams()

	const { data } = useQuery<IProduct>([queryKeys.PRODUCTS, id], () =>
		fetcher(GET_PRODUCT, { id })
	)

	return data ? (
		<>
			<h2>상품상세</h2>
			<ProductDetail data={data} />
		</>
	) : null
}

export default ProductDetailPage
