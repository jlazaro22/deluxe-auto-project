// eslint-disable-next-line react/prop-types
export default function Card({ children, className }) {
	return (
		<div className={`card${className ? ' ' + className : ''}`}>{children}</div>
	);
}
