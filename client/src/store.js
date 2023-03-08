import { combineReducers, createStore } from "redux";
import { getAllBurgersReducer } from "./reducers/burgerReducers";
import thunk from "redux-thunk";

const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
});

const initialState = {};

const store = createStore();
