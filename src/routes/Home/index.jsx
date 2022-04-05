import HeroHeader from '../../components/HeroHeader';
import Project from '../../components/homePage/Project';
import { get } from '../../Context/Projects';
import './Home.scss';

function Home() {
	const project = get(0);
	return (
		<main className='home'>
			<HeroHeader
				size='big'
				heading={`Design & Development Solutions for Brands.`}
				slogan='Keep it simple'
				/>
			<div className="home__projects">
				<Project
					right
					img='https://mms.businesswire.com/media/20201215005741/en/846916/5/4800740_Inspire_Logo.jpg'
					title='Project Title'
				/>
				<Project
					img={project.images[0]}
					title={project.title}
					to={'/works/' + project.id}
				/>
			</div>
		</main>
	)
}

export default Home;
