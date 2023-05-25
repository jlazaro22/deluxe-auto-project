import { useSelector } from 'react-redux';
import BrandsGallery from './BrandsGallery';

export default function BrandsSlider() {
	const brandLogos = useSelector((state) => [
		...new Set(state.cars.cars.map((car) => car.brandLogo)),
	]);

	return (
		<section className='brands-slider container'>
			<BrandsGallery brandLogos={brandLogos} />
		</section>
	);
}
