import { createContext, useContext } from "react";

const Context = createContext();

function Provider({ children }) {

	const logo = 'Kisbag Design Studio';
	const pages = {
		home: {
			name: 'Home',
			shortName: 'home',
			path: '/'
		},
		works: {
			name: 'Works',
			shortName: 'works',
			path: '/works'
		},
		logos: {
			name: 'Logo Collection',
			shortName: 'logos',
			path: '/logos'
		},
		about: {
			name: 'About & Contact',
			shortName: 'about',
			path: '/about'
		},
		blog: {
			name: 'Blog',
			shortName: 'blog',
			path: '/blog'
		}
	};

	return (
		<Context.Provider value={{pages, logo}}>
			{children}
		</Context.Provider>
	)
}

const usePages = () => useContext(Context);

export {
	Context,
	Provider,
	usePages
}
