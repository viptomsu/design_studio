import './Heading.scss';

function Heading(props) {
	const Tag = props.tag || 'h2';
	const headingClass = 'heading' +
	(props.className ? ' ' + props.className : '');
	return (
		<Tag className={headingClass}>
			{props.children}
		</Tag>
	)
}

export default Heading;
