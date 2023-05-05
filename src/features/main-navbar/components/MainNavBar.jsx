import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoChevronDownOutline } from 'react-icons/io5';

export default function MainNavBar() {
	const { mainNavBarItems } = useSelector((state) => state.mainNavBarItems);

	const renderItems = () => {
		return mainNavBarItems.map((item, idx) => (
			<li key={idx}>
				{item.url ? (
					<NavLink to={item.url}>{item.name}</NavLink>
				) : (
					<span>
						{item.name}
						<IoChevronDownOutline />
					</span>
				)}
				{item.children && renderChildren(item.children)}
			</li>
		));
	};

	const renderChildren = (children) => {
		return (
			<ul className='sub-menu'>
				{children.map((child, idx) => (
					<li key={idx}>
						<NavLink to={child.url}>{child.name}</NavLink>
					</li>
				))}
			</ul>
		);
	};

	return (
		<>
			<nav className='main-nav'>
				<div className='container'>
					<div className='logo'>Deluxe Auto</div>
					<div className='hamburguer'>
						<span className='meat'></span>
						<span className='meat'></span>
						<span className='meat'></span>
						<span className='meat'></span>
					</div>
				</div>
				<ul className='menu'>{renderItems()}</ul>
			</nav>
		</>
	);
}
