import { useMemo } from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import LoaderCircle from '../../features/UI/LoaderCircle';

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
