import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Preloader } from '../../components/PreLoader/preloader';
import { Layout } from '../../components/layout/layout';
import { Main } from '../../components/Main/main';

export function LandingPage() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useMemo(() => {
		const loadingData = async () => {
			await new Promise((r) => setTimeout(r, 3500));
			setLoading(!loading);
		};
		loadingData();
	}, []);

	if (loading) {
		return <Preloader />;
	}
	return (
		<Layout>
			<Main />
		</Layout>
	);
}
