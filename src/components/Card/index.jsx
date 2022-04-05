import { useNavigate } from 'react-router-dom';
import './Card.scss';

function Card(props) {
	const navigate = useNavigate();
	const handleClick = (e) => {
		if(props.to) {
			navigate(props.to)
		}
	}
	return (
		<div className='card'>
			<img
				className='card__img'
				src={props.img} alt={props.title}
				onClick={handleClick}
			/>
			<div className="card__detail">
				<h3
					className="card__title"
					onClick={handleClick}
				>
					{props.title}
				</h3>
				<p className="card__author">
					{props.author}
				</p>
				<p className="card__based">
					{props.based}
				</p>
			</div>
		</div>
	)
}

export default Card;
