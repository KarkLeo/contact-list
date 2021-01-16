import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import contactListReducer from "./reducers/contactsListReducer";
import currentContactReducer from "./reducers/currentContactReducer";
import newContactReducer from "./reducers/newContactReducer";

let reducer = combineReducers({
  contact_list: contactListReducer,
  current_contact: currentContactReducer,
  new_contact: newContactReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
