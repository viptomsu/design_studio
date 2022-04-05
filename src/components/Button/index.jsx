import { useNavigate } from 'react-router-dom';
import './Button.scss';

function Button({
	tag = 'button',
	to, type, children,
	className, ...props
}) {
	const navigate = useNavigate();
	const newProps = {};
	const Tag = tag;

	if(tag = 'button') {
		newProps.onClick = () => navigate(to);
	} else {
		newProps.to = to;
	}
	newProps.className = 'btn';

	if(typeof type == 'string') {
		newProps.className += ' btn--' + type;
	} else if(Array.isArray(type)) {
		type.forEach(element => {
			newProps.className += ' btn--' + element;
		})
	}
	if(className) {
		newProps.className += ' ' + className;
	}

	Object.assign(newProps, props);

	return (
		<Tag
			{...newProps}
		>
			{children}
		</Tag>
	)
}

export default Button;
