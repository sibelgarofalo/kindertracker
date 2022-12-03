/** Imports */
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

/** Pages */
import {
    Login,
    Register,
    Dashboard,
    Forgot,
    Verification
} from '../../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/forgot',
        element: <Forgot />
    },
    {
        path: '/verification',
        element: <Verification />
    }
])

const Routes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Routes;