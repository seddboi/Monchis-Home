import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const APP_URL = 'http://localhost:3321';

export function Login({ setA }) {
	const [isPVisible, setIsPVisible] = useState(false);
	const [password, setPassword] = useState('');
	const [accessMessage, setAccessMessage] = useState('');
	// const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	const toggleVisibility = () => {
		setIsPVisible(!isPVisible);
	};

	const handleForm = (e) => {
		e.preventDefault();
		checkPassword();
		setPassword('');
	};

	// const fadeOut = () => {
	// 	let el = document.querySelector('');
	// 	el.classList.replace('animate-fadeIn, animate-fadeOut');
	// };

	const checkPassword = async () => {
		await axios
			.post(APP_URL + '/password', {
				password: password,
			})
			.then((res) => {
				setAccessMessage(res.data.message);
				if (res.data.access) {
					sessionStorage.setItem('access', res.data.access);
					setA(res.data.access);
				}
			});
	};

	// useMemo(() => {
	// 	const loadingData = async () => {
	// 		await new Promise((r) => setTimeout(r, 3500));
	// 		setLoading(!loading);
	// 	};
	// 	loadingData();
	// }, []);

	useEffect(() => {
		if (sessionStorage.getItem('access')) {
			navigate('/home', { replace: true });
		}
	}, [sessionStorage.getItem('access')]);

	return (
		<div className="w-full h-[90vh] flex justify-center items-center">
			<form id="form" className="w-[300px] flex flex-col" onSubmit={handleForm}>
				<label htmlFor="password-input" className="text-fifth">
					Password
				</label>
				<div className="flex justify-center items-center">
					<input
						type={isPVisible ? 'text' : 'password'}
						id="password-input"
						className="password-input"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					></input>
					<i
						className={'text-fifth cursor-pointer fa-regular ' + `${isPVisible ? 'fa-eye-slash' : 'fa-eye'}`}
						onClick={toggleVisibility}
					></i>
				</div>
				<p className={'text-red-600'}>{accessMessage}</p>
			</form>
		</div>
	);
}
