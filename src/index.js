import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { Provider as PageProvider } from './Context/Pages';
import { Provider as ProjectsProvider } from './Context/Projects';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOMServer from 'react-dom/server';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PageProvider>
			<ProjectsProvider>
				<App />
			</ProjectsProvider>
		</PageProvider>
	</React.StrictMode>
);
// root.render(
// 	ReactDOMServer.renderToString(
// 		<PageProvider>
// 			<ProjectsProvider>
// 				<App />
// 			</ProjectsProvider>
// 		</PageProvider>
// 	)
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
