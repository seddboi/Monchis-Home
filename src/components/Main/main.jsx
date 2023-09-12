import React, { useEffect } from 'react';

export function Main() {
	// useEffect(() => {}, []);
	return (
		<div>
			<div className="w-full h-screen flex flex-col justify-center">
				<h6 className="opacity-0 font-[ILoveGlitter] text-5xl sm:text-7xl text-center sm:text-left sm:ml-10 text-second mb-10 animate-fadeIn animation-delay-1000">
					Monica Grace...
				</h6>
				<h6 className="opacity-0 font-[ILoveGlitter] text-5xl sm:text-7xl text-second sm:mx-10 mb-10 animate-fadeIn animation-delay-2000">
					You are the light of my life...
				</h6>
				<h6 className="opacity-0 font-[ILoveGlitter] text-5xl sm:text-7xl text-center sm:text-right sm:mr-10 text-second animate-fadeIn animation-delay-3000">
					I love <a className="text-6xl sm:text-8xl text-first">you</a>...
				</h6>
			</div>
			<div className="w-full h-[70vh]"></div>
		</div>
	);
}
