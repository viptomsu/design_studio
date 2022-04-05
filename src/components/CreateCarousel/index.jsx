import { useState, useEffect } from 'react';
import './Carousel.scss';

function CreateCarousel(Template, items, time = 1000) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		let timeOutId = setTimeout(() => {
			setIndex(prev => {
				if (prev < items.length - 1)
					return prev + 1;
				else
					return 0;
			});
		}, time)

		return () => clearTimeout(timeOutId);
	}, [index, items.length])

	return function Carousel(props) {
		const newProps = {
			...props,
			item: items[index]
		}
		return (
			<div className="carousel">
				<div className="carousel__content">
					<Template {...newProps} />
				</div>
				<div className="carousel__controller">
					{items.map((item, i) => (
						<button
							key={i}
							className={`carousel__controller-btn ${i === index ? 'active' : ''}`}
							onClick={() => setIndex(i)}
						></button>
					))}
				</div>
			</div>
		)
	}
}

export default CreateCarousel;
