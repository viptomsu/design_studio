import CarouselTemplate from '../../components/CarouselTemplate';
import CreateCarousel from '../../components/CreateCarousel';
import Outstanding from '../../components/Outstanding';
import Paragraph from '../../components/Outstanding/Paragraph';
import { get } from '../../Context/Projects';
import './Project.scss';

function Project() {
	const project = get(0);
	const Carousel = CreateCarousel(CarouselTemplate, project.slideImages, 3000);

	return (
		<main className='projectPage'>
			<Carousel />
			<Outstanding
				paragraphs={project.paragraphs.slice(0, 3)}
				img={project.images[0]}
			/>
			<div className="projectPage__moreImages">
				{project.images.slice(1).map((img, i) => (
					<img key={i}
						src={img} alt="project more img" />
				))}
			</div>
			<div className="projectPage__moreParagraphs">
				{project.paragraphs.slice(3).map(para => (
					<Paragraph
						key={para.heading}
						heading={para.heading}
						param={para.param}
					/>
				))}
			</div>
			<div className="projectPage__locationImages">
				<div className="top">
					{project.locationImages.slice(0,2).map(img => (
						<img key={img} src={img} alt="location" />
					))}
				</div>
				<img className='bottom'
				src={project.locationImages[2]} alt="location" />
			</div>
		</main>
	)
}

export default Project;
