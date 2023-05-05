import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useState } from 'react';

export default function MainNavBar() {
	const { mainNavBarItems } = useSelector((state) => state.mainNavBarItems);
	const [toggled, setToggled] = useState(false);

	const toggleSubMenu = (event) => {
		event.currentTarget.classList.toggle('toggled');
	};

	const renderItems = () => {
		return mainNavBarItems.map((item, idx) => (
			<li key={idx}>
				{item.url ? (
					<NavLink to={item.url}>{item.name}</NavLink>
				) : (
					<span onClick={toggleSubMenu}>
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
				<div className='nav-container'>
					<div className='logo'>Deluxe Auto</div>
					<div
						className={`hamburger${toggled ? ' close' : ''}`}
						onClick={() => setToggled(!toggled)}
					>
						<span className='meat'></span>
						<span className='meat'></span>
						<span className='meat'></span>
						<span className='meat'></span>
					</div>
				</div>
				<ul className={`menu${toggled ? ' active' : ''}`}>{renderItems()}</ul>
			</nav>
		</>
	);
}
