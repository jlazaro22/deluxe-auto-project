import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMainNavBarItems } from './features/main-navbar/mainNavbarItemsSlice';
import MainNavBar from './features/main-navbar/components/MainNavBar';

export default function App() {
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMainNavBarItems());
	}, [dispatch]);

	return (
		<>
			<MainNavBar />
		</>
	);
}
