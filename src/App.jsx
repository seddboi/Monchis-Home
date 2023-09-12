import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './utils/privateroutes';
import { LandingPage } from './pages/LandingPage/landingpage';
import { Login } from './pages/Login/login';
import './App.css';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route exact path="/home" element={<LandingPage />}></Route>
						<Route></Route>
						<Route></Route>
					</Route>
					<Route exact path="/" element={<Login />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
