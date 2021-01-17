import React from "react";
import "./DeleteButton.css";
import Icon from "../commons/Sprite/Icon";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteContact } from "../../store/reducers/currentContactReducer";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const onDelete = async () => {
    if (await dispatch(deleteContact(id))) {
      history.push(`/`);
    }
  };

  return (
    <button className="delete-button" onClick={onDelete}>
      <Icon iconId="delete" className="delete-button__icon" />
    </button>
  );
};

export default DeleteButton;
