import React from 'react';
import { ImageCarousel } from '../Carousel/carousel';
import { imagesObj } from '../../utils/imageDetails';

export function Main() {
	// useEffect(() => {}, []);
	return (
		<div className="text-second">
			<div className="w-full h-screen sm:min-h-[600px] flex flex-col justify-center">
				<div className="w-full flex justify-center sm:justify-start">
					<h6 className="opacity-0 font-[ILoveGlitter] text-5xl sm:text-6xl md:text-7xl sm:ml-10 text-second mb-10 animate-slideInLeft animation-delay-1000 backdrop-blur backdrop-sepia rounded-lg p-3">
						MonicaGrace
					</h6>
				</div>

				<div className="w-full flex justify-center px-2">
					<h6 className="opacity-0 font-[ILoveGlitter] text-5xl sm:text-6xl md:text-7xl text-second sm:mx-10 mb-10 animate-slideInLeft animation-delay-2000 backdrop-blur backdrop-sepia rounded-lg p-3">
						You are the light of my life
					</h6>
				</div>

				<div className="w-full flex justify-center sm:justify-end">
					<h6 className="opacity-0 font-[ILoveGlitter] text-5xl sm:text-6xl md:text-7xl sm:mr-10 text-second animate-slideInLeft animation-delay-3000 backdrop-blur backdrop-sepia rounded-lg p-3">
						I|you
					</h6>
				</div>
			</div>

			<div className="w-full h-screen min-h-[700px] flex flex-col md:flex-row justify-center items-center px-5">
				<h6 className="font-[ILoveGlitter] text-4xl md:text-5xl mb-10 mx-5 backdrop-blur backdrop-sepia rounded-lg p-2">
					When you are having fun ...
				</h6>
				<ImageCarousel imageProps={imagesObj.havingFun} />
			</div>

			<div className="w-full h-screen min-h-[700px] flex flex-col md:flex-row-reverse justify-center items-center px-5">
				<h6 className="font-[ILoveGlitter] text-4xl md:text-5xl mb-10 mx-5 backdrop-blur backdrop-sepia rounded-lg p-2">
					When we are out and about ...
				</h6>
				<ImageCarousel imageProps={imagesObj.outTogether} />
			</div>

			<div className="w-full h-screen min-h-[700px] flex flex-col md:flex-row justify-center items-center px-5">
				<h6 className="font-[ILoveGlitter] text-4xl md:text-5xl mb-10 mx-5 backdrop-blur backdrop-sepia rounded-lg p-2">
					When you are being a goofball ...
				</h6>
				<ImageCarousel imageProps={imagesObj.goofball} />
			</div>

			<div className="w-full h-screen min-h-[650px] border-black flex flex-col justify-center items-center">
				<h6 className="mb-7 font-[ILoveGlitter] text-4xl mx-2 text-second backdrop-blur backdrop-sepia rounded-lg p-2">
					And I will always love you.
				</h6>
				<img
					src="https://ik.imagekit.io/sp7l57yrpo/mbdpics/disney.jpeg"
					className="w-[300px] sm:w-[400px] md:w-[450px] h-auto rounded-md border-8 border-second shadow-lg shadow-gray-400 mb-10"
				/>
				<h6 className="mb-5 font-[ILoveGlitter] text-4xl mx-2 text-second">- Gian</h6>
			</div>
		</div>
	);
}
