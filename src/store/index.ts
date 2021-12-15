import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cart from './Cart/reducer';

const persistConfig = {
    key: 'cart',
    storage
};

const RootReducer = combineReducers({ cart });

const persistedReducers = persistReducer(persistConfig, RootReducer);

const store = createStore(persistedReducers);
const persistor = persistStore(store);

export { store, persistor };
