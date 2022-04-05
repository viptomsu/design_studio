import { Link } from 'react-router-dom';
import { usePages } from '../../Context/Pages';
import CustomLink from '../../components/CustomLink';
import './Footer.scss';

function Footer() {
	const socialLinks = ['twitter', 'instagram', 'pinterest', 'dribbble', 'linkedin'];
	const { pages } = usePages();
	const pagesElements = [];

	for (const key in pages) {
		if (Object.hasOwnProperty.call(pages, key)) {
			const page = pages[key];
			pagesElements.push(
				<li key={page.name} className="footer__item">
					<CustomLink to={page.path}>
						{page.name}
					</CustomLink>
				</li>
			)
		}
	}

	return (
		<footer className="footer">
			<div className="footer__contact">
				<h3 className="footer__heading">
					Get in Touch
				</h3>
				<p className="footer__item">
					hello@yoursite
				</p>
			</div>
			<ul className="footer__list">
				{socialLinks.map(link => (
					<li key={link} className="footer__item">
						<Link to="#">
							{link}
						</Link>
					</li>
				))}
			</ul>
			<ul className="footer__list">
				{pagesElements}
			</ul>
		</footer>
	)
}

export default Footer;
