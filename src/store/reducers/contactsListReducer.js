import { contactAPI } from "../../api/api";

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
  dispatch(setContactList(await contactAPI.getList()));
};

export default contactListReducer;
