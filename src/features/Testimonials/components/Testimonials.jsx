/* eslint-disable react/prop-types */
import { BsChatSquareText } from 'react-icons/bs';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import LoaderCircle from '../../UI/LoaderCircle';

export default function Testimonials({ testimonials, loading }) {
	const options = {
		height: '100%',
		gap: '2rem',
		type: 'loop',
		autoplay: true,
	};

	return (
		<article className='testimonials'>
			<header>
				<h1>Testemunhos</h1>
				<h4>A opinião dos nossos clientes</h4>
			</header>

			{loading && <LoaderCircle />}
			<div className='testimonials-wrapper'>
				{!loading && (
					<Splide options={options}>
						{testimonials.map(({ id, rate, name, comment }) => (
							<SplideSlide key={id}>
								<div className='testimonial-info'>
									<header>
										<BsChatSquareText />
										<h4>{name}</h4>
										<img
											src={`${
												import.meta.env.VITE_BASE_URL
											}/images/UI/stars-rate/stars-rate-${rate}.png`}
											alt={rate}
										/>
									</header>
									<p>
										<q>{comment}</q>
									</p>
								</div>
							</SplideSlide>
						))}
					</Splide>
				)}
			</div>
		</article>
	);
}
