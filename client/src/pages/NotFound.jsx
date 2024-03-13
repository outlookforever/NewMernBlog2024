import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<>
			<div>Page Not Found</div>
			<Link to='/'>Back Home Page</Link>
		</>
	)
}
