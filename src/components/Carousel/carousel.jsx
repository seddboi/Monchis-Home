import React, { useState, useRef, useEffect } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
// import { Carousel, initTE } from 'tw-elements';

export function ImageCarousel({ imageProps }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timeoutRef = useRef(null);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? imageProps.length - 1 : currentIndex - 1;

		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === imageProps.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;

		setCurrentIndex(newIndex);
	};

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			nextSlide();
		}, 5000);

		const blurDivs = document.querySelectorAll('.blur-load-slider');
		blurDivs.forEach((div) => {
			const img = div.querySelector('img');
			function loaded() {
				div.classList.add('loaded');
			}

			if (img.complete) {
				loaded();
			} else {
				img.addEventListener('load', loaded);
			}
		}, []);
	}, [currentIndex]);

	return (
		<div className="flex flex-col justify-center items-center">
			<div
				className={`w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] relative mb-5 blur-load-slider bg-[url('${imageProps[currentIndex].smlink}')]`}
			>
				<img
					src={imageProps[currentIndex].link}
					loading="lazy"
					className="w-full h-full bc-center bg-cover border-8 border-second rounded flex column justify-between transition-all duration-500 absolute"
				/>
				<div className="absolute w-full h-full flex justify-between items-center">
					<button
						onClick={prevSlide}
						className="w-[22%] h-full flex justify-center items-center text-white/30 sm:hover:bg-second/30 duration-300"
					>
						<AiFillCaretLeft size={40} />
					</button>
					<button
						onClick={nextSlide}
						className="w-[22%] h-full flex justify-center items-center text-white/40 sm:hover:bg-second/30 duration-300"
					>
						<AiFillCaretRight size={40} />
					</button>
				</div>
			</div>
			<p className="text-third w-[300px] sm:w-[400px] h-[80px]">{imageProps[currentIndex].alt}</p>
		</div>
	);
}
