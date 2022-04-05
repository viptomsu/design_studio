import { createContext, useContext } from "react";

const Projects = createContext();

function Provider({ children }) {

	const projects = [
		{
			id: 1,
			title: 'Coca-Cola',
			slideImages: ['https://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-304828-coco-cola_brand--default--968.jpg', 'http://www.wolfexperience.com/wp-content/uploads/2015/09/Screen-Shot-2015-09-09-at-09.50.50.png', 'https://cdn.worldvectorlogo.com/logos/coca-cola-logo.svg'],
			images: ['https://www.africa-newsroom.com/files/large/843a556e48084b0'].concat(Array(3).fill('https://www.coca-colacompany.com/content/dam/journey/us/en/press-releases/coca-cola-logo-bottle-cropped-2.jpg')),
			locationImages: ['https://www.coca-colacompany.com/content/dam/journey/us/en/brands/brands-landing/brands-landing-local-feature-image-793x473.jpg', 'https://www.drinks-insight-network.com/wp-content/uploads/sites/23/2017/10/1l-Coca-Cola.jpg','https://ioniqa.com/wp-content/uploads/Coca-Cola-Store-Orlando.jpg'],
			paragraphs: [
				{
					heading: 'Coca-Cola',
					param: `Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat`
				},
				{
					heading: 'Project Date',
					param: `2018`
				},
				{
					heading: 'The Challenge',
					param: `Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat`
				},
				{
					heading: 'Project Role',
					param: `Branding, Visual Identity, Web Design, Illustration`
				},
				{
					heading: 'Our Approach',
					param: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat.`
				},
			]
		}
	]

	return <Projects.Provider value={projects}>
		{children}
	</Projects.Provider>
}

const useProject = (id) => {
	const projects = useContext(Projects);
	return projects[id];
}

export {
	Projects,
	Provider,
	useProject as get
}
