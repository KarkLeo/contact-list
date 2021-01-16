import React from "react";
import "./DeleteButton.css";
import Icon from "../commons/Sprite/Icon";

const DeleteButton = ({ id }) => {
  return (
    <button className="delete-button">
      <Icon iconId="delete" className="delete-button__icon" />
    </button>
  );
};

export default DeleteButton;
