import SearchTool from '../../features/cars-gallery/components/SearchTool';
import CarsStock from './CarsStock';

export default function Gallery() {
	return (
		<section className='stock-gallery container'>
			<SearchTool />
			<CarsStock />
		</section>
	);
}
