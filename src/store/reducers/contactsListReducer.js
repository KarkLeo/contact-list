import { contactAPI } from "../../api/api";
import { setErrorMessage } from "./errorMessageReducer";

const SET_CONTACTS_LIST = "contacts-list/SET-CONTACTS-LIST";

const initialState = {
  list: [],
};

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS_LIST:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export const setContactList = (list) => ({ type: SET_CONTACTS_LIST, list });

export const fetchContactList = () => async (dispatch) => {
  const res = await contactAPI.getList();
  if (res.status === 200) dispatch(setContactList(res.data));
  else dispatch(setErrorMessage(res.toJSON().message));
};

export default contactListReducer;
