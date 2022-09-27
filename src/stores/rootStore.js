import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store=configureStore({ reducer:rootReducer }, applyMiddleware(thunk) );


export default store;










// What is root reducer in Redux?
// // Reducers are the only way to change states in Redux. It is the only place where you can write logic and calculations. 
// Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object.