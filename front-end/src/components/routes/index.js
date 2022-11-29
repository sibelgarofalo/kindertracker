/** Imports */
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

/** Pages */
import {
    Login,
    Register,
    Dashboard
} from '../../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

const Routes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Routes;