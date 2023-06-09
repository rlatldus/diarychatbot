import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Board from './pages/Board';
import Main from './pages/Main';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { index: true, element: <Login /> },
            { path: 'regist', element: <Register /> },
            { path: 'main', element: <Main /> },
            { path: 'board', element: <Board /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
