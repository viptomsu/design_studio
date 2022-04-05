import { NavLink } from 'react-router-dom';
import { usePages } from '../../Context/Pages';
import CustomLink from '../CustomLink';
import Button from '../Button';
import './Menu.scss';

function Menu(props) {
	const { pages, logo } = usePages();
	const menuItems = [];
	for (const key in pages) {
		const page = pages[key];
		menuItems.push(
			<li key={page.name} className="menu__item">
				<CustomLink
					dark to={page.path}
					onClick={props.closeMenu}
				>
					{page.name}
				</CustomLink>
			</li>
		)
	}
	menuItems.push(
		<li
			key='btn'
			className="menu__item"
		>
			<Button
				className='btn--close'
				onClick={props.closeMenu}
			></Button>
		</li>
	)

	return (
		<div className='menu'>
			<h2 className="menu__logo">
				<NavLink to='/'>
					{logo}
				</NavLink>
			</h2>
			<ul className="menu__list">
				{menuItems}
			</ul>
		</div>
	)
}

export default Menu;
