/* eslint-disable react/prop-types */
export default function Car({ car }) {
	let { brand, model, price, kms, year, imageUrl } = car;
	let priceFormatted = new Intl.NumberFormat('pt-pt', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(price);
	let kmsFormatted = new Intl.NumberFormat('pt').format(kms);

	return (
		<>
			<div className='info-wrapper'>
				<span>
					{brand} {model}
				</span>
				<span>{priceFormatted}</span>
				<span>{kmsFormatted} Kms</span>
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
