/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function BrandsGallery({ brandLogos }) {
	const options = {
		fixedWidth: '15vh',
		fixedHeight: '15vh',
		gap: '2rem',
		type: 'loop',
		arrows: false,
		autoScroll: {
			speed: 0.3,
		},
	};

	return (
		<article className='brands-gallery'>
			<header>
				<h1>As Nossas Marcas</h1>
				<h4>As melhores marcas à sua disposição</h4>
			</header>
			<div className='splide-wrapper'>
				<Splide options={options} extensions={{ AutoScroll }}>
					{brandLogos.map((logoUrl, idx) => (
						<SplideSlide key={idx}>
							<img
								className='brand-logo'
								src={`${
									import.meta.env.VITE_BASE_URL
								}/images/pictures/car-brand-logos/${logoUrl}`}
								alt={logoUrl.split('-', 1)}
							/>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</article>
	);
}
