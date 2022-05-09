import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import App from '@src/App'
import { worker } from '@mock/browser'
import './scss/index.scss'

//* mocking data
import.meta.env.DEV && worker.start()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>
)
