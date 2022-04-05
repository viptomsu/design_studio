import HeroHeader from '../../components/HeroHeader';
import './Logos.scss';

function Logos() {
	const logos = Array(14).fill('https://images-workbench.99static.com/HqzbVjAgPiZpcCQeFBXNHPphooQ=/235x195:1813x1773/fit-in/500x500/filters:fill(white,true):format(jpeg)/99designs-contests-attachments/115/115837/attachment_115837064');

	return (
		<main className='logos'>
			<HeroHeader
				heading='Logo Collection'
				slogan={`Solution & Designs`}
			/>
			<div className="logos__collection">
				{logos.map((logo, index) =>
					<img key={index} src={logo} alt="logo" />
				)}
			</div>
		</main>
	)
}

export default Logos;
