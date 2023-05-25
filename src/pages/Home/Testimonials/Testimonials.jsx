import { BsChatSquareText } from 'react-icons/bs';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Testimonials() {
	const options = {
		gap: '2rem',
		type: 'loop',
	};

	return (
		<article className='testimonials'>
			<header>
				<h1>Testemunhos</h1>
				<h4>A opinião dos nossos clientes</h4>
			</header>
			<div className='testimonials-wrapper'>
				<Splide options={options}>
					<SplideSlide>
						<div className='testimonial-info'>
							<BsChatSquareText />
							<h4>Anónimo</h4>
							<img src='/images/stars-rate/stars-rate-5.png' alt='5' />
							<p>
								<q>
									Serviço de excelência. Veículos em excelente estado. Recomendo
									vivamente a Deluxe Auto.
								</q>
							</p>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className='testimonial-info'>
							<BsChatSquareText />
							<h4>Anónimo</h4>
							<img src='/images/stars-rate/stars-rate-5.png' alt='5' />
							<p>
								<q>
									Serviço de excelência. Veículos em excelente estado. Recomendo
									vivamente a Deluxe Auto.
								</q>
							</p>
						</div>
					</SplideSlide>
				</Splide>
			</div>
		</article>
	);
}
