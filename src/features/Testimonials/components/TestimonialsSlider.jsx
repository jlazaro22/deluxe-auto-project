import { useSelector } from 'react-redux';
import Testimonials from './Testimonials';

export default function TestimonialsSlider() {
	const { testimonials, loading } = useSelector((state) => state.testimonials);

	return (
		<section className='testimonials-slider container'>
			<Testimonials testimonials={testimonials} loading={loading} />
		</section>
	);
}
