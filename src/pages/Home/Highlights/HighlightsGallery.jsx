import { useSelector } from 'react-redux';
import Card from '../../../features/UI/Card';
import LoaderCircle from '../../../features/UI/LoaderCircle';
import HighlightedCar from './HighlightedCar';

export default function HighlightsGallery() {
	const { highlights, loading } = useSelector((state) => state.cars);

	const loaderCircle = (
		<>
			<h1>Destaques</h1>
			<LoaderCircle />
		</>
	);

	const carsRender = (
		<>
			<h1>Destaques</h1>
			<div className='gallery-wrapper'>
				{highlights.map((car) => (
					<Card key={car.id}>
						<HighlightedCar car={car} />
					</Card>
				))}
			</div>
		</>
	);

	return (
		<article className='gallery'>{loading ? loaderCircle : carsRender}</article>
	);
}
