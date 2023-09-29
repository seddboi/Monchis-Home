import React, { useState, useMemo, useEffect } from 'react';
import { isMBD } from '../../utils/isMBD';
import './navbar.css';

export function NavBar() {
	const [isBDAY, setIsBDAY] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleMenuOpen = () => {
		setMenuOpen(true);
	};

	const handleMenuClose = () => {
		setMenuOpen(false);
	};

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useMemo(() => {
		const current = isMBD();
		setIsBDAY(current);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className="w-full fixed top-0 left-0 z-10">
			<div className="pl-6 pr-3 py-4 sm:py-7 flex items-center text-third bg-first text-mobile shadow-lg shadow-gray-300">
				<div className="flex grow justify-start">
					<p>{isBDAY ? 'Happy Birthday Monchi 🎂' : 'Welcome Monchi 🦋'}</p>
				</div>
				{windowWidth >= 640 ? (
					<ul className="flex">
						<li className="mx-3">
							<button className="navBtns">About Her</button>
						</li>
						<li className="mx-3">
							<button className="navBtns">Fact Generator</button>
						</li>
						<li className="mx-3">
							<button className="navBtns">Quiz</button>
						</li>
					</ul>
				) : (
					<div className="flex justify-end">
						<i className="box sm:hidden fa-solid fa-bars fa-xl cursor-pointer" onClick={handleMenuOpen}></i>
					</div>
				)}
			</div>
			<div
				id="slide-menu"
				className={
					`${windowWidth >= 640 ? 'hidden ' : ''}` +
					`${menuOpen ? 'translate-x-0 ' : 'translate-x-[-100vw] '}` +
					'fixed top-0 left-0 w-screen h-screen text-mobile flex flex-col text-third bg-first transition-transform duration-300 ease-[cubic-bezier(0, .52, 0, 1)] pt-6'
				}
			>
				<div className="w-full h-10 flex justify-end items-center pr-3 pt-4 mb-4 cursor-pointer">
					<i className="box fa-solid fa-x fa-xl" onClick={handleMenuClose}></i>
				</div>
				<div className="flex justify-start p-3">
					<button className="hover:underline cursor-pointer">About her</button>
				</div>
				<div className="flex justify-start p-3">
					<button className="hover:underline cursor-pointer">Fact Generator</button>
				</div>
				<div className="flex justify-start p-3">
					<button className="hover:underline cursor-pointer">Quiz</button>
				</div>
			</div>
		</div>
	);
}
