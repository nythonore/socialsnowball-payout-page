import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PayoutPage } from './pages';

const Router = createBrowserRouter([
	{
		path: '',
		element: <PayoutPage />,
	},
	{
		path: '*',
		element: <Navigate to='/' replace />,
	},
]);

export default Router;
