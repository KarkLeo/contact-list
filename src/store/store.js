import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import contactListReducer from "./reducers/contactsListReducer";
import currentContactReducer from "./reducers/currentContactReducer";
import formContactReducer from "./reducers/formContactReducer";

import errorMessageReducer from "./reducers/errorMessageReducer";

let reducer = combineReducers({
  contact_list: contactListReducer,
  current_contact: currentContactReducer,
  form_contact: formContactReducer,

  error_message: errorMessageReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
