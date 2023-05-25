import MainHeaderHome from '../../features/main-header/MainHeaderHome';
import Highlights from './Highlights/Highlights';
import BrandsSlider from './BrandsSlider/BrandsSlider';
import TestimonialsSlider from './Testimonials/TestimonialsSlider';

export default function Home() {
	return (
		<>
			<MainHeaderHome />
			<Highlights />
			<BrandsSlider />
			<TestimonialsSlider />
		</>
	);
}
