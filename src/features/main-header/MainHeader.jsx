import MainNavBar from '../main-navbar/components/MainNavBar';
import PageLogo from '../page-logo/PageLogo';
import SmallBanner from '../banners/SmallBanner';

export default function MainHeader() {
	return (
		<header className='main-header'>
			<MainNavBar />
			<PageLogo />
			<SmallBanner />
		</header>
	);
}
