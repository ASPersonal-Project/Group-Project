import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducer';
import setAuthToken from './utils/setAuthToken';

const middleware = [thunk];
const composeWithEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const configureStore = createStore(rootReducer,composeWithEnhancer);


if(localStorage.token){
    setAuthToken(localStorage.token);
}

export default configureStore;