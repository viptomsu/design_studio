import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { usePages } from '../../Context/Pages';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import './Header.scss';

function Header() {
	const { logo } = usePages();
	const [showMenu, setShowMenu] = useState(false);

	const closeMenu = () => setShowMenu(false);

	return (
		<header className="header">
			<nav className="navbar">
				<NavLink className="navbar__item navbar__toHome" to='/'>
					{logo}
				</NavLink>
				<NavLink
					className="navbar__item"
					to='#'
					onClick={() => setShowMenu(!showMenu)}
				>
					Menu
				</NavLink>
			</nav>
			{showMenu && <Menu
				closeMenu={closeMenu}
			/>}
		</header>
	)
}

export default Header;
