import { Link } from 'react-router-dom';
import pageLogo from '/images/pictures/page-logo/page-logo.svg';

export default function PageLogo() {
	return (
		<div className='page-logo'>
			<Link to={'/'}>
				<img src={pageLogo} alt='deluxe auto logo' />
			</Link>
		</div>
	);
}
