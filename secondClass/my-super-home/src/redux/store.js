import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, Reducer);

const composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const persistor = persistStore(store);

export { persistor };

export default store;