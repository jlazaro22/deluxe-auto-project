import MainNavBar from '../main-navbar/components/MainNavBar';
import PageLogo from '../page-logo/PageLogo';
import MainBanner from '../banners/MainBanner';

export default function MainHeaderHome() {
	return (
		<header className='main-header'>
			<MainNavBar />
			<PageLogo />
			<MainBanner />
		</header>
	);
}
