import './HeroHeader.scss';

function HeroHeader(props) {

	const heroClass = 'hero-header' +
		(props.size ? ' hero-header--' + props.size : '')

	return (
		<div className={heroClass}>
			<h1 className="hero-header__heading">
				{props.heading}
			</h1>
			<p className="hero-header__slogan">
				{props.slogan}
			</p>
		</div>
	)
}

export default HeroHeader;
