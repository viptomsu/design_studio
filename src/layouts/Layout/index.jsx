import { Outlet, useLocation, useMatch } from 'react-router-dom';
import { usePages } from '../../Context/Pages';
import Header from '../Header';
import Footer from '../Footer';
import Button from '../../components/Button';
import BigButtons from '../BigButtons';
import './Layout.scss';

function Layout(props) {
	const location = useLocation();
	const { pages } = usePages();

	const hideAllWorksBtn = ['/works', '/blog', '/about'].includes(location.pathname);

	let bigButtons;
	switch (location.pathname) {
		case '/blog':
		case '/logos':
			bigButtons = [pages.works, pages.about];
			break;
		case '/about':
			bigButtons = [pages.works, pages.logos];
			break;
		default:
			bigButtons = [pages.about, pages.logos];
			break;
	}

	const isDetailProject = useMatch('/works/:projectId') !== null;

	return (
		<div className="container">
			<Header />
			<Outlet />
			{!hideAllWorksBtn &&
				<div className="go-to-all-works">
					<Button
						type='outline'
						to='/works'>
						{isDetailProject ? 'BACK TO ALL WORKS' :'All works'}
					</Button>
				</div>
			}
			{
				!isDetailProject &&
				<BigButtons
					pages={bigButtons}
				/>
			}
			<Footer />
		</div>
	)
}

export default Layout;
