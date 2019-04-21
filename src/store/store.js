
import { createStore , combineReducers, applyMiddleware, compose} from 'redux';
import Products from './reducers/products';
import Users from './reducers/users';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    products: Products, 
    users : Users
});

const store = createStore(rootReducer, 
    compose (applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;