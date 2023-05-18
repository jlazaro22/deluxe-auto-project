import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMainNavBarItems } from './features/main-navbar/mainNavbarItemsSlice';
import { getCars } from './features/cars-gallery/carsGallerySlice';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CarsGallery from './pages/Cars-Gallery/CarsGallery';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';

export default function App() {
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMainNavBarItems());
		dispatch(getCars());
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/cars-gallery' Component={CarsGallery} />
				<Route path='/about-us' Component={AboutUs} />
				<Route path='/contact-us' Component={Contacts} />
			</Routes>
		</>
	);
}
