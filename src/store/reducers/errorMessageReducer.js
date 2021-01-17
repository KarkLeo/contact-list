const SET_ERROR_MESSAGE = "error-message/SET-ERROR-MESSAGE";
const HIDE_ERROR_MESSAGE = "error-message/HIDE-ERROR-MESSAGE";

const initState = {
  showError: false,
  errorMessage: "",
};

const errorMessageReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        showError: true,
        errorMessage: action.message,
      };
    case HIDE_ERROR_MESSAGE:
      return { ...state, showError: false, errorMessage: "" };
    default:
      return state;
  }
};

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  message,
});

export const hideErrorMessage = () => ({ type: HIDE_ERROR_MESSAGE });

export default errorMessageReducer;
