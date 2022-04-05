import './CarouselTemplate.scss';

function CarouselTemplate(props) {
	return (
		<img className='carousel__template' src={props.item} alt='carousel template' />
	)
}

export default CarouselTemplate;
