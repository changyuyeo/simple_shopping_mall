import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import ProductDetail from '@components/ProductDetail'
import { fetcher, queryKeys } from '@lib/queryClient'
import { IProduct } from '@typings/db'

const ProductDetailPage = () => {
	const { id } = useParams()

	const { data } = useQuery<IProduct>(queryKeys.PRODUCT, () =>
		fetcher({
			method: 'GET',
			path: `/products/${id}`
		})
	)

	return (
		data && (
			<>
				<h2>상품상세</h2>
				<ProductDetail data={data} />
			</>
		)
	)
}

export default ProductDetailPage
