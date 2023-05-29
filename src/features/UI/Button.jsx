/* eslint-disable react/prop-types */
export default function Button({
	children,
	type,
	className,
	onClick,
	disabled,
}) {
	return (
		<button
			type={type || 'button'}
			className={`btn${className ? ' ' + className : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
