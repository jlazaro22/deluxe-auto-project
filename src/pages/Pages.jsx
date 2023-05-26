import { Outlet } from 'react-router-dom';
import Footer from '../features/footer/Footer';
import MainHeader from '../features/main-header/MainHeader';

export default function Pages() {
	return (
		<>
			<MainHeader />
			<Outlet />
			<Footer />
		</>
	);
}
