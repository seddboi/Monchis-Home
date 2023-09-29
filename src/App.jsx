import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './utils/privateroutes';
import { Preloader } from './components/PreLoader/preloader';
import { LandingPage } from './pages/LandingPage/landingpage';
import { AboutHer } from './pages/AboutHer/abouther';
// import {<ComingSoon />} from
import { Login } from './pages/Login/login';
import './App.css';

function App() {
	const [loading, setLoading] = useState(false);
	const [a, setA] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3700);
	}, [a]);

	if (loading) {
		return <Preloader />;
	}

	return (
		<div>
			<Router>
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route exact path="/home" element={<LandingPage />}></Route>
						<Route exact path="/about" element={<AboutHer />}></Route>
						{/* <Route exact path="/factgen" element={<ComingSoon />}></Route> */}
					</Route>
					<Route exact path="/" element={<Login setA={setA} />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
