import {applyMiddleware, combineReducers, createStore} from "redux";
import ThunkMiddleware from "redux-thunk";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
        news: newsReducer,
        auth: authReducer
})
let store = createStore(reducers,applyMiddleware(ThunkMiddleware));

export default store;