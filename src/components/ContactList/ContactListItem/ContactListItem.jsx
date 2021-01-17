import React from "react";
import "./ContactListItem.css";
import { NavLink } from "react-router-dom";
import translate from "../../../utils/translate";
import DeleteButton from "../../DeleteButton/DeleteButton";

const ContactListItem = ({ id, first_name, last_name, gender, birth_date }) => {
  return (
    <div className="cl-item">
      <NavLink to={`/contact/${id}`} className="cl-item__link">
        <span className="cl-item__name">{first_name}</span>
        <span className="cl-item__name">{last_name}</span>
        <span className="cl-item__description">{translate[gender]}</span>
        <span className="cl-item__description">{birth_date}</span>
      </NavLink>

      <DeleteButton id={id} />
    </div>
  );
};

export default ContactListItem;
