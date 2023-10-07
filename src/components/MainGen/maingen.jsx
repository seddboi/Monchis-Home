import React, { useState } from 'react';
import axios from 'axios';
import { APP_URL } from '../../App';
import './maingen.css';

export function MainGen() {
	const [fact, setFact] = useState('');

	const getFact = () => {
		axios
			.get(APP_URL + '/fact')
			.then((response) => setFact(response.data.fact))
			.then(() => triggerExpand());
	};

	const triggerExpand = () => {
		const container = document.getElementById('fact-container');
		container.classList.add('expanded');
	};

	return (
		<div className="text-second text-[20px] max-w-[850px]">
			<div className="pt-5 px-5 pb-2 flex flex-col justify-center items-center">
				<h5 className="mb-3">
					This is the <a className="underline decoration-solid text-third">Monchi Fact Generator</a>.
				</h5>
				<h6 className="mb-3">
					It presents various <a className="underline decoration-solid text-third">proven</a> (and not at all opinionated)
					theories of Monchi Behaviors and Attributes.
				</h6>
				<p>Click the "Generate" to get started.</p>
			</div>
			<div className="flex justify-center items-center mb-4">
				<div
					id="fact-container"
					className="flex justify-center items-center max-w-[500px] text-[22px] bg-first rounded-md mx-5 slide"
				>
					<div className="m-5">
						<p className="text-third">{fact}</p>
					</div>
				</div>
			</div>

			<div className="flex justify-center bg-white">
				<button onClick={() => getFact()} className="py-1 px-2 rounded-md text-first bg-third hover:bg-first hover:text-third">
					Generate
				</button>
			</div>
		</div>
	);
}
