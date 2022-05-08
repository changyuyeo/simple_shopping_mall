import { QueryClient } from 'react-query'
import axios from 'axios'

type AnyOBJ = { [key: string]: string | number | boolean }
type FetcherType = {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
	path: string
	body?: AnyOBJ
	params?: AnyOBJ
}

const BASE_URL = 'https://fakestoreapi.com' as const
const queryOption = {
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
			refetchOnMount: false,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false
		}
	}
}

export const getClient = (() => {
	let client: QueryClient | null = null
	return () => {
		if (!client) client = new QueryClient(queryOption)
		return client
	}
})()

export const queryKeys = {
	PRODUCTS: 'PRODUCTS',
	PRODUCT: 'PRODUCT'
}

export const fetcher = async (payload: FetcherType) => {
	const config = {
		method: payload.method,
		url: `${BASE_URL}${payload.path}`
	}
	try {
		const { data } = await axios(config)
		return data
	} catch (error) {
		console.error(error)
	}
}
