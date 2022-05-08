import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div>
			<Suspense fallback={<span>Loading...</span>}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default Layout
