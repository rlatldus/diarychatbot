import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ToasterProvider from './providers/ToasterProvider';

import { checkAuthLoader } from './util/auth';

import MainLayout from './components/Main/MainLayout';
import BoardRootLayout from './components/Board/BoardRootLayout';
import SocialLoginToken from './pages/SocialLoginToken';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Board from './pages/Board';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { index: true, element: <Login /> },
            { path: 'regist', element: <Register /> },
            {
                path: 'main/:userId',
                element: <MainLayout />,
                loader: checkAuthLoader,
                children: [
                    {
                        index: true,
                        element: <Main />,
                    },
                    {
                        path: 'Board',
                        element: <BoardRootLayout />,
                        children: [
                            { index: true, element: <Board /> },
                            { path: ':boardId', element: <Board /> },
                        ],
                    },
                ],
            },
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
