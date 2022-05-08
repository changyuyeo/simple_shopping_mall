import { QueryClient } from 'react-query'
import { request, RequestDocument } from 'graphql-request'

const BASE_URL = '/' as const
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
	PRODUCTS: 'PRODUCTS'
}

export const fetcher = (query: RequestDocument, variables = {}) =>
	request(BASE_URL, query, variables)
