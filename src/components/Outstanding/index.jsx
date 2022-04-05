import Paragraph from './Paragraph';
import './Outstanding.scss';

function Outstanding({ paragraphs, img }) {
	return (
		<div className='outstanding'>
			{paragraphs.map((paragraph, index) =>
				<Paragraph
					key={index}
					outstanding={index === 0}
					heading={paragraph.heading}
					param={paragraph.param}
				/>
			)}
			<img className='outstanding__img' src={img} alt="outstanding" />
		</div>
	)
}

export default Outstanding;
