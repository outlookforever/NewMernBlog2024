import {
	About,
	Dashboard,
	Home,
	NotFound,
	Project,
	SignIn,
	SignUp
} from 'pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn />}
				/>
				<Route
					path='/sign-up'
					element={<SignUp />}
				/>
				<Route
					path='/project'
					element={<Project />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
