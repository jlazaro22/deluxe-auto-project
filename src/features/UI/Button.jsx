// eslint-disable-next-line react/prop-types
export default function Button({ children, type, className, onClick }) {
	return (
		<button
			type={type || 'button'}
			className={`btn${className ? ' ' + className : ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
