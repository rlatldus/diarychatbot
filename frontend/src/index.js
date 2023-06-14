import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { logout } from './api/auth';
import { userStorage } from './util/userStorage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error) => {
                return failureCount <= 1 && error.status !== 404;
            },
            onSuccess: async (data) => {
                const errorMsg = data?.data?.errors?.[0]?.message;

                if (errorMsg === 'Unauthorized') {
                    await logout();
                    userStorage.remove();
                    window.location.replace('/');
                }
            },
        },
    },
});

root.render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
    // </React.StrictMode>,
);
