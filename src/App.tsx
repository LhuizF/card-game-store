import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRoutes from './routes';
import GlobalStyle from './style/globalStyles';

import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <MainRoutes />
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
