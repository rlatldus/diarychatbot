import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Board from './pages/Board';
import Main from './pages/Main';
import ToasterProvider from './providers/ToasterProvider';
import { checkAuthLoader } from './util/auth';
import SocialLoginToken from './pages/SocialLoginToken';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { index: true, element: <Login /> },
            { path: 'regist', element: <Register /> },
            {
                path: 'main/:userId',
                element: <Main />,
                loader: checkAuthLoader,
            },
            { path: 'Board/:id', element: <Board /> },
            {
                path: 'loadingAuth/:userId',
                element: <SocialLoginToken />,
            },
        ],
    },
]);

const App = () => {
    return (
        <>
            <ToasterProvider />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
