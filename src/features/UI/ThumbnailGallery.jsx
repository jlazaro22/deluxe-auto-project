/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useRef } from 'react';

export default function ThumbnailGallery({ imagesGallery }) {
	const mainSplide = useRef();
	const thumbnailsSplide = useRef();

	const mainOptions = {
		type: 'loop',
		perMove: 1,
		gap: '1rem',
		pagination: false,
	};

	const thumbsOptions = {
		type: 'slide',
		rewind: true,
		gap: '0.2rem',
		pagination: false,
		fixedWidth: 100,
		fixedHeight: 80,
		cover: true,
		isNavigation: true,
		breakpoints: {
			720: {
				fixedWidth: 80,
				fixedHeight: 60,
			},
		},
	};

	useEffect(() => {
		if (
			mainSplide.current &&
			thumbnailsSplide.current &&
			thumbnailsSplide.current.splide
		) {
			mainSplide.current.sync(thumbnailsSplide.current.splide);
		}
	}, []);

	const renderSlides = () => {
		return imagesGallery.map((img, idx) => (
			<SplideSlide key={idx}>
				<img
					src={`${
						import.meta.env.VITE_BASE_URL
					}/images/pictures/car-gallery-placeholders/${img}`}
					alt='car detail picture'
				/>
			</SplideSlide>
		));
	};

	return (
		<div className='thumbnail-gallery-wrapper'>
			<Splide ref={mainSplide} options={mainOptions}>
				{renderSlides()}
			</Splide>
			<Splide
				ref={thumbnailsSplide}
				options={thumbsOptions}
				id='thumbnails-splide'
			>
				{renderSlides()}
			</Splide>
		</div>
	);
}
