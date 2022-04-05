import Heading from '../../Heading';
import Param from '../../Param';
import './Paragraph.scss';

function Paragraph({ heading, param, outstanding=false }) {
	const paraClass = 'paragraph' +
	(outstanding ? ' paragraph--outstanding' : '');
	return (
		<div className={paraClass}>
			<Heading className='paragraph__heading'>
				{heading}
			</Heading>
			<Param className='paragraph__param'>
				{param}
			</Param>
		</div>
	)
}

export default Paragraph;
