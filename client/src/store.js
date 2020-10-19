import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];
// console.log("store", window.__REDUX_DEVTOOLS_EXTENSION__);
const middleWareApplied = applyMiddleware(...middleware);
const composed = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(middleWareApplied, window.__REDUX_DEVTOOLS_EXTENSION__())
  : middleWareApplied;

const store = createStore(rootReducer, initialState, composed);


export default store;
