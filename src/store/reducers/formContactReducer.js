import { contactAPI } from "../../api/api";
import formConfig from "../../utils/formConfig";
import validateField from "../../utils/validateField";
import prepareFormData from "../../utils/prepareFormData";
import { setCurrentContact } from "./currentContactReducer";
import { setErrorMessage } from "./errorMessageReducer";

const CLEAN_INIT_VALUES = "form-contact/CLEAN_INIT-VALUES";
const SET_INIT_VALUES = "form-contact/SET_INIT-VALUES";
const CHANGE_FIELD = "form-contact/CHANGE-FIELD";

const initState = {
  fields: [],
};

const formContactReducer = (state = initState, action) => {
  switch (action.type) {
    case CLEAN_INIT_VALUES:
      return {
        ...state,
        fields: formConfig.map((i) =>
          validateField(
            {
              name: i.name,
              value: i.initValue,
              startValue: i.initValue,
              isTouch: false,
              isError: false,
              errorMessage: "",
            },
            i
          )
        ),
      };
    case SET_INIT_VALUES:
      return { ...state, fields: action.fields };
    case CHANGE_FIELD:
      return {
        ...state,
        fields: state.fields.map((i) =>
          i.name === action.field.name ? action.field : i
        ),
      };
    default:
      return state;
  }
};

export const cleanInitValues = () => ({ type: CLEAN_INIT_VALUES });
export const setInitValues = (fields) => ({ type: SET_INIT_VALUES, fields });
export const changeField = (field) => ({ type: CHANGE_FIELD, field });

export const fetchInitValue = (id) => async (dispatch, getState) => {
  const current_contact = getState().current_contact;
  let contact = {};

  if (id == current_contact.id) contact = current_contact;
  else {
    const res = await contactAPI.getContactById(id);
    if (res.status === 200) contact = res.data;
    else {
      dispatch(setErrorMessage(res.toJSON().message));
      return true;
    }
  }

  dispatch(
    setInitValues(
      formConfig.map((i) =>
        validateField(
          {
            name: i.name,
            value: contact[i.name],
            startValue: contact[i.name],
            isTouch: false,
            isError: false,
            errorMessage: "",
          },
          i
        )
      )
    )
  );
};

export const sendUpdateContact = (userId) => async (dispatch, getState) => {
  const fields = getState().form_contact.fields;
  let res = await contactAPI.updateContactById(userId, prepareFormData(fields));
  if (res.status === 200) {
    dispatch(setCurrentContact(res.data));
    dispatch(fetchInitValue(res.data.id));
    return true;
  } else {
    dispatch(setErrorMessage(res.toJSON().message));
    return false;
  }
};

export const sentNewContact = () => async (dispatch, getState) => {
  const fields = getState().form_contact.fields;
  let res = await contactAPI.createContact(prepareFormData(fields));
  if (res.status === 201) {
    dispatch(cleanInitValues());
    return true;
  } else {
    dispatch(setErrorMessage(res.toJSON().message));
    return false;
  }
};

export default formContactReducer;
