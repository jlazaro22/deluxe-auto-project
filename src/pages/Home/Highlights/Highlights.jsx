import SearchTool from '../../../features/cars-gallery/components/SearchTool';
import HighlightsGallery from './HighlightsGallery';

export default function Highlights() {
	return (
		<section className='highlights container'>
			<HighlightsGallery />
			<SearchTool />
		</section>
	);
}
