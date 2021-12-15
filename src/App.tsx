import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainRoutes from './routes';
import GlobalStyle from './style/globalStyles';
import Header from './components/Header';

import { store, persistor } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Header />
                    <MainRoutes />
                    <GlobalStyle />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
