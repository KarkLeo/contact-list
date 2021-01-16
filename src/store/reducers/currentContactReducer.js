import { contactAPI } from "../../api/api";

const SET_CURRENT_CONTACT = "current-contact/SET-CURRENT-CONTACT";

const initState = {
  id: null,
  first_name: "",
  last_name: "",
  birth_date: null,
  gender: null,
  job: "",
  biography: "",
  is_active: false,
};

const currentContactReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_CONTACT:
      return { ...state, ...action.contact };
    default:
      return state;
  }
};

export const setCurrentContact = (contact) => ({
  type: SET_CURRENT_CONTACT,
  contact,
});

export const fetchCurrentContact = (id) => async (dispatch) => {
  const res = await contactAPI.getContactById(id);
  if (res.status === 200) dispatch(setCurrentContact(res.data));
};

export default currentContactReducer;
