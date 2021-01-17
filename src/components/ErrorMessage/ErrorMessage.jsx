import React, { useEffect } from "react";
import "./ErrorMessage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideErrorMessage } from "../../store/reducers/errorMessageReducer";

const ErrorMessage = () => {
  const { showError, errorMessage } = useSelector(
    (state) => state.error_message
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideErrorMessage());
    }, 3000);
  }, [showError]);

  if (showError) return <div className="error-message">{errorMessage}</div>;
  else return null;
};

export default ErrorMessage;
