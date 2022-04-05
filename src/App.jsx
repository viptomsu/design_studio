import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './routes/Home';
import Works from './routes/Works';
import Logos from './routes/Logos';
import About from './routes/About';
import Blog from './routes/Blog';
import Project from './routes/Project';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/works' element={<Works />}>
						<Route path=':projectId' element={<Project />}/>
					</Route>
					<Route path='/logos' element={<Logos />} />
					<Route path='/about' element={<About />} />
					<Route path='/blog' element={<Blog />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
