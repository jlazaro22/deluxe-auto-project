import Card from '../../../features/UI/Card';

export default function HighlightsGallery() {
	return (
		<article className='gallery'>
			<h1>Destaques</h1>
			<div className='gallery-wrapper'>
				<Card>
					<img
						src={`${
							import.meta.env.VITE_BASE_URL
						}/images/pictures/cars/ferrari-488-gtb.jpg`}
						alt='car photo'
					/>
				</Card>
				<Card>
					<img
						src={`${
							import.meta.env.VITE_BASE_URL
						}/images/pictures/cars/ferrari-488-gtb.jpg`}
						alt='car photo'
					/>
				</Card>
				<Card>
					<img
						src={`${
							import.meta.env.VITE_BASE_URL
						}/images/pictures/cars/ferrari-488-gtb.jpg`}
						alt='car photo'
					/>
				</Card>
				<Card>
					<img
						src={`${
							import.meta.env.VITE_BASE_URL
						}/images/pictures/cars/ferrari-488-gtb.jpg`}
						alt='car photo'
					/>
				</Card>
				<Card>
					<img
						src={`${
							import.meta.env.VITE_BASE_URL
						}/images/pictures/cars/ferrari-488-gtb.jpg`}
						alt='car photo'
					/>
				</Card>
				<Card>
					<img
						src={`${
							import.meta.env.VITE_BASE_URL
						}/images/pictures/cars/ferrari-488-gtb.jpg`}
						alt='car photo'
					/>
				</Card>
			</div>
		</article>
	);
}
