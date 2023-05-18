import { useSelector } from 'react-redux';
import Card from '../../../features/UI/Card';
import LoaderCircle from '../../../features/UI/LoaderCircle';
import Car from '../../Cars-Gallery/Car';

export default function HighlightsGallery() {
	const { highlights, loading } = useSelector((state) => state.cars);

	const loaderCircle = <LoaderCircle />;

	const carsList = (
		<div className='highlights-wrapper'>
			{highlights.map((car) => (
				<Card key={car.id}>
					<Car car={car} />
				</Card>
			))}
		</div>
	);

	return (
		<article className='highlights-gallery'>
			<h1 className='underline'>Destaques</h1>
			{loading ? loaderCircle : carsList}
		</article>
	);
}
