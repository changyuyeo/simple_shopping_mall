import { useQuery } from 'react-query'
import { fetcher, queryKeys } from '@lib/queryClient'
import ProductItem from '@components/ProductItem'
import { IProduct } from '@typings/db'

const Products = () => {
	const { data: productsData } = useQuery<IProduct[]>(queryKeys.PRODUCTS, () =>
		fetcher({
			method: 'GET',
			path: '/products'
		})
	)

	return (
		<>
			<h2>상품목록</h2>
			<ul className="products">
				{productsData?.map(product => (
					<ProductItem key={product.id} {...product} />
				))}
			</ul>
		</>
	)
}

export default Products
