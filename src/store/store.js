//store
//reducers
//action => whatever action creator returns will be actiona nd action will be an ibj with 1 mandatory prop
//called { type:"delete_produ"} which will define what type ofaction is being peformed
//action creators => function that will help us to create action

import { createStore , combineReducers, applyMiddleware, compose} from 'redux';
//combine reducers is used to combine multiple reducers that we have in our app and it takes an obj 
//with key=propertyname and value= reducer name and then pass  thatinside createStore()

//now we have to use applymiddleware() fun inside createStore and pass the middleware thunk we want to use.
import Products from './reducers/products';
import Users from './reducers/users';
import thunk from 'redux-thunk';
//we imported the reducer here and hen pass it in instance of create store which will make the data from reducer
//available inside store.

const rootReducer = combineReducers({
    products: Products, //value what we imported 
    users : Users
});

const store = createStore(rootReducer, 
    compose (applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
//1st para of createstore is reducer and then we have to create reducer
//in here we also need to config redux dev tools we installed from chrome and we add that in createStore method
//as create store takes 2 para we use anoteher lib called compose and wrap our middleware and redux toolsinside it
//as we need both of them
export default store;