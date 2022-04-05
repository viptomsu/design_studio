import Button from '../../components/Button';
import './BigButtons.scss';

function BigButtons(props) {
	const pages = props.pages || [];
	return (
		<div className="big-buttons">
			{pages.map(page =>
				<Button
					key={page.name}
					type='block'
					to={page.path}
				>
					{page.shortName}
				</Button>
			)}
		</div>
	)
}

export default BigButtons;
