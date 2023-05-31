import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Card({ children, className, carId }) {
	return (
		<Link
			to={`/pages/car-details/${carId}`}
			className={`card${className ? ' ' + className : ''}`}
		>
			{children}
		</Link>
	);
}
