import { Outlet, useLocation, useParams } from 'react-router-dom';
import HeroHeader from '../../components/HeroHeader';
import { get } from '../../Context/Projects';
import Card from '../../components/Card';
import './Works.scss';

function Works() {
	const location = useLocation();
	const { projectId } = useParams();
	const project = get(0);
	const projects = Array(9).fill({
		title: project.title,
		author: 'Branding, Identity',
		based: 'Based on City or Country',
		img: project.images[0]
	})

	if (projectId === undefined)
		return (
			<main className='works'>
				<HeroHeader
					heading='Partnerships'
					slogan='Happy Brands'
				/>
				<div className="works__projects">
					{projects.map((project, index) =>
						<Card
							key={index}
							to={'/works/' + index}
							{...project}
						/>
					)}
				</div>
			</main>
		)
	else
		return <Outlet />
}

export default Works;
