import React from 'react';

export function Preloader() {
	return (
		<div className="w-full h-[90vh] flex flex-col justify-center items-center">
			<div className="spinningLogo flex justify-center m-3">
				<img className="h-[100px] w-[110px]" alt="Monchi Spinning Logo" src="/snoopy-cheerleader.gif" />
			</div>
		</div>
	);
}
