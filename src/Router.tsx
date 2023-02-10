import { createBrowserRouter } from 'react-router-dom';
import App from './routes/App';
import ErrorPage from './Components/error-page';
import Loginform from './boxcontents/Loginform';
import Signupform from './boxcontents/Signupform';
import StatePlayground from './boxcontents/StatePlayground';
import Users from './boxcontents/Users';

const router = createBrowserRouter([
  {
    path: '/laughing-eureka/',
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
        element: <Users />,
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

export default router;
