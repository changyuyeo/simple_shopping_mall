import { lazy } from 'react'
import GlobalLayout from '@layouts/GlobalLayout'

const Home = lazy(() => import('@pages/HomePage'))
const Cart = lazy(() => import('@pages/CartPage'))
const Products = lazy(() => import('@pages/ProductsPage'))
const Product = lazy(() => import('@pages/ProductsPage/DetailPage'))

export const routes = [
	{
		path: '/',
		element: <GlobalLayout />,
		children: [
			{ path: '/', element: <Home />, index: true },
			{ path: '/cart', element: <Cart />, index: true },
			{ path: '/products', element: <Products />, index: true },
			{ path: '/products/:id', element: <Product /> }
		]
	}
]

export const pages = [
	{ route: '/cart' },
	{ route: '/products' },
	{ route: '/products/:id' }
]
