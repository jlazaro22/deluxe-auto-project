import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThumbnailGallery from '../../features/UI/ThumbnailGallery';

export default function CarDetails() {
	let { id: carId } = useParams();
	let { filteredCars } = useSelector((state) => state.cars);
	let car = filteredCars.find((car) => car.id === carId);
	let {
		brand,
		model,
		year,
		kms,
		price,
		imagesGallery,
		chassis: { class: chassisClass, body, weight },
		powertrain: { engine, powerOutput, transmission },
	} = car;
	let priceFormatted = new Intl.NumberFormat('pt-pt', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(price);
	let kmsFormatted = new Intl.NumberFormat('pt').format(kms);

	return (
		<section className='car-details container'>
			<header>
				<h1 className='underline'>Detalhes da viatura</h1>
			</header>
			<div className='car-details-wrapper'>
				<div className='car-details-gallery'>
					<header>
						<h4>
							{brand} {model}
						</h4>
						<h4>Preço: {priceFormatted}</h4>
					</header>
					<ThumbnailGallery imagesGallery={imagesGallery} />
				</div>
				<div className='car-details-info'>
					<h4>Especificações</h4>
					<ul>
						<li>
							Marca <span>{brand}</span>
						</li>
						<li>
							Modelo <span>{model}</span>
						</li>
						<li>
							Ano <span>{year}</span>
						</li>
						<li>
							Kms <span>{kmsFormatted}</span>
						</li>
						<li>
							Segmento <span>{chassisClass}</span>
						</li>
						<li>
							Chassis <span>{body}</span>
						</li>
						<li>
							Motor <span>{engine}</span>
						</li>
						<li>
							Potência <span>{powerOutput}</span>
						</li>
						<li>
							Transmissão <span>{transmission}</span>
						</li>
						<li>
							Peso <span>{weight}</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
