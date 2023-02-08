import { createBrowserRouter } from 'react-router-dom';
import App from './routes/App';
import ErrorPage from './Components/error-page';
import Loginform from './boxcontents/Loginform';
import Signupform from './boxcontents/Signupform';
import StatePlayground from './boxcontents/StatePlayground';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'login',
				element: <Loginform />,
			},
			{
				path: 'signup',
				element: <Signupform />,
			},
			{
				path: 'users',
				element: <Loginform />,
				children: [
					{
						path: 'add',
						element: <Loginform />,
					},
				],
			},
			{
				path: 'state',
				element: <StatePlayground />,
			},
		],
	},
]);
