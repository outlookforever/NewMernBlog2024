import { Header } from 'components/Header'
import {
	About,
	Dashboard,
	Home,
	NotFound,
	Project,
	SignIn,
	SignUp
} from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<BrowserRouter>
			<Header />
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
