import React from 'react';
import { Layout } from '../../components/layout/layout';
import { MainGen } from '../../components/MainGen/maingen';

export function FactGenerator() {
	return (
		<Layout>
			<div className="flex justify-center items-center h-screen min-h-[800px]">
				<div className="h-[60px] sm:h-[86px]"></div>
				<MainGen />
			</div>
		</Layout>
	);
}
