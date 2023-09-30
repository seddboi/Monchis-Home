import React from 'react';
import { Layout } from '../../components/layout/layout';
import { Jumbotron } from '../../components/Jumbotron/jumbotron';

export function AboutHer() {
	return (
		<Layout>
			<div className="h-[62px] sm:h-[86px]"></div>
			<div className="flex justify-center">
				<Jumbotron />
			</div>
		</Layout>
	);
}
