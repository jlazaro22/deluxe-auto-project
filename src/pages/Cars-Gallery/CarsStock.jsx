import { useSelector } from 'react-redux';
import Card from '../../features/UI/Card';
import Car from './Car';
import LoaderCircle from '../../features/UI/LoaderCircle';

export default function CarsStock() {
	const { filteredCars, loading } = useSelector((state) => state.cars);

	let carsStock = (
		<div className='stock-wrapper'>
			{filteredCars.map((car) => (
				<Card key={car.id}>
					<Car car={car} />
				</Card>
			))}
		</div>
	);

	return (
		<article className='cars-stock'>
			<h1 className='underline'>Veículos</h1>
			{loading && <LoaderCircle />}
			{!loading && carsStock}
		</article>
	);
}
