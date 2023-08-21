import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route
} from 'react-router-dom'

import App from './App'
import { routes } from './routes'

import './index.css'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			{routes.map((route, index) => (
				<React.Fragment key={index}>
					<Route key={route.path} path={route.path} element={<route.element />} />
					{route.children &&
						route.children.map((child, index) => (
							<React.Fragment key={index}>
								<Route
									key={child.path}
									path={[route.path,child.path].join('')}
									element={<child.element />}
								/>
							</React.Fragment>
						))}
				</React.Fragment>
			))}
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
