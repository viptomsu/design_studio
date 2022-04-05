import './Param.scss';

function Param(props) {
	const paramClass = 'param' +
	(props.className ? ' ' + props.className : '');
	return (
		<p className={paramClass}>
			{props.children}
		</p>
	)
}

export default Param;
