/* eslint-disable react/prop-types */
export default function Car({ car }) {
	let { brand, model, price, kms, year, imageUrl } = car;

	return (
		<>
			<div className='info-wrapper'>
				<span>
					{brand} {model}
				</span>
				<span>{kms} Kms</span>
				<span>{price} €</span>
				<span>{year}</span>
			</div>
			<img
				src={`${
					import.meta.env.VITE_BASE_URL
				}/images/pictures/cars/${imageUrl}`}
				alt='car photo'
			/>
		</>
	);
}
