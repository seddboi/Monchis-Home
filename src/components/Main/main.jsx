import React, { useEffect } from 'react';
import { ImageCarousel } from '../Carousel/carousel';
import { imagesObj } from '../../utils/imageDetails';

export function Main() {
	// useEffect(() => {}, []);
	return (
		<div className="text-second">
			<div className="w-full h-screen sm:min-h-[600px] flex flex-col justify-center">
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

			<div className="w-full h-screen flex flex-col md:flex-row justify-center items-center px-5">
				<h6 className="font-[ILoveGlitter] text-4xl md:text-5xl mb-10 mx-5">When you are having fun ...</h6>
				<ImageCarousel imageProps={imagesObj.havingFun} />
			</div>

			<div className="w-full h-screen flex flex-col md:flex-row-reverse justify-center items-center px-5">
				<h6 className="font-[ILoveGlitter] text-4xl md:text-5xl mb-10 mx-5">When we are out and about ...</h6>
				<ImageCarousel imageProps={imagesObj.outTogether} />
			</div>

			<div className="w-full h-screen flex flex-col md:flex-row justify-center items-center px-5">
				<h6 className="font-[ILoveGlitter] text-4xl md:text-5xl mb-10 mx-5">When you are being a goofball ...</h6>
				<ImageCarousel imageProps={imagesObj.goofball} />
			</div>

			<div className="w-full h-screen border-black flex flex-col justify-center items-center">
				<h6 className="mb-7 font-[ILoveGlitter] text-4xl mx-2 text-second">
					And will always love <a className="text-5xl sm:text-6xl text-first">you</a>.
				</h6>
				<img
					src="https://ik.imagekit.io/sp7l57yrpo/mbdpics/disney.jpeg"
					className="w-10/12 h-auto max-w-xs rounded-md border-8 border-second shadow-lg shadow-gray-400 mb-10"
				/>
				<h6 className="mb-5 font-[ILoveGlitter] text-4xl mx-2 text-second">- Gian</h6>
			</div>
		</div>
	);
}
