import React from 'react';
import { Header } from './header';

export function Layout({ children }) {
	return (
		<div className="bg-[url('/butterflies.png')] bg-center">
			<Header />
			<main>{children}</main>
		</div>
	);
}
