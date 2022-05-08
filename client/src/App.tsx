import { useRoutes } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { routes } from '@src/routes'
import Gnb from '@components/Gnb'
import { getClient } from '@lib/queryClient'

const App = () => {
	const elem = useRoutes(routes)
	const queryClient = getClient()

	return (
		<QueryClientProvider client={queryClient}>
			<Gnb />
			{elem}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
