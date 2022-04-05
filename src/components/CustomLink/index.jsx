import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.scss';

function CustomLink({
	children, to,
	className,
	dark = false,
	...props
}) {
	const resolved = useResolvedPath(to);
	const match = useMatch({path: resolved.pathname, end: true});

	const classLink = 'link' +
		(className ? ' ' + className : '') +
		(dark ? ' link--dark' : '') +
		(match ? ' active' : '');

	return (
		<Link
			to={to}
			className={classLink}
			disabled={match}
			{...props}
		>
			{children}
		</Link>
	)
}

export default CustomLink;
