import React, { useState } from 'react';
import axios from 'axios';
import { APP_URL } from '../../App';

export function MainGen() {
	const [fact, setFact] = useState('');

	const getFact = () => {
		axios.get(APP_URL + '/fact').then((response) => setFact(response.data.fact));
	};

	return (
		<div className="text-second text-[20px]">
			<div className="p-5 flex flex-col justify-center items-center">
				<h5 className="mb-5">
					This is the <a className="underline decoration-solid text-third">Monchi Fact Generator</a>.
				</h5>
				<h6 className="mb-5">
					Here, you will have the ability to be presented with various{' '}
					<a className="underline decoration-solid text-third">proven</a> (and not at all opinionated) theories of Monchi
					Behaviors and Attributes.
				</h6>
				<p className="">Click the "Generate" button below to get started.</p>
			</div>
			<div className="flex justify-center items-center p-5">
				<div className={fact === '' ? 'hidden' : 'w-[300px] sm:w-full border-4 border-third p-5'}>
					<p className="text-third">{fact}</p>
				</div>
			</div>

			<div className="flex justify-center">
				<button onClick={() => getFact()} className="underline p-2 rounded-md hover:bg-first">
					Generate
				</button>
			</div>
		</div>
	);
}
