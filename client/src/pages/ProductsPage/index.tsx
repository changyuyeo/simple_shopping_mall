import { useQuery } from 'react-query'

import ProductItem from '@components/ProductItem'
import { GET_PRODUCTS } from '@graphql/products'
import { fetcher, queryKeys } from '@lib/queryClient'
import { IProduct } from '@typings/db'

const Products = () => {
	const { data: products } = useQuery<IProduct[]>(queryKeys.PRODUCTS, () =>
		fetcher(GET_PRODUCTS)
	)

	return (
		<>
			<h2>상품목록</h2>
			<ul className="products">
				{products?.map(product => (
					<ProductItem key={product.id} {...product} />
				))}
			</ul>
		</>
	)
}

export default Products
