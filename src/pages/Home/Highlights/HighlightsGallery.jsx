import { useSelector } from 'react-redux';
import Card from '../../../features/UI/Card';
import LoaderCircle from '../../../features/UI/LoaderCircle';
import HighlightedCar from './HighlightedCar';

export default function HighlightsGallery() {
	const { highlights, loading } = useSelector((state) => state.cars);

	const loaderCircle = <LoaderCircle />;

	const carsList = (
		<div className='gallery-wrapper'>
			{highlights.map((car) => (
				<Card key={car.id}>
					<HighlightedCar car={car} />
				</Card>
			))}
		</div>
	);

	return (
		<article className='gallery'>
			<h1>Destaques</h1>
			{loading ? loaderCircle : carsList}
		</article>
	);
}
