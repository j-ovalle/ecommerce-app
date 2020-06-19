import { createStore} from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

export const store = createStore(
    rootReducer, 
    process.env.NODE_ENV === 'development' && 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default { store, persistor };