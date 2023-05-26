import MainHeaderHome from '../../features/main-header/MainHeaderHome';
import Highlights from './Highlights/Highlights';
import BrandsSlider from './BrandsSlider/BrandsSlider';
import TestimonialsSlider from '../../features/Testimonials/components/TestimonialsSlider';
import Footer from '../../features/footer/Footer';

export default function Home() {
	return (
		<>
			<MainHeaderHome />
			<Highlights />
			<BrandsSlider />
			<TestimonialsSlider />
			<Footer />
		</>
	);
}
