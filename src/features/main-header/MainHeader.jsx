import MainNavBar from '../main-navbar/components/MainNavBar';
import PageLogo from '../page-logo/PageLogo';

export default function MainHeader() {
	return (
		<header className='main-header'>
			<MainNavBar />
			<PageLogo />
		</header>
	);
}
