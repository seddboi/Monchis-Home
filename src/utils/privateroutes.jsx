import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
	let access = sessionStorage.getItem('access');

	return access ? <Outlet /> : <Navigate to="/" />;
};
