import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMainNavBarItems } from '../mainNavbarItemsSlice';
import { NavLink } from 'react-router-dom';
import { IoChevronDownOutline } from 'react-icons/io5';

export default function MainNavBar() {
	const { mainNavBarItems } = useSelector((state) => state.mainNavBarItems);
	let dispatch = useDispatch();
	const [toggled, setToggled] = useState(false);
	const [closeSubMenu, setCloseSubMenu] = useState(false);

	useEffect(() => {
		dispatch(getMainNavBarItems());
	}, [dispatch]);

	const toggleSubMenu = (event) => {
		event.currentTarget.classList.toggle('toggled');
	};

	const closeMenu = (e, closeSubMenu = false) => {
		setToggled(false);

		if (closeSubMenu) {
			e.target.parentElement.parentElement.previousElementSibling.classList.remove(
				'toggled'
			);
			setCloseSubMenu(true);
			setTimeout(() => setCloseSubMenu(false), 0);
		}
	};

	const renderChildren = (children) => {
		return (
			<ul className='sub-menu'>
				{children.map((child, idx) => (
					<li key={idx}>
						<NavLink to={child.url} onClick={(e) => closeMenu(e, true)}>
							{child.name}
						</NavLink>
					</li>
				))}
			</ul>
		);
	};

	const renderItems = () => {
		return mainNavBarItems.map((item, idx) => (
			<li key={idx}>
				{item.url ? (
					<NavLink to={item.url} onClick={(e) => closeMenu(e)}>
						{item.name}
					</NavLink>
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

	return (
		<>
			<nav className={`main-nav${toggled ? ' open' : ''}`}>
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
				<ul
					className={`menu${toggled ? ' open' : ''}${
						closeSubMenu ? ' close' : ''
					}`}
				>
					{renderItems()}
				</ul>
			</nav>
		</>
	);
}
