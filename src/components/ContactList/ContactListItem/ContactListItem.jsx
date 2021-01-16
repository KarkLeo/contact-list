import React from "react";
import "./ContactListItem.css";
import { NavLink } from "react-router-dom";
import Icon from "../../commons/Sprite/Icon";
import translate from "../../../utils/translate";

const ContactListItem = ({ id, first_name, last_name, gender, birth_date }) => {
  return (
    <div className="cl-item">
      <NavLink to={`/contact/${id}`} className="cl-item__link">
        <span className="cl-item__name">{first_name}</span>
        <span className="cl-item__name">{last_name}</span>
        <span className="cl-item__description">{translate[gender]}</span>
        <span className="cl-item__description">{birth_date}</span>
      </NavLink>

      <button className="cl-item__button">
        <Icon iconId="delete" className="cl-item__button-icon" />
      </button>
    </div>
  );
};

export default ContactListItem;
