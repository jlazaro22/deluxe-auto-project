import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMainNavBarItems } from './features/main-navbar/mainNavbarItemsSlice';
import { getCars } from './features/cars-gallery/carsGallerySlice';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CarsGallery from './pages/Cars-Gallery/CarsGallery';
import Financing from './pages/Financing';
import VehicleEvaluation from './pages/VehicleEvaluation';
import Warranty from './pages/Warranty';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Footer from './features/footer/Footer';

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
				<Route path='/services/credit-sim' Component={Financing} />
				<Route path='/services/market-value' Component={VehicleEvaluation} />
				<Route path='/services/warranty' Component={Warranty} />
				<Route path='/about-us' Component={AboutUs} />
				<Route path='/contact-us' Component={Contacts} />
			</Routes>

			<Footer />
		</>
	);
}
