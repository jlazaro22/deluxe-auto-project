import Card from '../../../features/UI/Card';

export default function HighlightsGallery() {
	return (
		<article className='gallery'>
			<h1>Destaques</h1>
			<div className='gallery-wrapper'>
				<Card>
					<img src='/public/cars/ferrari-488-gtb.jpg' alt='car photo' />
				</Card>
				<Card>
					<img src='/public/cars/ferrari-488-gtb.jpg' alt='car photo' />
				</Card>
				<Card>
					<img src='/public/cars/ferrari-488-gtb.jpg' alt='car photo' />
				</Card>
				<Card>
					<img src='/public/cars/ferrari-488-gtb.jpg' alt='car photo' />
				</Card>
				<Card>
					<img src='/public/cars/ferrari-488-gtb.jpg' alt='car photo' />
				</Card>
				<Card>
					<img src='/public/cars/ferrari-488-gtb.jpg' alt='car photo' />
				</Card>
			</div>
		</article>
	);
}
