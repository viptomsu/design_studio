import { useNavigate } from 'react-router-dom';
import './Project.scss';

function Project(props) {
	const titleClass = 'home__projectTitle' +
	(props.right ? ' home__projectTitle--right' : '')
	const navigate = useNavigate();
	const handleClick = () => {
		if(props.to) {
			navigate(props.to);
		}
	}
	return (
		<div
			className='home__project'
			style={{backgroundImage: `url('${props.img}')`}}
			onClick={handleClick}
		>
			<h3 className={titleClass}>
				{props.title}
			</h3>
		</div>
	)
}

export default Project;
