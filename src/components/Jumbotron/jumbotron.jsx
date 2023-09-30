import React from 'react';
import './jumbotron.css';

export function Jumbotron() {
	return (
		<div className="bg-first text-third flex flex-col sm:flex-row items-center justify-center rounded-lg p-3 m-5 max-w-[700px] shadow-md shadow-zinc-400">
			<div className="sm:w-[50%] mb-5 sm:m-5 flex justify-center items-center">
				<img
					loading="lazy"
					src="https://ik.imagekit.io/sp7l57yrpo/mbdpics/monch-museum_tuXDFXCjq?updatedAt=1696031700625"
					className="w-[250px] sm:min-w-[250px] h-auto border-8 border-third rounded-full"
				/>
			</div>
			<div className="sm:w-full text-justify sm:m-5">
				<p className="indent-5">
					My girlfriend Monica is truly a wonderful person, and has captured my heart since day one. Her presence in my life
					continues to bring me joy, love, and happiness, and not a day goes by where I do not feel. I am truly grateful of all of
					her qualities, as all of her qualities make her so unique. From her kindness to her intelligence, here are just a few
					details of what make her so great...
				</p>
			</div>
		</div>
	);
}
