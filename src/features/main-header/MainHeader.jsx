import MainNavBar from '../main-navbar/components/MainNavBar';
import MainBanner from '../main-banner/MainBanner';

export default function MainHeader() {
	return (
		<header className='main-header'>
			<MainNavBar />
			<MainBanner />
		</header>
	);
}
