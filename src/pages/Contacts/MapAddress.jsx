import { useMemo } from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import LoaderCircle from '../../features/UI/LoaderCircle';
import { GrDirections } from 'react-icons/gr';

export default function MapAddress() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GMAPS_APIKEY,
	});
	const centered = useMemo(
		() => ({ lat: 38.72545717441236, lng: -9.149991302840245 }),
		[]
	);

	if (!isLoaded) return <LoaderCircle />;

	return (
		<article className='map-address'>
			<a
				href='https://www.google.com/maps/place/Marqu%C3%AAs+de+Pombal/@38.725294,-9.1525662,17z/data=!3m1!4b1!4m6!3m5!1s0xd193377223c84a9:0x3bba35625fa2ed11!8m2!3d38.7252898!4d-9.1499913!16s%2Fg%2F119vlzczk?hl=pt-PT&entry=ttu'
				target='_blank'
				rel='noreferrer'
				className='address-wrapper'
			>
				<GrDirections /> Direcções
			</a>
			<GoogleMap
				zoom={16}
				center={centered}
				mapContainerClassName='map-container'
			>
				<MarkerF position={centered} />
			</GoogleMap>
		</article>
	);
}
