import CreateCarousel from '../../components/CreateCarousel';
import CarouselTemplate from '../../components/CarouselTemplate';
import { paragraphs, img, aboutWorks } from './data';
import Outstanding from '../../components/Outstanding';
import Heading from '../../components/Heading';
import Param from '../../components/Param';
import './About.scss';

function About() {
	const images = ['https://2obtaz1watdk1gq96f1dhka8-wpengine.netdna-ssl.com/wp-content/uploads/2022/04/28667775_web1_M2-SEQ-20220401-Best-Delta-8-Brands-1280.jpeg', 'https://cdn.vox-cdn.com/thumbor/EPapnoN6UmT50WzrcfXdNTH9S98=/0x0:2321x1337/1200x800/filters:focal(976x484:1346x854)/cdn.vox-cdn.com/uploads/chorus_image/image/70452361/1321176352.0.jpg'];
	const Carousel = CreateCarousel(CarouselTemplate, images, 3000);

	return (
		<main className='about'>
			<Carousel />
			<Outstanding
				paragraphs={paragraphs}
				img={img}
			/>
			<img
				className='about__bigImg'
				src={'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/246854445_419702942849584_5001785217726679221_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=IGg5PWOp3aIAX9_sDZv&_nc_ht=scontent.fhan15-1.fna&oh=00_AT912HzhOe7IP7KfEfu3YfcQ_uHpib72Vmjf8UE0gM16uw&oe=6251457C'}
				alt="about outstanding_img"
			/>
			<div className="about__contact">
				<div>
					<Heading>What We Do</Heading>
					<ul className="about__works">
						{aboutWorks.map(work =>
							<Param key={work}>{work}</Param>
						)}
					</ul>
				</div>
				<div>
					<Heading>Career</Heading>
					<Param>jobs@yoursite</Param>
				</div>
				<div>
					<Heading>Start a Project</Heading>
					<Param>hello@yoursite</Param>
				</div>
			</div>
		</main>
	)
}

export default About;
