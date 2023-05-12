import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMainNavBarItems } from './features/main-navbar/mainNavbarItemsSlice';
import { getCars } from './features/cars-gallery/carsGallerySlice';
import Home from './pages/Home/Home';

export default function App() {
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMainNavBarItems());
		dispatch(getCars());
	}, [dispatch]);

	return (
		<>
			<Home />
		</>
	);
}
