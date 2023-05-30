import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getMainNavBarItems } from './features/main-navbar/mainNavbarItemsSlice';
import { getCars } from './features/cars-gallery/carsGallerySlice';
import { getTestimonials } from './features/Testimonials/testimonialsSlice';
import Home from './pages/Home/Home';
import Pages from './pages/Pages';
import CarsGallery from './pages/Cars-Gallery/CarsGallery';
import Financing from './pages/Financing';
import VehicleEvaluation from './pages/VehicleEvaluation';
import Warranty from './pages/Warranty';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts/Contacts';
import PageNotFound from './pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMainNavBarItems());
		dispatch(getCars());
		dispatch(getTestimonials());
	}, [dispatch]);

	return (
		<>
			<ToastContainer />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pages' element={<Pages />}>
					<Route index element={<CarsGallery />} />
					<Route path='cars-gallery' element={<CarsGallery />} />
					<Route
						path='cars-gallery/:brand?/:model?/:chassisClass?/:year?'
						element={<CarsGallery />}
					/>
					<Route path='services/credit-sim' element={<Financing />} />
					<Route path='services/market-value' element={<VehicleEvaluation />} />
					<Route path='services/warranty' element={<Warranty />} />
					<Route path='about-us' element={<AboutUs />} />
					<Route path='contact-us' element={<Contacts />} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</>
	);
}
